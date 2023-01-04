import React, { Component } from "react";

export class LifeCycleClassComponent extends Component {

  constructor(props){
    super(props);
     this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log("Este componente se montó");
  }

  componentDidUpdate() {
    console.log("Este componente se cambió");
  }

  changeState() {
    this.setState({counter: 1});
  }

  render() {
    return <button onClick={()=> this.changeState()}>Cambio de estado</button>;
  }
}
