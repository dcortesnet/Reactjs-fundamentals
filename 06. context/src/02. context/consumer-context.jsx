import React, { useContext } from 'react';
import { myContextCounter } from './context';

export function ConsumerContextComponent() {
  const { count, setCounter  } = useContext(myContextCounter);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCounter(count+1)}>+1</button>
    </div>
  );
};





