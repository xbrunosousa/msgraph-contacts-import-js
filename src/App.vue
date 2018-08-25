<template>
  <div id="app">
    <importContacts />
  </div>
</template>

<script>
import importContacts from './components/importContacts.vue'

export default {
  name: 'app',
  components: {
    importContacts
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
