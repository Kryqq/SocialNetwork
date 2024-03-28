import React from 'react';
import { Post } from './post/Post';
import { PostsDataType } from '../../..';

type PostPropsType = {
   postsData: PostsDataType[];
   avatar: string;
};

export const Posts = (props: PostPropsType) => {
   return (
      <div>
         <div>
            <textarea></textarea>
            <button></button>
         </div>
         {props.postsData.map((post) => (
            <Post key={post.id} postTitle={post.postTitle} avatar={props.avatar} likes={post.likes} />
         ))}
      </div>
   );
};
