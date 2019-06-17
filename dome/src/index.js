import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import "./common/css/main.css";

import App from './views/main';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

