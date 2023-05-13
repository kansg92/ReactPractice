import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  --> create-react-app 설치했을때 기본적으로 생성되는 태그로 해당 태그로 감싸져있는 경우 자손까지 검사함.
    <App />
 // </React.StrictMode>
);

