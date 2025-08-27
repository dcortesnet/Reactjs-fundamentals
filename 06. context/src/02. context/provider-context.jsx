import React, {useState} from "react";
import { myContextCounter } from "./context";
import { ConsumerContextComponent } from "./consumer-context";

export function ProviderContextCounterComponent() {
  const [count, setCounter] = useState(0);

  return (
    <myContextCounter.Provider value={{count, setCounter}}>
        {/* children components */}
        <ConsumerContextComponent/>
    </myContextCounter.Provider>
  );
}
