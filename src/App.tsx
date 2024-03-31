import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

declare let ComlinkWorker: any;

const workerInstance = new ComlinkWorker(
  new URL("./worker/fib", import.meta.url)
);

function App() {
  const [count, setCount] = useState(30);
  const [fib, setFib] = useState(0);

  const onClick = async () => {
    setCount((c) => c + 1);
    const updateFib = await workerInstance.fibonacci(count + 1);
    setFib(updateFib);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => onClick()}>Calculate Fib</button>
        <p>count is {count}</p>
        <p>Fib is {fib}</p>
      </div>
    </>
  );
}

export default App;
