import React from "react";
import { myContext } from "./context";
import { ConsumerContextComponent } from "./consumer-context";

export function ProviderContextComponent() {
  const sharedData = "My shared data!!!";

  return (
    <myContext.Provider value={sharedData}>
        {/* children components */}
        <ConsumerContextComponent/>
    </myContext.Provider>
  );
}
