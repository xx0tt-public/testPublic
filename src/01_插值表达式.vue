<template>
  <div>
    {{ msg }}
    <h1>{{ obj.name }}</h1>
    <h1>{{ obj.age }}</h1>
    <h1>{{ obj.age >= 18 ? '成年' : '未成年' }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello, world!',
      obj: {
        name: '大哥',
        age: 18,
      },
    }
  },
}
</script>

<style></style>
