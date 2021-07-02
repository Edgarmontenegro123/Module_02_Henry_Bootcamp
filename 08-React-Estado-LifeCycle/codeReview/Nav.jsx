import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
          <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
          <span>Henry - Weather App</span>
        <SearchBar onSearch={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
