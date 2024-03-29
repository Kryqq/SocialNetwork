import React from 'react';
import { Post } from './post/Post';
import { PostsPropsType } from '../../../redux/state';

export const Posts = (props: PostsPropsType) => {
   return (
      <div>
         <div>
            <textarea></textarea>
            <button></button>
         </div>
         {props.postsData.map((post) => (
            <Post id={post.id} key={post.id} postTitle={post.postTitle} avatar={props.avatar} likes={post.likes} />
         ))}
      </div>
   );
};
