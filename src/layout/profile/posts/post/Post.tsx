import React from 'react';
import styles from './Post.module.scss';
export type PostPropsType = {
   avatar: string;
   likes: number;
};

export const Post = (props: PostPropsType) => {
   return (
      <div>
         <img alt="avatar" className={styles.postAvatar} src={props.avatar}></img>
         <p className={styles.postText}>Hello, how are you?</p>
         <p>likes: {props.likes}</p>
      </div>
   );
};
