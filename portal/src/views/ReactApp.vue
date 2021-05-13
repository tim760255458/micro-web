<template>
  <div id="reactContainer"></div>
</template>
<script setup>
import { inject, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { addMicroApps } from "../utils/js/qiankun.js";

const { reactAppOption } = inject("qiankun-option");
let microApps = [];

onMounted(() => {
  microApps = addMicroApps([reactAppOption]);
});

onBeforeRouteLeave((to, from) => {
  if (microApps.length) {
    const microAppsUnMountPromise = microApps.map((microApp) =>
      microApp.unmount()
    );
    Promise.all(microAppsUnMountPromise)
      .then(() => {
        microApps = [];
        return true;
      })
      .catch(() => {
        return false;
      });
  } else {
    return true;
  }
});
</script>
