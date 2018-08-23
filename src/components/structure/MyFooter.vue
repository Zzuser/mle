<template>
  <div id="MyFooter">
    <el-row>
      <el-col :span="10">
        <div id="footerLink">
          <div>
            <h3>用户帮助</h3>
            <p>
              <a href="#">我的客服</a><br>
            </p>
          </div>
          <div>
            <h3>商务合作</h3>
            <p>
              <a href="#">我要开店</a><br>
              <a href="#">加盟指南</a><br>
              <a href="#">市场合作</a><br>
              <a href="#">开放平台</a><br>
            </p>
          </div>
          <div>
            <h3>关于我们</h3>
            <p>
              <a href="#">么了饿介绍</a><br>
              <a href="#">加入我们</a><br>
              <a href="#">联系我们</a><br>
              <a href="#">规则中心</a><br>
            </p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div id="footerConnect">
          <span>24小时客服热线 : 10105757<br/>
          关注我们 :<a href="#">微信</a>
            <a href="#">微博</a></span>
        </div>
      </el-col>
      <el-col :span="8">
        <div id="footerApp">
          <div>
            <img src="../../assets/img/erweima.png"/>
          </div>
          <div>
          <h3>下载手机版</h3>
            扫一扫,手机订餐方便
          </div>
        </div>
      </el-col>
    </el-row>
    <span class="myFooter">
        增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2018
        上海拉扎斯信息科技有限公司, All Rights Reserved.<br>
        <img style="width: 70px" src="../../assets/img/picp_bg.e373b3.jpg"/>
      </span>
  </div>
</template>

<script>
  export default {
    name: "MyFooter"
  }
</script>

<style scoped>
  #MyFooter {
    margin-top: 50px;
    text-align: center;
  }

  #footerLink {
    text-align: left;
    border-right: 1px #c8c8ce solid;
  }

  #footerLink div {
    padding: 0 60px 0 40px;
    vertical-align: text-top;
    display: inline-block;
  }

  #footerLink div h3 {
    font-size: 14px;
    color: #6f7180;
    font-family: 黑体, serif;
  }

  #footerLink div a {
    font-size: 10px;
    color: #a2a2a2;
  }

  #footerConnect {
    text-align: left;
    color: #6f7180;
    padding: 14px 30px;
  }

  #footerApp {

  }

  #footerApp div {
    display: inline-block;
    vertical-align: text-top;
    color: #6f7180
  }

  #footerApp div img {
    width: 120px;
  }

</style>
