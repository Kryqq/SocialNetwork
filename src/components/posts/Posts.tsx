import React from 'react';
import { Post } from './post/Post';

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
         <Post avatar={props.avatar} />
         <Post avatar={props.avatar} />
         <Post avatar={props.avatar} />
         <Post avatar={props.avatar} />
         <Post avatar={props.avatar} />
      </div>
   );
};
