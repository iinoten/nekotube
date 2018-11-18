import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import List from './components/Video/List/List'

import YSearch from '../node_modules/youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyAxg3h8QHgEx1Hr034KSkWk8MD8mAxFTk8'

class App extends Component {
  state = {videos: []}

  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり'}, (data) => {
      this.setState({videos: data})  
    });　
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Body><List videos={this.state.videos} /></Body>
      </div>
    );
  }
}
export default App;