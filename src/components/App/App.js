import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../index.js';
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/PersonalPortfolio" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
