import styles from './Post.module.scss';
import React from 'react';

type PostPropsType = {
   id: number;
   likes: number;
   postTitle: string;
   postAvatar: string;
};

export const Post = (props: PostPropsType) => {
   return (
      <div>
         <img
            alt="avatar"
            className={styles.postAvatar}
            src={
               'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
            }
         ></img>
         <p className={styles.postText}> {props.postTitle}</p>
         <p>likes: {props.likes}</p>
      </div>
   );
};
