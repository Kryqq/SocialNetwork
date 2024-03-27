import React from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <ul>
            <li>
               <NavLink activeClassName={styles.active} to="/profile">
                  Профиль
               </NavLink>
            </li>
            <li>
               <NavLink activeClassName={styles.active} to="/dialogs">
                  Сообщения
               </NavLink>
            </li>
            <li>
               <NavLink activeClassName={styles.active} to="/news">
                  Новости
               </NavLink>
            </li>
            <li>
               <NavLink activeClassName={styles.active} to="/music">
                  Музыка
               </NavLink>
            </li>
            <li>
               <NavLink activeClassName={styles.active} to="/settings">
                  Настройки
               </NavLink>
            </li>
         </ul>
      </div>
   );
};
