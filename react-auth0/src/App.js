import React from 'react';
import logo from './logo.svg';
import './App.css';
import Secret from './components/Secret';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

function App(props) {
  let mainComponent = "";
  switch(props.user.navigation){
    case "":
      mainComponent = <Main user={props.user} />
      break;
    case "callback":
      mainComponent = <Callback />
      break;
    case "secret":
      mainComponent = <Secret />
      break;
    default:
      mainComponent = <NotFound />
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {props.user.name}
        </p>
        {mainComponent}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
