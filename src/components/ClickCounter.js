import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount = ()=>{
    //     this.setState(prevState => {
    //         return{count:prevState.count+1}
    //     })
    // }
  render() {
    // const {count}=this.state;
    const {count,incrementCount}=this.props
    const {name}=this.props;
    return (
      <div>
        {/* <button onClick={this.incrementCount}>{name} Clicked {count} times</button> */}
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
      </div>
    )
  }
}

// export default ClickCounter
export default withCounter(ClickCounter);