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
};

export type StateType = {
   profilePage: ProfilePageType;
   dialogsPage: DialogsPageType;
};

export const state: StateType = {
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
   },
};

export type StoreType = {
   _state: StateType;
   getState: () => StateType;
   _callSubscriber: (state: StateType) => void;
   subscribe: (observer: (state: StateType) => void) => void;
   addPost: () => void;
   updateNewPostText: (newText: string) => void;
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
      },
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {},
   addPost() {

      const newPost = {
         id: 5,
         postTitle: this._state.profilePage.newPostText,
         avatar:
            'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
         likes: 0,
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);// используется местный стейт
   },
   updateNewPostText(newText: string) {
      this._state.profilePage.newPostText = newText;

      this._callSubscriber(this._state);
   },

   subscribe(observer: (state: StateType) => void) {
      this._callSubscriber = observer;
   },
};
