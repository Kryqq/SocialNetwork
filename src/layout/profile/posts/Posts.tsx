import React from 'react';
import { Post } from './post/Post';
import { PostsDataType } from '../../../redux/state';

type PostsPropsType = {
   postsData: PostsDataType[];
};

export const Posts = (props: PostsPropsType) => {
   return (
      <div>
         <div>
            <textarea></textarea>
            <button></button>
         </div>
         {props.postsData.map((post) => (
            <Post id={post.id} postAvatar={post.avatar} postTitle={post.postTitle} likes={post.likes} key={post.id} />
         ))}
      </div>
   );
};
