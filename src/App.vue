<template>
  <div id="app">
    <Index />
  </div>
</template>
<script>
import Index from "./components/Index.vue";

export default {
  name: "app",
  components: {
    Index
  },
  track() {
    this.$ga.page("/");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>
