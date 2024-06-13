import React from 'react';
import styles from './Profile.module.scss';
import ProfileInfo from './profileInfo/ProfileInfo';
import { PostsContainer } from './posts/PostsContainer';
import { ProfileType } from '../../redux/profileReducer';

type ProfilePropsType = {
   setUserProfileThunkCreator: (userId: string) => void;
   updateStatus: (status: string) => void;
   profile: ProfileType | null;
   status: string;
};

export const Profile = (props: ProfilePropsType) => {


   return (
      <div className={styles.profile}>
         <ProfileInfo profile={props.profile} status={props.status} updateStatusThunkCreator={props.updateStatus} />
         <PostsContainer />
      </div>
   );
};
