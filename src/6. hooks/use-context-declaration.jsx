import React, { useContext } from 'react';

const userContext = React.createContext();

export const UseContextComponent = () => {
    const user = "Diego";

    return <userContext.Provider value={user}>
        <Component1/>
        <Component2/>
    </userContext.Provider>
}

const Component1 = () => {
    const user = useContext(userContext);
    return <h1>Component1: Hello { user }</h1>;
}

const Component2 = () => {
    const user = useContext(userContext);
    return <h1>Component2: Hello { user }</h1>;
}