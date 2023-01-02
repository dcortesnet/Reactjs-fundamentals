import { JSXComponent } from "./1. fundamentals/jsx-declaration";
import { ClassComponent } from "./2. components/class-component-declaration";
import { FunctionComponent } from './2. components/func-component-declaration';
import { CounterComponent } from './3. state/state-component-declaration';
import { FatherComponent } from './5. props/props-declaration';
import { UseEffectComponent } from "./6. hooks/use-effect-declaration";
import { UseContextComponent } from './6. hooks/use-context-declaration';
import { UseReducerComponent } from './6. hooks/use-reducer-declaration';
import { FragmentComponent } from './7. fragments/fragment-declaration';

function App() {
  return <div>
    <JSXComponent />
    <ClassComponent />
    <FunctionComponent />
    <CounterComponent />
    <FatherComponent />
    <UseEffectComponent />
    <UseContextComponent />
    <UseReducerComponent />
    <FragmentComponent />
  </div>
}

export default App;
