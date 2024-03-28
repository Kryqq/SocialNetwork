import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
export type DialogsDataType = {
   id: number;
   name: string;
};
export type MessagesDataType = {
   id: number;
   message: string;
};

export const dialogsData: DialogsDataType[] = [
   { id: 1, name: 'Вася' },
   { id: 2, name: 'Петя' },
   { id: 3, name: 'Женя' },
   { id: 4, name: 'Лена' },
   { id: 5, name: 'Игорь' },
];

export const messagesData: MessagesDataType[] = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'Hello' },
   { id: 3, message: 'How are you?' },
   { id: 4, message: 'I am fine' },


];

export type PostsPropsType = {
	avatar: string;
  };
  
  export type PostsDataType = {
	id: number;
	postTitle: string;
	avatar: string;
	likes: number;
  };
  export const postsData: PostsDataType[] = [
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
  ];



ReactDOM.render(<App  dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}  />, document.getElementById('root'));
