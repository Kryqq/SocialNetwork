import styles from './Profile.module.scss';
import ProfileInfo from './profileInfo/ProfileInfo';
import { PostsContainer } from './posts/PostsContainer';
import { StoreType } from '../../redux/reduxStore';
import React from 'react';

export const Profile = () => {
   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <PostsContainer  />
      </div>
   );
};
