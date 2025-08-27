import { ProviderContextComponent } from "./01. context/provider-context";
import { ProviderContextCounterComponent } from "./02. context/provider-context";

function App() {
  return (
    <>
      <h1>Context</h1>
      <ProviderContextComponent />
      <ProviderContextCounterComponent/>
    </>
  );
}

export default App;
