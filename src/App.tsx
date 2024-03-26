import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Profile } from './layout/profile/Profile';
import { Navbar } from './layout/navbar/Navbar';

function App() {
   return (
      <div className="App">
         <Header />
         <Profile />
         <Navbar />
      </div>
   );
}

export default App;
