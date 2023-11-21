import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button>Login</button>
    </header>
  );
};

export default Header;
