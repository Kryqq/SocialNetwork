import React from 'react';
import { PostsPropsType } from '../Posts';
import styles from './Post.module.scss';
export const Post = (props: PostsPropsType) => {
   return (
      <div>
         <img alt="avatar" className={styles.postAvatar} src={props.avatar}></img>
         <p className={styles.postText}>Hello, how are you?</p>
      </div>
   );
};
