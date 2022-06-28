<template>
  <button @click="btn">使用reduce</button>
</template>

<script>
export default {
  methods: {
    btn() {
      let arr = [{ a: 100 }, { a: 20 }, { a: -10 }]
      const sum = arr.reduce((res, item) => {
        return res + item['a']
      }, 0)
      console.log(sum)
    },
  },
}
</script>

<style></style>
