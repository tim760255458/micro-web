import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/" : "/"}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  console.log("react app mount");
  render(props);
}

export async function unmount(props) {
  console.log("react app unmount");
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
