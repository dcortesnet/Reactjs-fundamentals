import React from 'react';

export const FatherComponent = () => {
    return <ChildrenComponent greetings="Hello!" />;
}

export const ChildrenComponent = (props) => {
    return <h1>{props.greetings}</h1>;
}