import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// ---- Redux Stuff ---- //
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const feelingsReducer = (state=[],action)=>{
    if(action.type === 'SET_PIZZA'){
        state=action.payload
    }    
    return state
}



const storeInstance = createStore(
    combineReducers({
        feelingsReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();