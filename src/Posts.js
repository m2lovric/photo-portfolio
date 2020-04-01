import React from 'react';

const Posts = () => {
  return(
    <div>Posts</div>
  )
}

const PostsImg = ({src,alt}) => {
  return(
    <article className="PostsImg">
      <img src={src} alt={alt}/>            
    </article>
  )
}

export default Posts;