import { MountingComponent } from "./01. mounting/mounting";
import { UpdatingComponent } from "./02. updating/updating";
import { UnMountingComponent } from "./03. unmounting/unmounting";

function App() {
  return (
    <>
      <h1>Mounting</h1>
      <MountingComponent />
      <hr />
      <h1>Updating</h1>
      <UpdatingComponent />
      <hr />
      <h1>Unmounting</h1>
      <UnMountingComponent />
    </>
  );
}

export default App;
