import React from 'react';
import styles from './Profile.module.scss';
import { Posts } from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';
import { PostsDataType } from '../..';

type PostsPropsType = {
   postsData: PostsDataType[];
};

export const Profile = (props: PostsPropsType) => {
   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <Posts
            postsData={props.postsData}
            avatar={
               'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
            }
         />
      </div>
   );
};
