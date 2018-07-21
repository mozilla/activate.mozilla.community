import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Content from './Content.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import FAQ from './components/FAQ.js';
import EventGuide from './components/EventGuide.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header></Header>
          <Switch>
          {/* TODO: This is not ideal, we should write our own component that returns both the normal
              and localized path route.
          */}
          <Route exact path='/' component={Home}/>
          <Route path='/faq' component={FAQ}/>
          <Route path='/eventguide' component={EventGuide}/>

          <Route exact path='/:lang' render={(props) => (<Content><Home {...props} /></Content>)} />
          <Route path='/:lang/faq' render={(props) => (<Content><FAQ {...props} /></Content>)} />
          <Route path='/:lang/eventguide' render={(props) => (<Content><EventGuide {...props} /></Content>)} />
          </Switch>
        <Footer></Footer>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
