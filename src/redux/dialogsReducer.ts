import { ActionType, DialogsPageType } from './state';

const UPDATE_NEW_PRIVATE_MESSAGE_TEXT = 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT';

const SEND_PRIVATE_MESSAGE = 'SEND-PRIVATE-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
   if (action.type === UPDATE_NEW_PRIVATE_MESSAGE_TEXT) {
      state.newMessageText = action.newText;
   } else if (action.type === SEND_PRIVATE_MESSAGE) {
      const newPrivateMessage = state.newMessageText;
      state.newMessageText = '';
      state.messagesData.push({ id: 6, message: newPrivateMessage });
   }

   return state;
};
