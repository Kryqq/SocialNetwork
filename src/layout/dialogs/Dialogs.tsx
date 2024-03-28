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
            {dialogsData.map((dialog) => (
               <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
            ))}
         </div>
         <div className={styles.messages}>
            {messagesData.map((message) => (
               <MessageItem key={message.id} messageContent={message.message} />
            ))}
         </div>
      </div>
   );
};
