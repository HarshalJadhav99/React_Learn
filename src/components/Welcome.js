import React, { Component } from 'react';

class Welcome extends React.Component{
    render(){
        // const {name,heroName}=this.props;
        return(
            <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
        )
    }
}

export default Welcome;