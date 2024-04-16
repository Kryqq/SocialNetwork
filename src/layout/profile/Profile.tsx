import React from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './profileInfo/ProfileInfo';
import { PostsContainer } from './posts/PostsContainer';
import { ProfileType } from '../../redux/profileReducer';

type ProfilePropsType = {
   setUserProfileThunkCreator: (userId: string) => void;
   profile: ProfileType | null;
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className={styles.profile}>
         <ProfileInfo profile={props.profile} />
         <PostsContainer />
      </div>
   );
};
