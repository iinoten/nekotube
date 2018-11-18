import React, { Component } from 'react';

class Header extends Component {

    state = {keyword: ''};

    onInputChangeHandler = (event) => {
        this.setState({keyword: event.target.value})
    }

  render(){  
    return(
      <div style={{textAlign: 'center'}}>
        <div>
          <h2>NekoTube</h2>
        </div>
        <div>
          <input onChange={this.onInputChangeHandler}/>
        </div>
        <p>{this.state.keyword}</p>
      </div>
    );
  }
}

export default Header;