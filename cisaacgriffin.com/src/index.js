import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Site from './Site.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Site />, document.getElementById('root'));


serviceWorker.unregister();
