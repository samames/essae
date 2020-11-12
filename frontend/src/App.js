import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Splash} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
