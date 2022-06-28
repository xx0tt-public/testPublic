<template>
  <div>
    <van-nav-bar
      :title="activeTitle"
    />
    <!-- 二级路由的挂载点 -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      active: 0,
      activeTitle:this.$route.meta.title,
    };
  },
  watch:{
    $route(){
      this.activeTitle = this.$route.meta.title
    }
  }
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>