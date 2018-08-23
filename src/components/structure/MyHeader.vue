<template>
  <div>
    <el-row>
      <el-col :span="3" id="p1">
        <div>
          <img src="../../assets/img/logo.svg"/>
        </div>
      </el-col>
      <el-col :span="12" id="p2">
        <div>
          <el-menu
            :default-active=activeIndex
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#1e89e0"
            router
            text-color="#fff"
            active-text-color="white">
            <el-menu-item index="/main">首页</el-menu-item>
            <el-menu-item index="/main/myOrder">我的订单</el-menu-item>
            <el-menu-item index="/main/join">加盟合作</el-menu-item>
            <el-menu-item index="/main/myHelp">我的客服</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="5" id="p3">
        <div>
          <a href="#">规则中心</a>
          <i class="vue-plus-icon-mobilephone_fill"></i>
          <a href="#">手机应用</a>
        </div>
      </el-col>
      <el-col :span="4" id="p4">
        <div>
          <div id="signIn_signUp">
            <i class="vue-plus-icon-people_fill"></i>
            <router-link to="/login">登录</router-link>
            <span>|</span>
            <router-link to="/login">注册</router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "MyHeader",
    data() {
      return {
        activeIndex: '/main'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/main_myheader.css";
</style>
