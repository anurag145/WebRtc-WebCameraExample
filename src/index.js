import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';

const store= createStore(reducer);
const app = <Provider store={store}><App/></Provider>
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
