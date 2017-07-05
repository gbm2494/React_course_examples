import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewsItem from '../containers/news_item';

export class NewsList extends Component{
  renderNew(newItem){
    const title = newItem.webTitle;
    const id = newItem.id;

    return (
    	<NewsItem
      key={id}
      title={title}
      singleNews = {newItem}/>
    	);
  }

  render(){
      return(
        <div className="col-md-3 sidebar-news">
        {this.props.news.map(this.renderNew)}
        </div>
      );
  }
}

function mapStateToProps(state){
  return {news : state.news};
}

export default connect(mapStateToProps)(NewsList);
