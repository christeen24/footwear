import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/footwear/navigation";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Footwear from './components/footwear/Footwear';
import Men from './components/footwear/Men';
import Women from './components/footwear/Women';
import About from './components/footwear/About';
import Contact from './components/footwear/Contact';
import Cart from './components/footwear/Cart';
import Checkout from './components/footwear/Checkout';



function App() {

  return (
    <div>
      <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Footwear}/>
        <Route  path="/men"  component={Men}/>
        <Route path="/women"  component={Women}/>
        <Route path="/about"  component={About}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/cart"  component={Cart}/>
        <Route path="/checkout" component={Checkout} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
