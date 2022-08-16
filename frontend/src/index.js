import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { AddMeetupContextProvider } from "./store/addMeetup-context";

ReactDOM.render(
  <AddMeetupContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AddMeetupContextProvider>,
  document.getElementById("root")
);
