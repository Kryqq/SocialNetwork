import React from 'react';
import { Post } from './post/Post';
import { ActionType, PostsDataType } from '../../../redux/state';

type PostsPropsType = {
   postsData: PostsDataType[];
   newPostText: string;
   dispatch: (action: ActionType) => void;
};

const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();

export const Posts = (props: PostsPropsType) => {
   const addPostHandler = () => {
      props.dispatch({ type: 'ADD-POST' });
   };

   const postChangeHandler = () => {
      if (ref.current) {
         const text = ref.current?.value;
         props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
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
