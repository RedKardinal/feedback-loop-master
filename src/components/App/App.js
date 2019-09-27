import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// ---- Connect Redux ---- //
import {connect} from 'react-redux';
// ---- Bring in Routers ---- //
import {HashRouter as Router, Route, Link} from 'react-router-dom';
// ---- Connect Pages to App.js ---- //
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Submit from '../Submit/Submit';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <div className="appPage">
          <h2>Remember! Be as critical and you possibly can be.</h2>
            <br/>
              <Link to='/Feelings'><button>Let's Begin!</button></Link>        
        </div>
        <br/>
        <Route path='/Feelings' exact render={() => <Feelings/>}/>
        <Route path='/Understanding' exact render={()=><Understanding/>}/>
        <Route path='/Support' render={()=><Support/>}/>
        <Route path='/Comments' render={()=><Comments/>}/>
        <Route path='/Submit' render={()=><Submit/>}/>
      </div>
      </Router>
    );
  }
}


const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(App);