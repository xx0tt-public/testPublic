<template>
  <div>
    <a v-bind:href="href">百度</a>
    <img v-bind:src="imgUrl" />
    <img :src="imgLocal" />
    <img src="./assets/logo.png" />
  </div>
</template>

<script>
import imgLocal from './assets/logo.png'
// 唯独js需要导入图片文件(css/标签里可以直接使用图片地址)
export default {
  name: 'app',
  data() {
    return {
      href: 'http://www.baidu.com/',
      imgUrl:
        'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      imgLocal: imgLocal,
    }
  },
}
</script>

<style></style>
