import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
export const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <ul>
            <li>
               <Link to="/profile">Profle</Link>
            </li>
            <li>
               <Link to="/dialogs">Messages</Link>
            </li>
            <li>
               <Link to="/news">News</Link>
            </li>
            <li>
               <Link to="/music">Music</Link>
            </li>
            <li>
               <Link to="/settings">Settings</Link>
            </li>
         </ul>
      </div>
   );
};
