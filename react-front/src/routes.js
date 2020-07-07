import React, { Component } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';

import { Container } from './styles/global';

import Header from './components/Header';

import About from './pages/About';
import Task from './pages/Task';

export default class Routes extends Component {
  render() {
    return (
      <>
        <BrowserRouter history={HashRouter}>
          <Container>
            <Header />
            <Switch>
              <Route exact path="/" component={Task} />
              <Route path="/about" component={About} />
              <Redirect from="*" to="/" />
            </Switch>
          </Container>
        </BrowserRouter>
      </>
    );
  }
}
