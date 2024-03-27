import React from 'react';
import styles from './Dialogs.module.scss';

import { DialogItem } from './dialogItem/DialogItem';
import { MessageItem } from './messages/MessageItem';

export const Dialogs = () => {
   return (
      <div className={styles.dialogsMenu}>
         <div className={styles.dialog}>
            <DialogItem name="Вася" id="1" />
            <DialogItem name="Петя" id="2" />
            <DialogItem name="Женя" id="3" />
            <DialogItem name="Лена" id="4" />
            <DialogItem name="Игорь" id="5" />
         </div>
         <div className={styles.messages}>
            <MessageItem messageContent="HiMessageItem" />
            <MessageItem messageContent="hello" />
            <MessageItem messageContent="what's up?" />
         </div>
      </div>
   );
};
