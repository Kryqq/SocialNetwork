import './index.css';
import { store } from './redux/reduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import { StateType } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const rerenderEntireTree = (state: StateType) => {
   ReactDOM.render(
      <BrowserRouter>
         <Provider store={store}>
            <App  />
         </Provider>
      </BrowserRouter>,
      document.getElementById('root')
   );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
   rerenderEntireTree(store.getState());
});
