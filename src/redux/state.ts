export interface IADD_POST {
   type: 'ADD-POST';
}

export interface ISEND_PRIVATE_MESSAGE {
   type: 'SEND-PRIVATE-MESSAGE';
}

interface IUPDATE_NEW_POST_TEXT {
   type: 'UPDATE-NEW-POST-TEXT';
   newText: string;
}

interface IUPDATE_NEW_MESSAGE_TEXT {
   type: 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT';
   newText: string;
}

export type SendMessageActionCreatorType = () => ISEND_PRIVATE_MESSAGE;

export type UpdateNewMessageTextActionCreatorType = (text: string) => IUPDATE_NEW_MESSAGE_TEXT;

export type addPostActionCreatorType = () => IADD_POST;

export type UpdateNewPostTextActionCreatorType = (text: string) => IUPDATE_NEW_POST_TEXT;

export type ActionType = IADD_POST | IUPDATE_NEW_POST_TEXT | IUPDATE_NEW_MESSAGE_TEXT | ISEND_PRIVATE_MESSAGE;

export type PostsDataType = {
   id: number;
   postTitle: string;
   avatar: string;
   likes: number;
};

export type ProfilePageType = {
   postsData: PostsDataType[];
   newPostText: string;
};

export type DialogsDataType = {
   id: number;
   name: string;
};

export type MessagesDataType = {
   id: number;
   message: string;
};

export type DialogsPageType = {
   dialogsData: DialogsDataType[];
   messagesData: MessagesDataType[];
   newMessageText: string;
};

export type StateType = {
   profilePage: ProfilePageType;
   dialogsPage: DialogsPageType;
};

export type StoreType = {
   _state: StateType;
   getState: () => StateType;

   _callSubscriber: (state: StateType) => void;
   subscribe: (observer: (state: StateType) => void) => void;

   dispatch: (action: ActionType) => void;
};

export const store: StoreType = {
   _state: {
      profilePage: {
         postsData: [
            {
               id: 1,
               postTitle: 'Hello, how are you?',
               avatar:
                  'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
               likes: 16,
            },
            {
               id: 2,
               postTitle: 'now im using whats app ;)0?',
               avatar:
                  'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
               likes: 11,
            },
            {
               id: 3,
               postTitle: 'yoyoy?',
               avatar:
                  'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
               likes: 14,
            },

            {
               id: 4,
               postTitle: 'good weather today!',
               avatar:
                  'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
               likes: 5,
            },
         ],
         newPostText: '',
      },
      dialogsPage: {
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
      },
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {},
   subscribe(observer: (state: StateType) => void) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         const newPost = {
            id: 5,
            postTitle: this._state.profilePage.newPostText,
            avatar:
               'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
            likes: 0,
         };

         this._state.profilePage.postsData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state); // используется местный стейт
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT') {
         this._state.dialogsPage.newMessageText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === 'SEND-PRIVATE-MESSAGE') {
         const newPrivateMessage = this._state.dialogsPage.newMessageText;
         this._state.dialogsPage.newMessageText = '';
         this._state.dialogsPage.messagesData.push({ id: 6, message: newPrivateMessage });
         this._callSubscriber(this._state);
      }
   },
};

// creatorts consts for actions
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_PRIVATE_MESSAGE_TEXT = 'UPDATE-NEW-PRIVATE-MESSAGE-TEXT';

const SEND_PRIVATE_MESSAGE = 'SEND-PRIVATE-MESSAGE';

//action creators
export const addPostActionCreator: addPostActionCreatorType = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator: UpdateNewPostTextActionCreatorType = (text: string) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
});

export const updateNewMessageTextActionCreator: UpdateNewMessageTextActionCreatorType = (text: string) => ({
   type: UPDATE_NEW_PRIVATE_MESSAGE_TEXT,
   newText: text,
});
export const sendPrivateMessageActionCreator: SendMessageActionCreatorType = () => ({
   type: SEND_PRIVATE_MESSAGE,
});
