import React from 'react';

const NewsItem = function({onNewsSelect, singleNews}){
  const imageUrl = singleNews.urlToImage;

    return(
      <li onClick={() => onNewsSelect(singleNews)} className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img className="media-object sidebar-image" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {singleNews.title}
          </div>
        </div>
      </div>
    </li>
    );
}

export default NewsItem;
