import { ActionType, ProfilePageType } from './store';

export const ADD_POST = 'ADD-POST';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

type ContactsType = {
   facebook: string;
   website: null;
   vk: string;
   twitter: string;
   instagram: string;
   youtube: null;
   github: string;
   mainLink: null;
};

type PhotosType = {
   small: string;
   large: string;
};

export type ProfileType = {
   aboutMe: string;
   contacts: ContactsType;
   lookingForAJob: boolean;
   lookingForAJobDescription: string;
   photos: PhotosType;
};

const initialState: ProfilePageType = {
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
   profile: null,
};

export const profileReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            id: 5,
            postTitle: state.newPostText,
            avatar:
               'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
            likes: 0,
         };

         return {
            ...state,
            postsData: [newPost, ...state.postsData],
            newPostText: '',
         };

      case UPDATE_NEW_POST_TEXT:
         return { ...state, newPostText: action.newText };
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile };

      default:
         return state;
   }
};

export interface IADD_POST {
   type: 'ADD-POST';
}

export interface IUPDATE_NEW_POST_TEXT {
   type: 'UPDATE-NEW-POST-TEXT';
   newText: string;
}

export interface ISET_USER_PROFILE {
   type: 'SET_USER_PROFILE';
   profile: ProfileType;
}

export type addPostActionCreatorType = () => IADD_POST;
export type UpdateNewPostTextActionCreatorType = (text: string) => IUPDATE_NEW_POST_TEXT;
export type setUserProfileActionCreatorType = (profile: ProfileType) => ISET_USER_PROFILE;

export const addPostActionCreator: addPostActionCreatorType = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator: UpdateNewPostTextActionCreatorType = (text: string) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text,
});
export const setUserProfile = (profile: ProfileType) => ({
   type: SET_USER_PROFILE,
   profile,
});
