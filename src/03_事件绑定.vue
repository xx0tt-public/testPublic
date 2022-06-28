<template>
  <div>
    <p>商品总数{{ count }}</p>
    <button @click="count++">+1</button>
    <button @click="addFn">+1</button>
    <button @click="addFn1(5)">+5</button>
    <button @click="subFn">-1</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    addFn() {
      this.count++
    },
    addFn1(value) {
      this.count += value
    },
    subFn() {
      this.count--
    },
  },
}
</script>

<style></style>
