import { TestCoreComponent } from "@adiun/vm-coreui";

function App(): JSX.Element {
  return (
    <div>
      <TestCoreComponent />
      <div css={{ background: "red" }}>
        Vite + React + Typescript + Storybook test
      </div>
    </div>
  );
}

export default App;
