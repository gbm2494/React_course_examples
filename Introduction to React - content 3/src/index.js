import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from './data/data.js';
import NewsList from './components/news_list';
import NewsDetail from './components/news_detail';
//import App from './components/app';
import List from './components/app';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {news : data.articles, selectedNews : data.articles[0]};
  }

  render(){
    if(!this.state.news){
      <div>Loading...</div>
    }

    return(
      <div>
      <NewsList
      onNewsSelect={selectedNews => this.setState({selectedNews})}
      news={this.state.news}/>
      <NewsDetail singleNews={this.state.selectedNews}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
