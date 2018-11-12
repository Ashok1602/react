import React, { Component } from 'react';
class Welcome extends Component{
    render()
    {
        return (
            <h1><center>this is a react {this.props.name}</center></h1>
        );
    }
}
export default Welcome;