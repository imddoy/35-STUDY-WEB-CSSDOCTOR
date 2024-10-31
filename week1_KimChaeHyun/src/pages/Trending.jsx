import React from 'react';
import posts from '@data/post';
import Post from '@components/post/Post';

const Trending = () => {
  return (
    <>
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </>
  );
};

export default Trending;
