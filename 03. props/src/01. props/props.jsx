import React from 'react';

export function FatherPropsComponent(){
    return <ChildPropsComponent greetings="Hello child!" goodbye="Good bye child!"/>;
}

export function ChildPropsComponent (props){
    return <p>Greetings: {props.greetings}, Goodbye: {props.goodbye}</p>;
}