<template>
    <div id="Main">
      <el-container>
        <el-header height="60px"><router-view name="MyHeader"/></el-header>
        <el-main height="500px"><router-view name="MyMain"/></el-main>
        <el-footer><router-view name="MyFooter"/></el-footer>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
  @import "../assets/css/init.css";
  @import "../assets/css/main.css";
</style>
