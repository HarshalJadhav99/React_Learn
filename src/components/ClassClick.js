import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick = ()=> {
        console.log("button clicked");
    }
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Clicked Me</button>
      </div>
    )
  }
}

export default ClassClick