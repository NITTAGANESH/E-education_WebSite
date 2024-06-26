import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
    return (
      <div>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
  );
};

export default Feed;
