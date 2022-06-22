import React, { Component } from 'react'

export class Events extends Component {
    handleEvent(){
        alert(`i am the event handler method.`)
    }
  render() {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <button className='btn' onClick={this.handleEvent}>Click Me</button> */}
        <button className='btn' onClick={this.props.talk}> {this.props.text}</button>

      </div>
    )
  }
}
Events.defaultProps={text:'default'};
export default Events