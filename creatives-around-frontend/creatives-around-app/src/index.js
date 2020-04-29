import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { DataProvider } from './store/Context';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>,
  rootElement
);

//? Try to wrap the DataProvider inside an iFrame :)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
