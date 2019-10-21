import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Home from './components/Home';
import Navbar from './components/shared/Navbar';
import Search from './components/Search';
import Artista from './components/Artista';

function App() {
  return (
    <Router>
      
      <Navbar/>
      { /* Rutas */ }
      <div className="container m-5">
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/artist/:id" component={Artista}/>
      </div>

    </Router>
  );
}

export default App;
