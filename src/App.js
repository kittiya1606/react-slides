import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home from  './componets/Home';
import Contact from './componets/Contact';
import Product from './componets/Product';
import Profile from './componets/Profile';
import About from './componets/About';
import Header from './componets/Header';
import Footer from './componets/Footer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header/>
       <Route path="/" exact={true} component={Home}/>
       <Route path="/Contact" component={Contact}/>
       <Route path="/Product" component={Product}/>
       <Route path="/About" component={About}/>
       <Route path="/Profile" component={Profile}/>
      <Footer/>
    </div>
  );
}

export default App;
