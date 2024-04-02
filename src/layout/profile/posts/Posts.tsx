import React from 'react';
import { Post } from './post/Post';
import {
   ActionType,
   PostsDataType,
   UpdateNewPostTextActionCreatorType,
   addPostActionCreatorType,
} from '../../../redux/state';

type PostsPropsType = {
   postsData: PostsDataType[];
   newPostText: string;
   dispatch: (action: ActionType) => void;
};

const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();

const addPostActionCreator: addPostActionCreatorType = () => {
   return { type: 'ADD-POST' };
};

const updateNewPostTextActionCreator: UpdateNewPostTextActionCreatorType = (text: string) => {
   return { type: 'UPDATE-NEW-POST-TEXT', newText: text };
};

export const Posts = (props: PostsPropsType) => {
   const addPostHandler = () => {
      props.dispatch(addPostActionCreator());
   };

   const postChangeHandler = () => {
      if (ref.current) {
         const text = ref.current?.value;
         props.dispatch(updateNewPostTextActionCreator(text));
         ref.current.value = '';
      }
   };

   return (
      <div>
         <div>
            <textarea onChange={postChangeHandler} ref={ref} value={props.newPostText} />
            <button onClick={addPostHandler}></button>
         </div>
         {props.postsData.map((post) => (
            <Post id={post.id} postAvatar={post.avatar} postTitle={post.postTitle} likes={post.likes} key={post.id} />
         ))}
      </div>
   );
};
