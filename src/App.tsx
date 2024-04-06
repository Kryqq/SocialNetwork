import './App.css';
import { Header } from './layout/header/Header';
import { Profile } from './layout/profile/Profile';
import { Navbar } from './layout/navbar/Navbar';
import { DialogsContainer } from './layout/dialogs/DialogsContainer';

import { News } from './layout/news/News';
import { Music } from './layout/music/Music';
import { Settings } from './layout/settings/Settings';
import { ActionType, StateType } from './redux/store';
import { StoreType } from './redux/reduxStore';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

type AppPropsType = {
   state: StateType;
   dispatch: (action: ActionType) => void;
   store: StoreType;
};

function App(props: AppPropsType) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Navbar />
            <div className="app-content">
               <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
               <Route path="/profile" render={() => <Profile store={props.store} />} />
               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
