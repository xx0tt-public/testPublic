<template>
  <div>
    <input type="text" v-model="test" /><br />
    <input type="test" v-bind="test1" @input="iptFn" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      test: '',
      test1: '',
    }
  },
  methods: {
    iptFn(e) {
      this.test1 = e.target.value
    },
  },
}
</script>

<style></style>
