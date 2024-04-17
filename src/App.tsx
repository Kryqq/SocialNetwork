import React from 'react';
import './App.css';

import { Navbar } from './layout/navbar/Navbar';
import { DialogsContainer } from './layout/dialogs/DialogsContainer';
import { News } from './layout/news/News';
import { Music } from './layout/music/Music';
import { Settings } from './layout/settings/Settings';
import { Route } from 'react-router-dom';
import { UsersContainer } from './layout/users/UsersContainer';
import { ProfileContainer } from './layout/profile/ProfileContainer';

import { HeaderContainer } from './layout/header/HeaderContainer';

function App() {
   return (
      <div className="App">
         <HeaderContainer />
         <Navbar />
         <div className="app-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Settings />} />
         </div>
      </div>
   );
}

export default App;
