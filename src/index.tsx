import './index.css';
import { state, subscribe } from './redux/state';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateType, addPost, updateNewPostText } from './redux/state';
 const rerenderEntireTree = (state: StateType) => {
   ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));
};




rerenderEntireTree(state)
subscribe(rerenderEntireTree)