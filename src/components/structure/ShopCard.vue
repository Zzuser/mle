<template>
  <div id="ShopCard">
    <el-card :body-style="{ padding: '0px' }">
      <el-row>
        <el-col :span="8">
          <div id="shopImgGroup">
            <img id="shopImg" src="../../assets/img/hamburger.png"><br>
            <span class="subtext">45分钟</span>
          </div>
        </el-col>
        <el-col :span="16">
          <div style="padding: 14px;">
            <span id="ShopName">好吃的汉堡</span>
            <div class="bottom clearfix">
              <img id="Star" src="../../assets/img/star.png"><br>
              <span class="subtext">起送20元</span>
              <span class="subtext"> | </span>
              <span class="subtext">配送费8元</span><br>
              <el-collapse accordion>
                <el-collapse-item>
                  <template slot="title">
                    满30减29<span class="subtext" style="padding-left: 30px">更多优惠</span>
                  </template>
                  <div>扫描领20元红包</div>
                  <div>新用户首单立减10元</div>
                  <div>扫描领20元红包</div>
                  <div>新用户首单立减10元</div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--<img src="../../assets/img/hamburger.png">-->
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "ShopCard",
    data() {
      return {
        currentDate: new Date().toLocaleString()
      };
    }
  }
</script>

<style scoped>
  #shopImg {
    padding-top: 14px;
    width: 80px;
    height: 80px;
  }
  #shopImgGroup{
    text-align: center;
  }

  #ShopCard {
    margin: 5px;
  }

  #ShopName{
    font-weight: bolder;
  }
  #Star{
    width: 60px;
    height: auto;
  }


</style>
