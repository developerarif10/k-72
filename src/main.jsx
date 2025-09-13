import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Stair from "./components/common/stair.jsx";
import NavContext from "./context/nav-context.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <NavContext>
          <App />
        </NavContext>
      </Stair>
    </BrowserRouter>
  </StrictMode>
);
