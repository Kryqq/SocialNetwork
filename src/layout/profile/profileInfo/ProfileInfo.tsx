import React from 'react';
import styles from './ProfileInfo.module.scss';
const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img
               className={styles.profileCover}
               alt="profileCover"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwM1pIUa4tHBRHNNfSlrch8EKLu68CNSaQ3A&usqp=CAU"
            ></img>
         </div>
         <div className={styles.profileInfo}>
            <img
               className={styles.profileAvatar}
               alt="avatar"
               src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            ></img>
         </div>
      </div>
   );
};

export default ProfileInfo;
