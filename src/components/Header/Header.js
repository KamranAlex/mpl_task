import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='header d-flex justify-content-between my-4 mx-3'>
      <div className='header-nav d-flex'>
        <a href='/'>Overview</a>
        <a href='/'>Announcements</a>
        <a href='/'>Tasks & Notes</a>
        <a href='/'> Daily Checklists</a>
        <a href='/'>Requests</a>
      </div>
      <div className='search d-flex justify-content-around'>
        <FontAwesomeIcon
          icon={faSearch}
          size='lg'
          style={{ color: '#8c8c8c' }}
          className='mx-2'
        />
        <p className='my-0 ml-4 mr-2'>Dwight S.</p>
        <FontAwesomeIcon
          icon={faUserCircle}
          size='2x'
          style={{ color: '#000000' }}
          className='mx-2'
        />
      </div>
    </div>
  );
};

export default Header;
