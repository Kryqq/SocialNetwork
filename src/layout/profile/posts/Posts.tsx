import React from 'react';
import { Post } from './post/Post';
import { PostsDataType } from '../../../redux/state';

type PostsPropsType = {
   postsData: PostsDataType[];
   addPost: (newPostText: string) => void;
};

const ref: React.RefObject<HTMLTextAreaElement> = React.createRef();

export const Posts = (props: PostsPropsType) => {
	
   const addPostHandler = ( ) => {
      if (ref.current) {
		props.addPost(ref.current.value);
      }
   };
   return (
      <div>
         <div>
            <textarea ref={ref}></textarea>
            <button onClick={addPostHandler}></button>
         </div>
         {props.postsData.map((post) => (
            <Post id={post.id} postAvatar={post.avatar} postTitle={post.postTitle} likes={post.likes} key={post.id} />
         ))}
      </div>
   );
};
