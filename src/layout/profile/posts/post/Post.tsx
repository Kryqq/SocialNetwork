import React from 'react';
import styles from './Post.module.scss';
import { PostsDataType } from '../../../../redux/state';

export const Post = (props: PostsDataType) => {
   return (
      <div>
         <img alt="avatar" className={styles.postAvatar} src={props.avatar}></img>
         <p className={styles.postText}> {props.postTitle}</p>
         <p>likes: {props.likes}</p>
      </div>
   );
};
