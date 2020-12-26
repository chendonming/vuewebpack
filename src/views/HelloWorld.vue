<template>
  <div>
    <div class="title">{{ msg }}</div>
    <button type="button" @click="jump">点击跳转</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "从零搭建webpack项目, 哈哈哈哈哈， webpack如此简单!",
    };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/a" });
    },
  },
};
</script>

<style scoped>
button {
  color: red;
}

.title {
  color: #fff;
  background: rgb(185, 108, 7);
}
</style>
