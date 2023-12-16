import React, { useRef } from 'react';

export function RefComponent(){
  const myRef = useRef(null);

  const getValue = () => {
    if (myRef.current) {
      const value = myRef.current.value;
      console.log('The value of reference is :', value);
    }
  };

  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={getValue}>Get value of input</button>
    </div>
  );
};