import React from 'react';

const NewsDetail = function(props){
  if(!props.singleNews){
  return <div>Loading...</div>;
}

const newsDescription = props.singleNews.description;
const imageUrl = props.singleNews.urlToImage;
return(
  <div className="col-md-9 news_details">
    <div>
      <img src={imageUrl}/>
    </div>
    <div className="details">
      <h2>{props.singleNews.title}</h2>
      <div className="author">
        <small className="pull-xs-right">By: {props.singleNews.author} at: {props.singleNews.publishedAt}</small>
      </div>
      <p>{props.singleNews.description}</p>
      <p>Read full version on: <a href={props.singleNews.url}>{props.singleNews.url}</a></p>
    </div>
  </div>
);
}

export default NewsDetail;
