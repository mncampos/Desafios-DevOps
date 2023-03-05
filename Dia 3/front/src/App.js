import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router_index.js";
import {
  GlobalUserProvider,
} from "./Context/useGlobalUser.js";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Utils/buttonTheme.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalUserProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </GlobalUserProvider>
    </ThemeProvider>
  );
}

export default App;
