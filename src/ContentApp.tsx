import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

declare let ComlinkWorker: any;
declare let chrome: any;

// chrome.runtime.getURL('./worker_proxy.html')


const workerInstance = new ComlinkWorker(
  new URL("./worker/fib", import.meta.url),
);

const invokeWebWoker = (n: number): Promise<number> => workerInstance.exposedforContenScript(n).then((result: number) => {
  console.log('from content script', n, result)
  return result;
})



function App() {
  const [count, setCount] = useState(30);
  const [fib, setFib] = useState(0);

  const onClick = async () => {
    setCount((c) => c + 1);
    const result = await invokeWebWoker(count+1)
    setFib(result);
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
