import { Dialogs } from './Dialogs';
import { sendPrivateMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { DispatchType, StateType } from '../../redux/reduxStore';
import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state: StateType) => {
   return {
      dialogsPage: state.dialogsPage,
   };
};

const mapDispatchToProps = (dispatch: DispatchType) => {
   return {
      updateNewMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
         dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
      },
      addNewMessage: () => {
         dispatch(sendPrivateMessageActionCreator());
      },
   };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
