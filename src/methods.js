import React from 'react';
class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {number: this.props.number};
    }
    componentWillReceiveProps(nextProps) {
      if (this.props.number !== nextProps.number) {
        this.setState({number: nextProps.number});
      }
    }

    render() {
      return (
        
        <h1>{this.state.number}</h1>
      )
    }
  }
export default Example;