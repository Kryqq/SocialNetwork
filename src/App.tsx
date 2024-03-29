import './App.css';
import { Header } from './layout/header/Header';
import { Profile } from './layout/profile/Profile';
import { Navbar } from './layout/navbar/Navbar';
import { Dialogs } from './layout/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './layout/news/News';
import { Music } from './layout/music/Music';
import { Settings } from './layout/settings/Settings';
import { StateTypes } from './redux/state';
import React from 'react';

type AppPropsType = {
   state: StateTypes;
};

function App(props: AppPropsType) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Navbar />
            <div className="app-content">
               <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsPage} />} />
               <Route path="/profile" render={() => <Profile  postsData={props.state} />} />
               <Route path="/news" render={() => <News />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
