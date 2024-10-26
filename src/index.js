import "./index.css";
import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";
import { NavigationProvider } from "./context/navigation";

const roolEl = document.getElementById("root");
const root = ReactDom.createRoot(roolEl);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);
