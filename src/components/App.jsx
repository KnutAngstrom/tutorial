import { useState } from 'react';
import LoginPage from './LoginPage'
import WorkerPage from './WorkerPage'

export default function App() {
  const [loggedIn, setLoggedIn ] =  useState(false);
  console.log("Entering App()");
 
  function handleClickLogin() {
  console.log("getLogState in callback()");

  //this is the place where the heavy lifting would happen: the actual login, 
  // and the initialisation of data .
//if (LogIn(...) {
    setLoggedIn(true); 
//
  } 

  function handleClick() {
    console.log("logout in callback()");
    setLoggedIn(false); 
  } 

  return (
  <>
    <h3>React test app </h3>
      {loggedIn ? 
      <WorkerPage onClick={handleClick} />
      :
      <LoginPage onClick={handleClickLogin} />
      }
  </>
    )
  }
