import styles from './Dialogs.module.scss';
import { DialogItem } from './dialogItem/DialogItem';
import { MessageItem } from './messages/MessageItem';
import { DialogsPageType } from '../../redux/store';
import React from 'react';

type DialogsPropsType = {
   dialogsPage: DialogsPageType;
   addNewMessage: () => void;
   updateNewMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Dialogs = (props: DialogsPropsType) => {

   const addMessageHandler = () => {
      props.addNewMessage();
   };

   const changeMessageHander = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewMessage(e);
   };

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
            <div>
               <textarea
                  onChange={changeMessageHander}
                  value={props.dialogsPage.newMessageText}
                  placeholder="Введите сообщение"
               ></textarea>
            </div>
            <div>
               <button onClick={addMessageHandler}>Отправить</button>
            </div>
         </div>
      </div>
   );
};
