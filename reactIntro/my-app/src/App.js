import React from "react";
import TiredMeter from "./components/TiredMeter";
import Clock from "./components/Clock";
import RandRoll from "./components/RandRoll";
import UserName from "./components/UserName";
import RecipeSearch from "./components/RecipeSearch";

export default class App extends React.Component {

  state = {
    pages: [ <RecipeSearch />, <TiredMeter />, <Clock />, <RandRoll />, <UserName /> ],
    curPage: 0
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <div>
          <button
           onClick={() => {
            this.swapProject(2); 
          }}
          >
            Clock
          </button>
        
          <button
           onClick={() => {
            this.swapProject(0); 
          }}
          >
            Recipe Search
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    )
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex});
  }
}







/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         hi
        </p>
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
*/