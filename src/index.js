import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




ReactDOM.render(
  //strideMode는 문제의 원인이 될수도 있다고 생각하는 component에 감싸주는 것이 좋다.
  //경고를 띄워주게 된다.
  //stride 모드로 감싸면 코드의 문제를 감지하고, 경고하기 위해 두번 렌더링 하게 된다.

   //여기서 앱은 컴포넌트, 이 컴포넌트는 App.js에 있다.  html 과 자바스크립트 사이의 이런 조합을 jsx라고 부른다. 리액트에 특화된 개념
   //쉽게 설명하자면 jsx는 javascript 안의 html이다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

