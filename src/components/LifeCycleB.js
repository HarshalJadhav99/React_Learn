import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hi'
      }
      console.log('lifecycleB constructor.');
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleB getderivedstatefromprops');
        return null
    }
    componentDidMount(){
        console.log('lifecycleB componentdidmount');
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldcomponentupdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecycleB getsnapshotbeforeupdate');
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB componentdidupdate');
    }
  render() {
    console.log('lifecycleB render');
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB