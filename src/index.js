import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FarmersMarketApp from './components/FarmersMarketApp';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <FarmersMarketApp />
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
