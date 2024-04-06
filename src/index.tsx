import './index.css';
import { store } from './redux/reduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import { StateType } from './redux/store';
const rerenderEntireTree = (state: StateType) => {
   ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
};

rerenderEntireTree(store.getState()); //1 для первого рендера

store.subscribe(() => {
   rerenderEntireTree(store.getState());
});
