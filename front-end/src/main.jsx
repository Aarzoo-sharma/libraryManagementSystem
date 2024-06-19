import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContext } from "./utils/context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);

