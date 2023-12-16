import React, { useContext } from 'react';
import { myContext } from './context';

export function ConsumerContextComponent() {
  const data = useContext(myContext);

  return (
    <div>Data shared is: {data}</div>
  );
};





