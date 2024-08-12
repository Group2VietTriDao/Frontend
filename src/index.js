import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/icons/themify-icons.css";
import "./index.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

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
