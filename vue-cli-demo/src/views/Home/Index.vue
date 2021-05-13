<template>
  <div>
    <div>vue page home page</div>
    <div>值：{{ testValue }}</div>
    <button
      class="
        px-1
        rounded
        border border-green-300
        hover:border-green-500
        text-green-500
        hover:text-green-700
      "
      @click="navigateToParentPath"
    >
      跳转到主应用 /vue-app
    </button>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";

const ins = getCurrentInstance();
const testValue = ref(0);

onMounted(() => {
  ins.appContext.config.globalProperties.$onGlobalStateChange((state) => {
    const { command, value } = state.command;
    switch (command) {
      case "add":
        testValue.value += value;
        break;
    }
  });
});
</script>
<script>
export default {
  methods: {
    navigateToParentPath() {
      this.$setGlobalState({
        command: {
          command: "navigate",
          value: "/vue-app",
        },
      });
    },
  },
};
</script>
