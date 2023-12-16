import React, { useState, useMemo } from "react";

export function FibonacciComponent() {
  const [range, setRange] = useState(1);

  const calculateFibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const fibonacciSequence = useMemo(() => {
    console.log("Calculating Fibonacci sequence");
    const sequence = [];
    for (let i = 0; i < range; i++) {
      sequence.push(calculateFibonacci(i));
    }
    return sequence;
  }, [range]);

  return (
    <div>
      <p>Fibonacci Sequence up to: {range}</p>
      <ul>
        {fibonacciSequence.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={() => setRange(range + 1)}>Increase Range</button>
    </div>
  );
}
