import { ClassComponent } from "./01. definition/01. class-component";
import { FunctionComponent } from "./01. definition/02. func-component";
import { DumbComponent } from "./02. classification/01. dumb-component";
import { SmartComponent } from "./02. classification/02. smart-component";

function App() {
  return (
    <>
      <h1>Definition of components</h1>
      <ClassComponent />
      <FunctionComponent />
      <hr />
      <h1>Classification of components</h1>
      <DumbComponent />
      <SmartComponent />
    </>
  );
}

export default App;
