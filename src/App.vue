<script setup>
import JSONLab from './components/JSON.vue'
import Form from './components/Form.vue'
</script>

<template>
  <header>
    <Form />
  </header>
  <!--JSONLab /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
