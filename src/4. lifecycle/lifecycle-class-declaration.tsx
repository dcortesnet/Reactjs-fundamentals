import React, { Component } from "react";

export class LifeCycleClassComponent extends Component {
  componentDidMount() {
    console.log("Este componente se montó");
  }

  componentDidUpdate() {
    console.log("Este componente cambio su estado");
  }

  render() {
    return <h1>Hello class component!</h1>;
  }
}
