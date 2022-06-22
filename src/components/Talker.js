// import React, { Component } from 'react'
// import Events from './Events';

// export class Talker extends Component {
//     talk() {
//         let speech = '';
//         for (let i = 0; i < 10000; i++) {
//           speech += 'blah ';
//         }
//         alert(speech);
//       }
//   render() {
//     return (
//       <div><Events talk={this.talk} /></div>
//     )
//   }
// }

// export default Talker
import React, { Component } from 'react'

export class Talker extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first:'best'
    }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick =()=>{
    const Mood = this.state.first == 'best' ? 'Good' : 'best';
    this.setState({
      first:Mood
    })
  }
  render() {
    return (
      <>
      <div>Talker {this.state.first}</div>
      <button onClick={this.handleClick}>Change</button></>
    )
  }
}

export default Talker