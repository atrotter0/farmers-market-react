import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FarmersMarketApp from './components/FarmersMarketApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FarmersMarketApp />, document.getElementById('root'));
registerServiceWorker();
