import React from 'react';

const NavBar = ({ totalCounters, totalNoSelections }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='/#'>
        No of Products in Cart{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>{' '}
        No of Items in Cart{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalNoSelections}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
