import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./ContentApp";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

console.log('from content script')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);