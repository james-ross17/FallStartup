import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import Login from './components/Index.jsx';
import RoutesPage from './components/Routes.jsx';
import Client from './components/Client.jsx';
import About from './components/About.jsx';

import './index.css'; 

function App() {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = useState(userName ? 'Authorized' : 'Unauthorized');

  function handleAuthChange(newUserName, newAuthState) {
    setAuthState(newAuthState);
    setUserName(newUserName);
    
    if (newAuthState === 'Authorized') {
      localStorage.setItem('userName', newUserName);
    } else {
      localStorage.removeItem('userName');
    }
  }

  return (
    <div className='app'>
      <header>
        <h1>Door to Door Sales Tracker<sup>&reg;</sup></h1>
        <img src="/door.jpeg" alt="Door to Door Sales Tracker Logo" />
        <nav>
          <menu>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>

            {authState === 'Authorized' && (
              <li><NavLink to='/routes'>View Routes</NavLink></li>
            )}
            {authState === 'Authorized' && (
              <li><NavLink to='/client'>Record Client</NavLink></li>
            )}
          </menu>
        </nav>

        {authState === 'Authorized' && (
          <div className='user-display'>Current User: {userName}</div>
        )}
      </header>

      <Routes>
        <Route 
          path='/' 
          element={<Login onAuthChange={handleAuthChange} />} 
        />
        <Route path='/routes' element={<RoutesPage />} />
        <Route path='/client' element={<Client />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <hr />
        <span className="text-reset">Author Name: James Ross</span>
        <br />
        <a href="https://github.com/james-ross17/FallStartup">GitHub</a>
      </footer>
    </div>
  );
}

function NotFound() {
  return <main><h1>404: Page Not Found</h1></main>;
}

export default App;