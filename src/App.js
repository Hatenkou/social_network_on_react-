import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from './commponents/Dialogs/DialogsContainer';
import FindUsersContainer from './commponents/FindUsers/FindUsersContainer';
import HeaderContainer from './commponents/Header/HeaderContainer';
import Login from './commponents/Login/Login';
import Music from './commponents/Music/Music';
import Navbar from './commponents/Navbar/Navbar';
import News from './commponents/News/News';
import ProfileConteiner from './commponents/Profile/ProfileConteiner';
import Setings from './commponents/Setings/Setings';


function App(props) {
  return (
    <BrowserRouter>
      <main>
        <section className='glass'>
          <div className='dashboard'>
            <div className='links'>
              <Navbar className='navs contents' />
              <div className='login'>
                <HeaderContainer className='headers headers' />
              </div>
            </div>
          </div>
          <div className='content'>
            <Route path='/dialogs'
              render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?'
              render={() => <ProfileConteiner />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/setings' render={() => <Setings />} />
            <Route path='/users'
              render={() => <FindUsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
