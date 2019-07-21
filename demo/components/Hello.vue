<template>
  <div class="hello">
    <h2>welcome</h2>
    <h1>{{ msg }}
      <v-iconify name="mdi-home" inline></v-iconify>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'generator-vue-plugin'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
