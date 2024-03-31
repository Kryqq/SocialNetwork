
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateType, addPost } from './redux/state';
export const rerenderEntireTree = (state: StateType) => {
   ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'));
};


