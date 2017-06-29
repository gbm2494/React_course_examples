import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import NewsList from '../containers/news_list';
import NewsDetail from '../containers/news_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <SearchBar/>
        </div>
        <div>
          <NewsList/>
          <NewsDetail/>
        </div>
      </div>
    );
  }
}
