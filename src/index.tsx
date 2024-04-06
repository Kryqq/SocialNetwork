import './index.css';
import { store } from './redux/reduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import { StateType } from './redux/store';

const rerenderEntireTree = (state: StateType) => {
   ReactDOM.render(
      <App store={store} state={state} dispatch={store.dispatch.bind(store)} />,
      document.getElementById('root')
   );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
   rerenderEntireTree(store.getState());
});
