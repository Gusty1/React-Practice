import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'));

//監測redux中狀態的改變，若redux中的狀態發生了改變，那麼重新渲染App組件
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
})