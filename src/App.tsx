import './App.css';
import { Header } from './layout/header/Header';
import { Profile } from './layout/profile/Profile';
import { Navbar } from './layout/navbar/Navbar';
import { Dialogs } from './layout/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './layout/news/News';
import { Music } from './layout/music/Music';
import { Settings } from './layout/settings/Settings';
import React from 'react';

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Navbar />
            <div className="app-content">
               <Route path="/dialogs" component={Dialogs} />
               <Route path="/profile" component={Profile} />
               <Route path="/news" component={News} />
               <Route path="/music" component={Music} />
               <Route path="/settings" component={Settings} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
