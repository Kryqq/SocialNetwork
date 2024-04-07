import { ActionType, DialogsPageType } from './store';

export const UPDATE_NEW_PRIVATE_MESSAGE_TEXT = 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT';

export const SEND_PRIVATE_MESSAGE = 'SEND-PRIVATE-MESSAGE';

const initialState: DialogsPageType = {
   messagesData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hello' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'I am fine' },
   ],
   dialogsData: [
      { id: 1, name: 'Вася' },
      { id: 2, name: 'Петя' },
      { id: 3, name: 'Женя' },
      { id: 4, name: 'Лена' },
      { id: 5, name: 'Игорь' },
   ],
   newMessageText: '',
};

export const dialogsReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case UPDATE_NEW_PRIVATE_MESSAGE_TEXT:
         return { ...state, newMessageText: action.newText };

      case SEND_PRIVATE_MESSAGE:
         return {
            ...state,
            newMessageText: '',
            messagesData: [...state.messagesData, { id: 5, message: state.newMessageText }],
         };
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
