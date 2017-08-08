import React from 'react';

const NewsDetail = function(props){
  if(!props.singleNews){
  return <div>Loading...</div>;
  }

  const newsDescription = props.singleNews.description;
  const imageUrl = props.singleNews.urlToImage;
  const newsUrl = props.singleNews.url;
  const newsAuthor = props.singleNews.author;
  const newsTitle = props.singleNews.title;
  const newsPublishedAt = props.singleNews.publishedAt;

  return(
    <div className="col-md-9 news_details">
      <div>
        <img src={imageUrl}/>
      </div>
      <div className="details">
        <h2>{newsTitle}</h2>
        <div className="author">
          <small className="pull-xs-right">By: {newsAuthor} at: {newsPublishedAt}</small>
        </div>
        <p>{newsDescription}</p>
        <p>Read full version on: <a href={newsUrl}>{newsUrl}</a></p>
      </div>
    </div>
  );
}

export default NewsDetail;
