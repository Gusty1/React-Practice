//引入React核心庫
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入ReactDOM
import { BrowserRouter } from 'react-router-dom';
//引入app
import App from './App.js';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
