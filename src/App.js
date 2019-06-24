/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import SignIn from './component/SignIn';
import ValidatedSignIn from './component/ValidatedSignIn';




function App() {
  return (
    <div className="wrapper">
      <ValidatedSignIn></ValidatedSignIn>
      <a href="">donate here</a>
    </div>


  );
}

export default App;
