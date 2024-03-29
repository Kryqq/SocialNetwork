import styles from './Dialogs.module.scss';
import { DialogItem } from './dialogItem/DialogItem';
import { MessageItem } from './messages/MessageItem';
import { DialogsPageType } from '../../redux/state';
import React from 'react';

type DialogsPropsType = {
	dialogsPage: DialogsPageType

}

export const Dialogs = (props: DialogsPropsType ) => {
   return (
      <div className={styles.dialogsMenu}>
         <div className={styles.dialog}>
            {props.dialogsPage.dialogsData.map((dialog) => (
               <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
            ))}
         </div>
         <div className={styles.messages}>
            {props.dialogsPage.messagesData.map((message) => (
               <MessageItem key={message.id} messageContent={message.message} />
            ))}
         </div>
      </div>
   );
};
