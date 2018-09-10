import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';
import Content from './Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FAQ from './components/FAQ';
import EventGuide from './components/EventGuide';
import NotFound from './components/NotFound';

import Nightly from './components/Activities/Nightly';
import WebExtensions from './components/Activities/WebExtensions';
import TechSpeakers from './components/Activities/TechSpeakers';
import RustHack from './components/Activities/RustHack';
import WebVRCamp from './components/Activities/WebVRCamp';
import WebcompatSprint from './components/Activities/WebcompatSprint';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <main>
          <Header></Header>
          <Switch>
            {/* TODO: This is not ideal, we should write our own component that returns both the normal
                and localized path route.
            */}
            <Route exact path='/' component={Home}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/eventguide' component={EventGuide}/>
            <Route path='/nightly' component={Nightly}/>
            <Route path='/webextensions' component={WebExtensions}/>
            <Route path='/techspeakers' component={TechSpeakers}/>
            <Route path='/rust-hack' component={RustHack}/>
            <Route path='/webvr-camp' component={WebVRCamp}/>
            <Route path='/webcompat-sprint' component={WebcompatSprint}/>

            <Route exact path='/:lang' render={(props) => (<Content><Home {...props} /></Content>)} />
            <Route path='/:lang/faq' render={(props) => (<Content><FAQ {...props} /></Content>)} />
            <Route path='/:lang/eventguide' render={(props) => (<Content><EventGuide {...props} /></Content>)} />
            <Route path='/:lang/nightly' render={(props) => (<Content><Nightly {...props} /></Content>)} />
            <Route path='/:lang/webextensions' render={(props) => (<Content><WebExtensions {...props} /></Content>)} />
            <Route path='/:lang/techspeakers' render={(props) => (<Content><TechSpeakers {...props} /></Content>)} />
            <Route path='/:lang/rust-hack' render={(props) => (<Content><RustHack {...props} /></Content>)} />
            <Route path='/:lang/webvr-camp' render={(props) => (<Content><WebVRCamp {...props} /></Content>)} />
            <Route path='/:lang/webcompat-sprint' render={(props) => (<Content><WebcompatSprint {...props} /></Content>)} />

            <Route path='*' component={NotFound} />
            </Switch>
          <Footer></Footer>
        </main>
      </Router>
    );
  }
}

export default App;
