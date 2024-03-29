import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import './fonts/MonumentExtended-Ultrabold.ttf';
import './fonts/MonumentExtended-Regular.ttf';
import './fonts/MierA-Bold.ttf';
import './fonts/MierA-Thin.ttf';
import './fonts/MierA-Book.ttf';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
