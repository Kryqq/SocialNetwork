import React from 'react';
import styles from './Navbar.module.scss';
export const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <ul>
            <li>Profle</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
         </ul>
      </div>
   );
};
