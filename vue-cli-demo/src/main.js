if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

let app = null;

function render(props = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app");
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log("vue app mount");
  render(props);
  app.config.globalProperties.$globalState = props;
  app.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  app.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  console.log("vue app unmount");
  app.unmount();
  app._container.innerHTML = "";
  app = null;
}
