import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

import { createStore } from 'redux';
import reducer from './reducers/main-reducers';

let store = createStore(reducer);


ReactDOM.render(<App store={store} />, document.getElementById('react'));