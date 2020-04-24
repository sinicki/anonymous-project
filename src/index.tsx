import * as React from "react";
import { render } from "react-dom";
import { FirebaseContext, FirebaseInst } from "./firebase";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  // @ts-ignore
  <FirebaseContext.Provider value={FirebaseInst}>
    <App />
  </FirebaseContext.Provider>,
  rootElement
);
