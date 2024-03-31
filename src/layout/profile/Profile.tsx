import styles from './Profile.module.scss';
import { Posts } from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';
import React from 'react';

type ProfilePropsType = {
   profilePage: ProfilePageType;
   addPost: () => void;
   updateNewPostText: (newText: string) => void;
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <Posts
            newPostText={props.profilePage.newPostText}
            postsData={props.profilePage.postsData}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
         />
      </div>
   );
};
