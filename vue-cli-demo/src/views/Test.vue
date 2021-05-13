<template>
  <div>test page</div>
</template>
<script setup>
import { getCurrentInstance, onMounted } from 'vue'

const ins = getCurrentInstance()

onMounted(() => console.log(ins.appContext.config.globalProperties))
</script>