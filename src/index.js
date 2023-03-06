import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./vendor/normalize.css";
import App from "./components/App/App";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { compose, createStore } from "redux";
// import reducers from "./redux/reducers";

// const store = createStore(
//   reducers,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </React.StrictMode>
  </BrowserRouter>
);
