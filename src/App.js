import 'babel-polyfill';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Localized } from 'fluent-react/compat';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import FAQ from './components/FAQ/FAQ.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Localized id="test">
          <h1>Test</h1>
        </Localized>
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/faq' component={FAQ}/>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </main>
    );
  }
}

export default App;
