<template>
  <div id="MyMain">
    <div id="op">
      <el-card class="box-card mle">
        <div slot="header" class="clearfix">
        <span class="subtext">
          <img id="logo_circle" src="../../assets/img/logo_circle.png">
          么了饿向消费者郑重承诺
        </span>
          <el-button style="float: right; padding: 3px 0" type="text">线下名单公示专栏></el-button>
        </div>
        <div>
       <span class="subtext">
        我平台已经对入网餐饮服务提供者的食品经营许可证进行严格的实地审查，并保证入网餐饮服务提供者食品经营许可证载明的经营者名称、经营场所、主体业态、经营项目、有效期等许可信息合法、真实、准确、有效。
       </span>
        </div>
      </el-card>
    </div>
    <div id="location">
      <el-row :gutter="20">
        <el-col :span="18">
          <span class="subtext">当前位置：</span>
          <span>大钟寺中鼎大厦b座</span>
          <router-link to="/">[切换位置]</router-link>
        </el-col>
        <el-col :span="6">
          <el-input
            placeholder="搜索商家美食"
            prefix-icon="el-icon-search">
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div id="takeout_game"><img src="../../assets/img/takeout_game.png"></div>
    <div id="category">
      <el-card class="box-card">
        <el-row>
          <el-col :span="2">
            <div>
              <span class="subtext">商家分类：</span>
            </div>
          </el-col>
          <el-col :span="22">
            <div>
              <a class="category-item" v-for="o in 20" :key="o">快餐便当</a>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div id="shops">
      <el-card id="shopsCard" class="box-card">
        <el-row>
          <el-col :span="6" v-for="o in 28" :key="o">
            <shop-card></shop-card>
          </el-col>
        </el-row>
      </el-card>

    </div>
  </div>
</template>

<script>
  import ShopCard from './ShopCard'
  export default {
    name: "MyMain",
    components:{
      'shop-card':ShopCard
    },
  }
</script>
<style>
  .mle .el-card__header {
    padding-top: 5px;
    padding-bottom: 0;
    border-bottom: 0;
  }

  .mle .el-card__body {
    padding-top: 5px;
  }
</style>
<style scoped>

  #MyMain #op .el-card {
    margin: 0 0;
    height: 80px;
  }

  #MyMain #op .el-card .clearfix img {
    width: 20px;
    vertical-align: middle;
  }

  #MyMain #op .el-card .clearfix .el-button {
    font-size: small;
  }

  #location {
    font-size: small;
    margin: 20px 0;
  }

  #location .el-col {
    line-height: 40px;
  }

  #takeout_game {
    text-align: right;
  }

  #takeout_game img {
    height: 50px;
  }

  #category {

  }

  .category-item {
    display: inline-block;
    padding: 6px;
  }

</style>
