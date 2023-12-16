import React, { useReducer } from 'react';
import { counterReducer, initialState } from './reducer';

export function CounterReducerComponent() {

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};