import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { SelflessProgramming } from './components/SelflessProgramming/SelflessProgramming'
import { Achievements } from './components/Achievements/Achievements';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/achievements' component={Achievements} />
        <Route path='/selfless-programming' component={SelflessProgramming} />
      </Layout>
    );
  }
}
