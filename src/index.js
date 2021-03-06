import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons'; // eslint-disable-line

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './global-styles';

// import ExamplesApp from './Examples/ExamplesApp';
initializeIcons();
// ReactDOM.render(<ExamplesApp />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
