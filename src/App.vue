<template>
  <div id="app">
    <Header />
    <main>
      <router-view name="sidebar"></router-view>
      <router-view name="main"></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}

body {
  background-color: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}

main {
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
}
</style>
