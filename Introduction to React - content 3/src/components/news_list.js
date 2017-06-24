import React from 'react';
import NewsItem from './news_item';

const NewsList = function(props){
  const NewsItems = props.news.map((newItem) => {
    //To update an specific item you need to identify every item with an unique id.
    return (
    	<NewsItem
      onNewsSelect={props.onNewsSelect}
      key={newItem.description}
      singleNews={newItem}/>
    	);
  });

  return(
    <div className="col-md-3">
      {NewsItems}
    </div>
  );
};

export default NewsList;
