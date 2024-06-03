import React from 'react';
import styles from './ProfileInfo.module.scss';
import { ProfileType } from '../../../redux/profileReducer';
import { Preloader } from '../../components/common/preloader/Preloader';
import defaultPhoto from '../../../assets/userPhoto.webp';
import { Profile } from '../Profile';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoType = {
   profile: ProfileType | null;
};

const ProfileInfo = (props: ProfileInfoType) => {
   if (!props.profile) {
      return <Preloader />;
   }

   return (
      <div>
         <div>
            {/* <img
               className={styles.profileCover}
               alt="profileCover"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwM1pIUa4tHBRHNNfSlrch8EKLu68CNSaQ3A&usqp=CAU"
            ></img> */}
         </div>
         <div className={styles.profileInfo}>
            <ProfileStatus status="Hello!!!" />
            <img
               className={styles.profileAvatar}
               alt="avatar"
               src={props.profile.photos.small !== null ? props.profile.photos.small : defaultPhoto}
            ></img>
            <div className={styles.socials}>
               <span>Мои социальные сети</span>
               <span>{props.profile.contacts.github}</span>
               <span>{props.profile.contacts.instagram}</span>
               <span>{props.profile.contacts.vk}</span>
               <span>{props.profile.contacts.youtube}</span>
            </div>
            <div className={styles.socials}>
               <span>{props.profile.aboutMe}</span>
            </div>
            <div className={styles.workStatus}>
               <span>{props.profile.lookingForAJobDescription}</span>
               {props.profile.lookingForAJob ? <span>Ищу работу</span> : <span>Не ищу работу</span>}
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
