import React, { useState, useEffect } from "react";

export function UpdatingComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log("The component if updated, the new value is: ", count);

      // Send notification other service
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
