<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" v-model="text" />
    </div>
    <div>
      <span>密码: </span>
      <input type="password" v-model="password" />
    </div>
    <input type="text" v-bind:value="val1" @input="inputFn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      password: '',
      val: '',
      val1: '',
    }
  },
  methods: {
    inputFn(e) {
      this.val1 = e.target.value
    },
  },
}
</script>

<style></style>
