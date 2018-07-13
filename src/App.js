import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import ActivitiesPage from './components/Activities/ActivitiesPage.js';
import FAQ from './components/FAQ/FAQ.js';
import EventGuide from './components/EventGuide/EventGuide.js';

import './App.css';

class App extends Component {
  render() {
    const { currentLocales, handleLocaleChange, availableLocales } = this.props;

    return (
      <Fragment>
        <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/activities' component={ActivitiesPage}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/eventguide' component={EventGuide}/>
          </Switch>
        </BrowserRouter>
        <Footer currentLocales={currentLocales}
                availableLocales={availableLocales}
                handleLocaleChange={handleLocaleChange}
        ></Footer>
      </Fragment>
    );
  }
}

export default App;
