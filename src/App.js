import { JSXComponent } from "./1. fundamentals/jsx-declaration";
import { ClassComponent } from "./2. components/class-component-declaration";
import { FunctionComponent } from './2. components/func-component-declaration';
import { CounterComponent } from './3. state/state-component-declaration';
import { FatherComponent } from './5. props/props-declaration';
import { UseEffectComponent } from "./6. hooks/use-effect-declaration";

function App() {
  return <div>
    <JSXComponent />
    <ClassComponent />
    <FunctionComponent />
    <CounterComponent />
    <FatherComponent />
    <UseEffectComponent />
  </div>
}

export default App;
