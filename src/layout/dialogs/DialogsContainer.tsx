import { Dialogs } from './Dialogs';
import { sendPrivateMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { DispatchType, StateType } from '../../redux/reduxStore';
import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/WithAuthRedirect';

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

export const DialogsContainer = compose<ComponentType>(
   connect(mapStateToProps, mapDispatchToProps),
   WithAuthRedirect
)(Dialogs);
