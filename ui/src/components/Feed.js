import React from 'react';
import moment from 'moment';

const Feed = (props) => (
  <div className="feed">
    <ul>
      {props.blog.map(b => (
        <li className="feed-list-item"> 
          <div className="feed-list-item-title" onClick={props.handleClick}>{b.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{b.author}</span> <span>{moment(b.createdAt).fromNow()}</span></div>
          <img alt='' src={b.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
          <span className="feed-list-item-lede">{b.body}</span>
        </li>
        ))};
    </ul>
  </div>
);

export default Feed;

