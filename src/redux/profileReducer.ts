import { ActionType, ProfilePageType } from './state';

export const ADD_POST = 'ADD-POST';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            id: 5,
            postTitle: state.newPostText,
            avatar:
               'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
            likes: 0,
         };

         state.postsData.push(newPost);
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }
};
