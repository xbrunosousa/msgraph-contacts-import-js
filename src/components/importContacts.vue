<template>
  <div class="hello">
    {{teste}}
  </div>
</template>

<script>
export default {
  name: 'importContacts',
  props: {
    msg: String
  },
  data() {
    return {
      teste: 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
