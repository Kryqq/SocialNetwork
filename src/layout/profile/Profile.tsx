import styles from './Profile.module.scss';
import { Posts } from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';
import React from 'react';

type ProfilePropsType = {
   profilePage: ProfilePageType;
};

export const Profile = (props: ProfilePropsType) => {

   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <Posts postsData={props.profilePage.postsData} />
      </div>
   );
};
