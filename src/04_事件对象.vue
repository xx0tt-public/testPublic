<template>
  <div>
    <a @click="one" href="http://www.baidu.com">阻止百度</a>
    <br />
    <a @click="two(1, $event)" href="http://www.baidu.com">阻止百度</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    one(e) {
      console.log(e)
      e.preventDefault()
    },
    two(val, e) {
      console.log(val)
      e.preventDefault()
    },
  },
}
</script>

<style></style>
