import React from 'react';
import { Post } from './post/Post';
import { PostsDataType } from '../../../redux/store';

type PostsPropsType = {
   postsData: PostsDataType[];
   newPostText: string;
   updateNewPostText: (text: string) => void;
   addPost: () => void;
};

const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();

export const Posts = (props: PostsPropsType) => {
   const addPostHandler = () => {
      props.addPost();
   };

   const postChangeHandler = () => {
      if (ref.current) {
         const text = ref.current.value;
         props.updateNewPostText(text);
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
