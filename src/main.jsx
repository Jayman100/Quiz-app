import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import themeContext from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <themeContext.Provider value={{ theme: "dark" }}>
      <App />
    </themeContext.Provider>
  </React.StrictMode>
);
