import React from 'react';
import styles from './Dialogs.module.scss';
import { DialogItem } from './dialogItem/DialogItem';
import { MessageItem } from './messages/MessageItem';
import { MessagesDataType } from '../..';
import { DialogsDataType } from '../..';

export type DialogsDataTypeProps = {
   dialogsData: DialogsDataType[];
   messagesData: MessagesDataType[];
};

export const Dialogs = (props: DialogsDataTypeProps) => {
   return (
      <div className={styles.dialogsMenu}>
         <div className={styles.dialog}>
            {props.dialogsData.map((dialog) => (
               <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
            ))}
         </div>
         <div className={styles.messages}>
            {props.messagesData.map((message) => (
               <MessageItem key={message.id} messageContent={message.message} />
            ))}
         </div>
      </div>
   );
};
