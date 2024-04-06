import styles from './Profile.module.scss';
import ProfileInfo from './profileInfo/ProfileInfo';
import { PostsContainer } from './posts/PostsContainer';
import { StoreType } from '../../redux/reduxStore';
import React from 'react';

type ProfilePropsType = {
   store: StoreType;
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className={styles.profile}>
         <ProfileInfo />
         <PostsContainer store={props.store} />
      </div>
   );
};
