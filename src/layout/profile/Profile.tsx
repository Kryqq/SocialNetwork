import styles from './Profile.module.scss';
import { Posts } from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';
import { ActionType, ProfilePageType } from '../../redux/store';
import React from 'react';

type ProfilePropsType = {
   profilePage: ProfilePageType;
   dispatch: (action: ActionType) => void;
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <Posts
            newPostText={props.profilePage.newPostText}
            postsData={props.profilePage.postsData}
            dispatch={props.dispatch}
         />
      </div>
   );
};
