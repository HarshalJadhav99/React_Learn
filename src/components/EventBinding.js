import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    //   this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Hii'
    //     })
    // }
    clickHandler =()=>{
        this.setState({
            message:'Hii'
        })
}
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
      <button onClick={this.clickHandler}>Clicked</button>
      {/* <button onClick={this.clickHandler.bind(this)}>Clicked</button> */}
      {/* <button onClick={()=> this.clickHandler()}>Clicked</button> */}
      </div>
    )
  }
}

export default EventBinding