import React from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './profileInfo/ProfileInfo';
import { PostsContainer } from './posts/PostsContainer';
import { ProfileType } from '../../redux/profileReducer';

type ProfilePropsType = {
   setUserProfile: (profile: ProfileType) => void;
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <PostsContainer />
      </div>
   );
};
