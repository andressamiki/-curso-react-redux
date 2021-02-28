import React from 'react'
import ReactDOM from 'react-dom';
import First from './components/First';
import Parameters from './components/Parameters'
import Fragments from './components/Fragments'
import App from './App'
//renderiza algo na tela

const el = document.getElementById('root');
const tag = <p>Olá React</p>;
ReactDOM.render(
  //<>
  <React.Fragment> 
    <App />
    { tag }
    <First></First>
    <Parameters 
      title="Title component" 
      subtitle="Subtitle component"
      number={9}>
    </Parameters>
    <Fragments></Fragments>
  </React.Fragment>,
  el
);