<template>
  <button @click="btn">使用reduce</button>
</template>

<script>
export default {
  methods: {
    btn() {
      let str = 'asfdghjghkjhgdsfdasdfghj'
      let arr = str.split('') // 先转换成数组，才能使用reduce方法
      const newarr = arr.reduce((pre, item) => {
        // 如果对象中已有这个字母 ++
        if (pre[item]) {
          pre[item]++
        } else {
          // 如果对象中没有该字母，创建该属性并赋1
          pre[item] = 1
        }
        return pre
      }, {})
      console.log(newarr)
    },
  },
}
</script>

<style></style>
