import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='nav'>
      <Link to='/'>Sam Ames, Web Application Developer</Link>
      <nav>
        <Link to='/'>Home</Link> <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
