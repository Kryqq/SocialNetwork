import { ActionType, DialogsPageType } from './state';

export const UPDATE_NEW_PRIVATE_MESSAGE_TEXT = 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT';

export const SEND_PRIVATE_MESSAGE = 'SEND-PRIVATE-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
   switch (action.type) {
      case UPDATE_NEW_PRIVATE_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;

      case SEND_PRIVATE_MESSAGE:
         const newPrivateMessage = state.newMessageText;
         state.newMessageText = '';
         state.messagesData.push({ id: 6, message: newPrivateMessage });
         return state;
      default:
         return state;
   }
};

export interface IUPDATE_NEW_MESSAGE_TEXT {
   type: 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT';
   newText: string;
}
export type UpdateNewMessageTextActionCreatorType = (text: string) => IUPDATE_NEW_MESSAGE_TEXT;

export interface ISEND_PRIVATE_MESSAGE {
   type: 'SEND-PRIVATE-MESSAGE';
}
export type SendMessageActionCreatorType = () => ISEND_PRIVATE_MESSAGE;

export const updateNewMessageTextActionCreator: UpdateNewMessageTextActionCreatorType = (text: string) => ({
   type: UPDATE_NEW_PRIVATE_MESSAGE_TEXT,
   newText: text,
});

export const sendPrivateMessageActionCreator: SendMessageActionCreatorType = () => ({
   type: SEND_PRIVATE_MESSAGE,
});
