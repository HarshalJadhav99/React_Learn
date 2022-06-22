import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hi'
      }
      console.log('lifecycleA constructor.');
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getderivedstatefromprops');
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentdidmount');
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldcomponentupdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleA getsnapshotbeforeupdate');
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA componentdidupdate');
    }
    changeState=()=>{
        this.setState({
            message:'Hello'
        })
    }
  render() {
    console.log('lifecycleA render');
    return (
        <>
      <div>LifeCycleA</div>
      <button onClick={this.changeState}>change state</button>
      <LifeCycleB/></>
    )
  }
}

export default LifeCycleA