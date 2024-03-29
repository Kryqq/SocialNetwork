import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export type NavbarItemType = {
   navItemTitle: string;
   navItemPath: string;
};
const navbarItems: NavbarItemType[] = [
   {
      navItemTitle: 'Профиль',
      navItemPath: '/profile',
   },
   {
      navItemTitle: 'Сообщения',
      navItemPath: '/dialogs',
   },
   {
      navItemTitle: 'Новости',
      navItemPath: '/news',
   },
   {
      navItemTitle: 'Музыка',
      navItemPath: '/music',
   },
   {
      navItemTitle: 'Настройки',
      navItemPath: '/settings',
   },
];

export const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <ul>
            {navbarItems.map((item, key ) => (
               <li key={key}>
                  <NavLink key={item.navItemTitle} activeClassName={styles.active} to={item.navItemPath}>
                     {item.navItemTitle}
                  </NavLink>
               </li>
            ))}
         </ul>
      </div>
   );
};
