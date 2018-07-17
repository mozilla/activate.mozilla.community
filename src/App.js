import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Content from './Content.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import ActivitiesPage from './components/Activities/ActivitiesPage.js';
import FAQ from './components/FAQ/FAQ.js';
import EventGuide from './components/EventGuide/EventGuide.js';

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
          <Route path='/activities' render={(props) => (<Content><ActivitiesPage {...props} /></Content>)} />
          <Route path='/faq' component={FAQ}/>
          <Route path='/eventguide' component={EventGuide}/>

          <Route exact path='/:lang' component={Home}/>
          <Route path='/:lang/activities' render={(props) => (<Content><ActivitiesPage {...props} /></Content>)} />
          <Route path='/:lang/faq' component={FAQ}/>
          <Route path='/:lang/eventguide' component={EventGuide}/>
          </Switch>
        <Footer></Footer>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
