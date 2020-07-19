import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav class='navbar navbar-light bg-light'>
      <a class='navbar-brand' href='#'>
        No of Products in Cart{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
