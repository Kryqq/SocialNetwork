import './App.css';
import { Header } from './layout/header/Header';
import { Profile } from './layout/profile/Profile';
import { Navbar } from './layout/navbar/Navbar';
import { Dialogs } from './layout/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './layout/news/News';
import { Music } from './layout/music/Music';
import { Settings } from './layout/settings/Settings';
import { DialogsDataType, MessagesDataType, PostsDataType } from './index';
import React from 'react';

export type AppPropsType = {
   dialogsData: DialogsDataType[];
   messagesData: MessagesDataType[];
   postsData: PostsDataType[];
};

function App(props: AppPropsType) {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Navbar />
            <div className="app-content">
               <Route path="/dialogs" render={() => <Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData} />} />
               <Route path="/profile" render={() => <Profile postsData = {props.postsData} />} />
               <Route path="/news" render={() => <News  />} />
               <Route path="/music" render={() => <Music />} />
               <Route path="/settings" render={() => <Settings />} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
