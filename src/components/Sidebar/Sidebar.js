import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faClipboardCheck,
  faClock,
  faFemale,
  faTachometerAlt,
  faWrench
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar d-flex align-items-center py-4'>
      <a href='/'>
        <FontAwesomeIcon
          icon={faTachometerAlt}
          size='lg'
          style={{ color: '#000000' }}
        />
      </a>
      <a href='/'>
        <FontAwesomeIcon
          icon={faClock}
          size='lg'
          style={{ color: '#929292' }}
        />
      </a>
      <a href='/'>
        <FontAwesomeIcon
          icon={faClipboardCheck}
          size='lg'
          style={{ color: '#929292' }}
        />
      </a>
      <a href='/'>
        <FontAwesomeIcon
          icon={faWrench}
          size='lg'
          style={{ color: '#929292' }}
        />
      </a>
      <a href='/'>
        <FontAwesomeIcon
          icon={faFemale}
          size='lg'
          style={{ color: '#929292' }}
        />
      </a>
      <a href='/'>
        <FontAwesomeIcon
          icon={faChartLine}
          size='lg'
          style={{ color: '#929292' }}
        />
      </a>
    </div>
  );
};

export default Sidebar;
