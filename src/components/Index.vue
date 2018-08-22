<template>
  <div id="Index">
    <el-container>
      <el-header height="500px">
        <el-row :gutter="0">

          <el-col id="index_left_top_col" :span="12">
            <div>
              <img id="index_left_top" src="../assets/img/index_left_top.svg">
            </div>
          </el-col>
          <el-col id="index_right_top_col" :span="12">
            <div id="signIn_signUp">
              <router-link to="/login">登录</router-link>
              <span style="margin: 0 10px">|</span>
              <router-link to="/login">注册</router-link>
              <el-button type="success">我要开店</el-button>
            </div>
          </el-col>
        </el-row>
        <div>
          <img id="center_logo" src="../assets/img/center_logo.svg">
        </div>
        <div id="middle">
          <div id="search">
            <el-dropdown>
             <span class="el-dropdown-link">
               北京<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span id="line"></span>
            <input type="text" class="el-input" placeholder="请输入您的收货地址（小区，学校或街道）">
          </div>
          <button id="searchButton" @click="goto">搜索</button>
        </div>
      </el-header>
      <el-main height="300px">
        <div id="app_img">
          <img src="../assets/img/erweima.png"/>
        </div>
        <div id="app_text">
          <p>
            <span class="normal">新用户首次下单</span><br>
            <span class="not_normal">最高立减30元</span><br>
            <span class="normal">立即下载APP，享更多优惠吧！</span><br>
          </p>
        </div>
      </el-main>
      <el-footer>我要开店 | 联系我们 | 服务条款和协议 | 营业执照 | 加入我们 | 蜂鸟配送 | 失信人员查询<br>
        互联网药品信息服务资格证书:(沪)-经营性-2016-0011 | 增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2018
        上海拉扎斯信息科技有限公司, All Rights Reserved.<br>
        <img style="width: 70px" src="../assets/img/picp_bg.e373b3.jpg"/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      goto:function () {
        this.$router.push("/main")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../assets/css/index.css";

</style>
