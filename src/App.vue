<template>
  <div class="container-fluid" id="app">
    <br />
    <button @click="microsoftGo" class="btn btn-outline-primary">{{message}}</button>
    <vue-snotify />
    <!-- <div :key="index" v-for="(item, index) in resposta">
      <p>{{item.emailAddresses}}</p>
    </div> -->
  </div>
</template>

<script>
import importContacts from './components/mixins/importContacts.vue';

export default {
  name: 'app',
  mixins: [importContacts],
  data() {
    return {
      message: 'Microsoft =D'
    };
  },
  components: {
    importContacts
  }
};
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
