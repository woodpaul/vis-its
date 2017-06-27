import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import './css/App.css';
import dna from './images/dna.png';

import Welcome from './pages/Welcome';
import Concept from './pages/Concept';
import List from './pages/List';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="sidebar">
            <header>
              <h1>XYZ Inc.</h1>
            </header>
            <nav>
              <ul>
                <li><NavLink to="/home"><span>トップ</span></NavLink></li>
                <li><NavLink to="/concept"><span>会社概要</span></NavLink></li>
                <li><NavLink to="/list"><span>商品一覧</span></NavLink></li>
                <li><NavLink to="/dummy1"><span>アクセス</span></NavLink></li>
                <li><NavLink to="/dummy2"><span>採用情報</span></NavLink></li>
                <li><NavLink to="/dummy3"><span>お問合せ</span></NavLink></li>
              </ul>
            </nav>
            <img src={dna} alt="DNA" title="DNA" />
          </div>
          <div className="content">
            <main>
              <Route exact path="/home" component={Welcome}/>
              <Route exact path="/list" component={List}/>
              <Route exact path="/concept" component={Concept}/>
              <Route exact path="/dummy1" component={NotFound}/>
              <Route exact path="/dummy2" component={NotFound}/>
              <Route exact path="/dummy3" component={NotFound}/>
            </main>
            <footer>
              Copyright © XYZ Inc. All Rights Reserved.
            </footer>
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
