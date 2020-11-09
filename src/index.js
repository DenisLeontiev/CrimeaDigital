import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import App from "./App";
import { indexReducer } from "./Store/indexReducer";

const store = createStore(
  indexReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const rootElement = document.getElementById("root");
const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

render(app, rootElement);
