import { ListComponent } from "./01. usecallback/use-callback";
import { FibonacciComponent } from "./02. usememo/use-memo";

function App() {
  return (
    <>
      <h1>Use callback</h1>
      <ListComponent />

      <hr />
      <h1>Use memo</h1>
      <FibonacciComponent />
    </>
  );
}

export default App;
