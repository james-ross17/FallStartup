import React from 'react';
// Correctly import router tools from the package
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

// Import your components (I've assumed 'Index' is your 'Home' page)
import { Home } from './components/Home';
import { ViewRoutes } from './components/ViewRoutes'; // Your renamed component
import { RecordClient } from './components/RecordClient';
import { About } from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Door to Door Sales Tracker<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/routes'>View Routes</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/client'>Record Client</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>About</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/routes' element={<ViewRoutes />} />
          <Route path='/client' element={<RecordClient />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>James Ross</span>
            <a className='text-reset' href='https://github.com/james-ross17/FallStartup'>
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Page not found.</main>;
}

export default App;