import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

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
