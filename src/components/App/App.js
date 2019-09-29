import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
// ---- Connect Redux ---- //
import {connect} from 'react-redux';
// ---- Bring in Routers ---- //
import {HashRouter as Router, Route} from 'react-router-dom';
// ---- Connect Pages to App.js ---- //
import Home from '../Home/Home';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Submit from '../Submit/Submit';
import Finished from '../Finished/Finished';
// ---- Material UI ---- //
import 'typeface-roboto';
// ---- App Component Below ---- //
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Route path='/' exact render={() => <Home/>}/>
        <Route path='/Feelings' exact render={() => <Feelings/>}/>
        <Route path='/Understanding' exact render={()=><Understanding/>}/>
        <Route path='/Support' render={()=><Support/>}/>
        <Route path='/Comments' render={()=><Comments/>}/>
        <Route path='/Submit' render={()=><Submit/>}/>
        <Route path='/Finished' render={()=><Finished/>}/>
      </div>
      <footer></footer>
      </Router>
    );
  }
}


const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore
});
export default connect(mapReduxStoreToProps)(App);