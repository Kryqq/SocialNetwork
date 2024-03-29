import styles from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';
import { DialogsDataType } from '../../../redux/state';

export const DialogItem = (props: DialogsDataType) => {
   return (
      <div className={styles.dialogItem}>
         <NavLink className={styles.dialogItem} to={`/dialogs/${props.id}`}>
            {props.name}
         </NavLink>
      </div>
   );
};
