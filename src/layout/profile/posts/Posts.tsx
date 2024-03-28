import React from 'react';
import { Post } from './post/Post';

export type PostsPropsType = {
   avatar: string;
};

export type PostsDataType = {
   id: number;
   postTitle: string;
   avatar: string;
   likes: number;
};
export const postsData: PostsDataType[] = [
   {
      id: 1,
      postTitle: 'Hello, how are you?',
      avatar:
         'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
      likes: 16,
   },
   {
      id: 2,
      postTitle: 'now im using whats app ;)0?',
      avatar:
         'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
      likes: 11,
   },
   {
      id: 3,
      postTitle: 'yoyoy?',
      avatar:
         'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
      likes: 14,
   },

   {
      id: 4,
      postTitle: 'good weather today!',
      avatar:
         'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
      likes: 5,
   },
];

export const Posts = (props: PostsPropsType) => {
   return (
      <div>
         <div>
            <textarea></textarea>
            <button></button>
         </div>
         <Post postTitle="Hello, how are you?" avatar={props.avatar} likes={16} />
         <Post postTitle="now im using whats app ;)0?" avatar={props.avatar} likes={11} />
         <Post postTitle="yoyoy?" avatar={props.avatar} likes={14} />
         <Post postTitle="good weather today!" avatar={props.avatar} likes={5} />
         <Post postTitle="anybody here??/" avatar={props.avatar} likes={8} />
      </div>
   );
};
