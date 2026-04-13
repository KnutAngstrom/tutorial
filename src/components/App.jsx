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

    setLoggedIn(!loggedIn); 
  } 

  function handleClick() {
    console.log("getLogState in callback()");
    setLoggedIn(!loggedIn); 
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
