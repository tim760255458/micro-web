<template>
  <div id="vueContainer"></div>
</template>
<script setup>
import { inject, onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { addMicroApps } from "../utils/js/qiankun.js";

const { vueAppOption } = inject("qiankun-option");
let microApps = [];

onMounted(() => {
  microApps = addMicroApps([{ ...vueAppOption, props: { value: 3 } }]);
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
