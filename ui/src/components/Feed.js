import React from 'react';
import samplePosts from '../sampleData'
const Feed = (props) => (
  <div className="feed">
    <ul>
      {samplePosts.map(post => (
        <li className="feed-list-item"> 
          <div className="feed-list-item-title" onClick={props.handleClick}>{post.title}</div>
          <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{post.author}</span></div>
          <img alt='' src={post.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
          <span className="feed-list-item-lede">{post.body}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Feed;
