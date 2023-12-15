import React from "react";

export function SmartComponent() {
  const sum = 1 + 1;
  return <DumbComponent result={sum} />;
}

export function DumbComponent(props) {
  return <p>{`SmartComponent: The sum is ${props.result}`}</p>;
}
