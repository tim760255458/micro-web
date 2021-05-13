import {
  registerMicroApps,
  start,
  loadMicroApp,
  initGlobalState,
} from "qiankun";
import qiankunOptions from "../../common/qiankunOptions";

// 初始化qiankun
export default function initQianKun() {
  // 注册微应用
  // registerMicroApps(
  //   Object.keys(qiankunOptions).map((key) => qiankunOptions[key])
  // );

  // 启动
  start({
    singular: false,
  });
}

// 注册微应用
export function addMicroApps(options = []) {
  return options.map((option) => loadMicroApp(option));
}

// 初始化 state
export function initQianKunState(state) {
  return initGlobalState(state);
}
