import React from 'react';
import styles from './Dialogs.module.scss';

import { DialogItem } from './dialogItem/DialogItem';
import { MessageItem } from './messages/MessageItem';

export type DialogsDataType = {
   id: number;
   name: string;
};

export const dialogsData: DialogsDataType[] = [
   { id: 1, name: 'Вася' },
   { id: 2, name: 'Петя' },
   { id: 3, name: 'Женя' },
   { id: 4, name: 'Лена' },
   { id: 5, name: 'Игорь' },
];

export type MessagesDataType = {
   id: number;
   message: string;
};

export const messagesData: MessagesDataType[] = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'Hello' },
   { id: 3, message: 'How are you?' },
   { id: 4, message: 'I am fine' },
];

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
