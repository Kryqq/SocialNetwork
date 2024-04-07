import './App.css';
import { Header } from './layout/header/Header';
import { Profile } from './layout/profile/Profile';
import { Navbar } from './layout/navbar/Navbar';
import { DialogsContainer } from './layout/dialogs/DialogsContainer';

import { News } from './layout/news/News';
import { Music } from './layout/music/Music';
import { Settings } from './layout/settings/Settings';

import { Route } from 'react-router-dom';
import React from 'react';



function App() {
   return (
      <div className="App">
         <Header />
         <Navbar />
         <div className="app-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile" render={() => <Profile  />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
         </div>
      </div>
   );
}

export default App;
