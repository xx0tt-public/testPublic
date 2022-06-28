<template>
  <div>
    <button @click="btn">解析字符串</button> <br />
    <button @click="btn2">reduce加减</button>
  </div>
</template>
<script>
export default {
  methods: {
    btn() {
      // http://www.baidu.com?name=zhangsan&age=18&sex=nan#
      // 解析出
      // {name: 'zhangsan',age: 18, sex: 'nan' }
      const process = (url) => {
        const index1 = url.indexOf('?') // 获取到?的索引号，代表内容开始的位置
        const index2 = url.indexOf('#') // 获取到#的索引号，代表内容结束的位置
        const arr = url.slice(index1 + 1, index2).split('&') // 截取字符串，+1排除？本身，并切割成数组
        const obj = arr.reduce((pre, item) => {
          // ES6语法，逐个赋值
          const [key, value] = item.split('=')

          pre[key] = value
          return pre
        }, {})
        console.log(obj)
      }

      process('http://www.baidu.com?name=zhangsan&age=18&sex=nan#')
    },
    btn2() {
      const arr = [2, 4, 1, 2, 1, 5]
      const sum = arr.reduce((pre, item) => {
        return pre + item
      }, 0)
      console.log(sum)
    },
  },
}
</script>

<style></style>
