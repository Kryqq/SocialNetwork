import React from 'react';
import { Post } from './post/Post';
import { PostsDataType } from '../../../redux/state';

type PostsPropsType = {
   postsData: PostsDataType[];
   newPostText: string;
   addPost: () => void;
   updateNewPostText: (newText: string) => void;
};

const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();

export const Posts = (props: PostsPropsType) => {
   const addPostHandler = () => {
	 props.addPost();
      props.updateNewPostText('');
   };

   const postChangeHandler = () => {
      if (ref.current) {
         const text = ref.current?.value;
         props.updateNewPostText(text);
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
