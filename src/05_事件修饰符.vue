<template>
  <div @click="fatherFn">
    <span @click.stop="one" href="http://www.baidu.com">.stop阻止事件冒泡</span>

    <br />

    <a @click.prevent.stop href="http://www.baidu.com">.prevent阻止默认行为</a>

    <br />

    <button @click.once="btn">.once程序运行期间, 只触发一次事件处理函数</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    fatherFn() {
      console.log('fatherFn click')
    },
    one() {
      console.log('span click')
    },
    btn() {
      console.log('btn')
    },
  },
}
</script>

<style></style>
