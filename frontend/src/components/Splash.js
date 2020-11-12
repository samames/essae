import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div>
      Welcome to my website. I am a web developer, specialising in advanced web
      systems, based in Sussex, UK. I develop all my websited from scratch, and
      can build anything for my clients, from e-commerce platforms to forum
      websites, always using the latest, cutting edge technologies. Please{' '}
      <Link to='/contact'>contact me</Link> for a quotation.
    </div>
  );
};

export default Splash;
