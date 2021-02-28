import React from 'react'
import ReactDOM from 'react-dom';
import First from './components/First';
//renderiza algo na tela

const el = document.getElementById('root');
const tag = <p>Olá React</p>;
ReactDOM.render(
  <div>
    { tag }
    <First></First>
  </div>,

  el
);