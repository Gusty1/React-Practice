//React: 框架的核心包
//ReactDom: 專門做渲染相關的包
import React from 'react';
<<<<<<< HEAD:react-basic/src/index.js
import ReactDOM from 'react-dom/client';
//應用的全局樣式文件
=======
import ReactDOM from 'react-dom';
>>>>>>> parent of 9c7ccfd (restudy):react_staging/01_腳手架自帶文件/src/index.js
import './index.css';
//引入根組件
import App from './App';

<<<<<<< HEAD:react-basic/src/index.js
//渲染根組件APP到一個id為root的dom節點上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //嚴格模式節點需要去掉
  //useEffect的執行時機
  // <React.StrictMode>
  // </React.StrictMode>
  <App />
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> parent of 9c7ccfd (restudy):react_staging/01_腳手架自帶文件/src/index.js
);
