import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import 'semantic-ui-css/semantic.js';


import MainPage from './components/MainPage';
import ShowResearchList from './components/ShowResearchList';
import SearchAction from './components/SearchAction';
import Upload from './components/Upload';
import Moderator from './components/Moderator';
import Analyzer from './components/Analyzer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={MainPage} />
          <Route path='/search' component={SearchAction}/>
          <Route path='/upload' component={Upload}/>
          <Route path='/moderator' component={Moderator}/>
          <Route path='/analyzer' component={Analyzer}/>

          <Route path='/show-research-list' component={ShowResearchList}/>

        </div>
      </Router>
    );
  }
}

export default App;