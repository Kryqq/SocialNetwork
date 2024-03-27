import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.scss';

export type DialogItemType = {
   name: string;
   id: string;
};
export const DialogItem = (props: DialogItemType) => {
   return (
      <div className={styles.dialogItem}>
         <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
   );
};
