import { Dialogs } from './Dialogs';
import { sendPrivateMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { StoreType } from '../../redux/reduxStore';
import React from 'react';

type DialogsContainerPropsType = {
   store: StoreType;
};

export const DialogsContainer = (props: DialogsContainerPropsType) => {
   const state = props.store.getState();
   const addNewMessage = () => {
      props.store.dispatch(sendPrivateMessageActionCreator());
   };

   const updateNewMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.store.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
   };

   return (
      <Dialogs
         addNewMessage={addNewMessage}
         updateNewMessage={updateNewMessage}
         dialogsData={state.dialogsPage.dialogsData}
         messagesData={state.dialogsPage.messagesData}
         newMessageText={state.dialogsPage.newMessageText}
      />
   );
};
