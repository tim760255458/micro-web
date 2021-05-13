# micro-web

基于 qiankun 的微前端实践

## 说明

- 项目包含 3 个前端项目，需要分别安装依赖并运行
- portal (vue3+vite) 作为主应用
- vue-cli-demo (vue3+vue-cli) 、react-demo 作为子应用

## 注意

- vue vite 项目不可作为主应用，tree sharking 会去掉 qiankun 的钩子函数
- 页面跳转时应等到当前页面所有子应用都卸载后，避免其导致的 bug
