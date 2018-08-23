<template>
  <div id="Login">
    <p>
      <img src="../assets/img/logo_blue_bottom.svg"/><br/>
      <span id="loginType">
        <el-menu :default-active="loginType"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">账号登录</el-menu-item>
          <el-menu-item index="2">扫码登录</el-menu-item>
        </el-menu>
      </span>
      <br/>
      <template style="background: blue" v-if="loginType==1">
      <el-input type="text" placeholder="请输入手机号" class="login-input">
        <a slot="suffix" href="#">获取验证码</a>
      </el-input>
      <br/>
      <el-input type="text" placeholder="请输入验证码" class="login-input"></el-input>
      <br/>
      <span id="tip">
      温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意
        <a href="#">《用户服务协议》</a>
      </span><br/>
      <el-button type="success">登录</el-button>
      </template>
      <template v-if="loginType==2">
        <img id="loginImg" src="../assets/img/erweima.png"/>
      </template>
      <br/>
      <span class="myFooter">
        增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2018
        上海拉扎斯信息科技有限公司, All Rights Reserved.<br>
        <img style="width: 70px" src="../assets/img/picp_bg.e373b3.jpg"/>
      </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginType: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
       this.loginType=key;
      }
    }
  }
</script>
<style>
  .login-input .el-input__inner {
    height: 48px;
  }
</style>

<style scoped>
  #Login {
    height: 500px;
    text-align: center;
  }

  #Login p {
    line-height: 60px;
    margin-top: 80px;
  }

  #Login p img {
    padding-right: 5px;
  }

  #Login p #loginType {
    display: inline-block;
  }

  #Login p #loginType .el-menu-item {
    color: #1e89e0;
    font-weight: bolder;
  }

  #Login p .el-input {
    width: 300px;
    font-size: 15px;
  }

  #Login p .el-input a {
    padding-right: 5px;
    color: #1e89e0;
    font-size: 15px;
  }

  #Login p #tip {
    margin-top: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #6f7180;
    display: inline-block;
    width: 300px;
  }

  #Login p .el-button {
    width: 300px;
    height: 42px;
  }
  #Login #loginImg{
    width: 210px;
  }


</style>
