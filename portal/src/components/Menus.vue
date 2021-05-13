<template>
  <div>
    <div class="menus text-base font-mono text-green-400 underline">
      <router-link class="mr-4 hover:text-green-600" to="/"
        >portal page</router-link
      >
      <router-link class="mr-4 hover:text-green-600" to="/vue-app"
        >vue page</router-link
      >
      <router-link class="mr-4 hover:text-green-600" to="/react-app"
        >react page</router-link
      >
    </div>
    <button
      class="
        px-1
        rounded
        border border-green-300
        hover:border-green-500
        text-green-500
        hover:text-green-700
      "
      @click="pushValueToChild"
    >
      子应用值+1
    </button>
  </div>
</template>
<script setup>
import { inject } from "vue";

const globalStateActions = inject("qiankun-globalStateActions");
const pushValueToChild = () =>
  globalStateActions.value.setGlobalState({
    command: {
      command: "add",
      value: 1,
    },
  });
</script>
