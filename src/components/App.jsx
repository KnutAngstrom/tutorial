import { useState } from 'react';
import LoginPage from './LoginPage'
import WorkerPage from './WorkerPage'

export default function App() {
  const [loggedIn, setLoggedIn ] =  useState(false);
  console.log("Entering App()");
 
  // this would be the place where in an old fashion program you could do some preparation.  
  // not good for react, since it it comes here multiple times
 
  function handleClick() {
  console.log("getLogState in callback()");
    setLoggedIn(!loggedIn)
  }
  
  return (
  <>
    <h3>React test app </h3>
      {loggedIn ? 
      <WorkerPage onClick={handleClick} />
      :
      <LoginPage onClick={handleClick} />
      }
  </>
    )
  }
