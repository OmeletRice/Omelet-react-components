import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Button from './components/button'

class App extends Component {

  constructor () {
    super()
    this.state = {
      data: 'button'
    }
  }

  handleClick = () => {
    this.setState((prevState, props) => {
      console.log(prevState, props)
      return ({
        data: 'text'
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type={this.state.data}>index</Button>
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}

export default App;
