// ---- Import Redux, Routers, CSS, & React ---- //
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// ---- Redux Stuff ---- //
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// ---- Reduce Code ---- //
const feedbackReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            state = [...state, action.payload]
            return state
        case 'SET_UNDERSTANDING':
            state = [...state, action.payload]
            return state
        case 'SET_SUPPORT':
            state = [...state, action.payload]
            return state
        case 'SET_COMMENTS':
            state = [...state, action.payload]
            return state
        case 'CLEAR':
            state = []
            return state
        default: return state
    } // END switch
} // END feedbackReducer

// ---- Reducer store ---- //
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();