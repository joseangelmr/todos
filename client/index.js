import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configStore from './../commons/configureStore';
import App from './App';

const store = configStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));