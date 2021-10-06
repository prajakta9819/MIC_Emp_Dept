import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./redux/reducers/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </Router>,
  rootElement
);
