import React from 'react';
import './App.css';

import Navigation from "./components/footwear/navigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footwear from './components/footwear/Footwear';
import Men from './components/footwear/Men';
import Women from './components/footwear/Women';
import About from './components/footwear/About';
import Contact from './components/footwear/Contact';
import Cart from './components/footwear/Cart';
import Checkout from './components/footwear/Checkout';
import OrderStatus from './components/footwear/OrderStatus';



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
        <Route path="/orderstatus" component={OrderStatus} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
