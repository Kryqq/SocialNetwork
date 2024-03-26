import React from 'react';
import { Post } from './posts/Post';

export type PostsPropsType = {
   avatar: string;
};

export const Posts = (props: PostsPropsType) => {
   return (
      <div>
         <div>
            <textarea></textarea>
            <button></button>
         </div>
         <Post avatar={props.avatar} likes={16} />
         <Post avatar={props.avatar} likes={11} />
         <Post avatar={props.avatar} likes={14} />
         <Post avatar={props.avatar} likes={5} />
         <Post avatar={props.avatar} likes={8} />
      </div>
   );
};
