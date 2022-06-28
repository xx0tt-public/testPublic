<template>
  <div>
    <input type="text" @keydown.enter="enterFn" />
    <hr />
    <input type="text" @keydown.esc="escFn" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    enterFn() {
      alert('Enter Fn')
    },
    escFn() {
      alert('Esc Fn')
    },
  },
}
</script>

<style></style>
