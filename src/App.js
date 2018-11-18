import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header'

const YOUTUBE_API_KEY = "AIzaSyAxg3h8QHgEx1Hr034KSkWk8MD8mAxFTk8";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
export default App