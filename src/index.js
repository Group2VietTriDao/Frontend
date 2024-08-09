import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Tạo root mới
const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

// Render ứng dụng vào root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
