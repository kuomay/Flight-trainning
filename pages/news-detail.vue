<script setup>
definePageMeta({
  middleware: [
    'auth',
  ],
});
</script>

<template>
   <div class="container">
    <div class="banner-content d-flex justify-space-around">
        <Nuxt-link to="/"><v-sheet class="title-icon" color="transparent">
          <img src="/assets/images/icon/组 2.png" />
        </v-sheet></Nuxt-link>
        <v-sheet class="title font-pingfang text-white" color="transparent">
          飛行教育資源平台
        </v-sheet>
        <!-- <h4 class="member-name">李學員</h4> -->
        <v-sheet class="login-icon" color="transparent">
          <!-- <img class="mr-9" src="/assets/images/icon/组 25.png" /> -->
          <img src="/assets/images/icon/组 4.png" />
        </v-sheet>
      </div>

      <div class="training-info">
    <h2 class="training-title">第一梯次教育訓練(北部班次)</h2>
    <div class="training-details">
      <div class="detail">
        <strong>期程：</strong> 113年4月8日至4月19日
      </div>
      <div class="detail">
        <strong>班別：</strong> 無人機多旋翼機班
      </div>
      <div class="detail">
        <strong>人數：</strong> 20人
      </div>
      <div class="detail">
        <strong>學科考場：</strong> 台北海洋科技大學
        <br>
        <strong>學科地址：</strong> 台北市士林區延平北路九段212號
      </div>
      <div class="detail">
        <strong>術科考場：</strong> 新北市急難救援大隊術科考場
        <br>
        <strong>術科地址：</strong> 新北市新店區中正路700巷322-11號
      </div>
      <div class="detail">
        <strong>師資教官姓名及證照：</strong>
        <ul>
          <li>主教官：楊敏政(IIc, G1/G2/G3)</li>
          <li>助教：陳力綱(Ib, G1/G2/G3)</li>
          <li>助教：吳旻坤(Ia, G2/G3 Ib, G1)</li>
          <li>助教：陳爾志(Ia, G2)</li>
          <li>備用教官：黃世旺(Ib, G1/G2/G3)</li>
          <li>許祖寧(Ib, G1/G2/G3)</li>
        </ul>
      </div>
      <div class="detail">
        <strong>訓練無人機形式及型號：</strong> X4-900 4軸基本級訓練機
      </div>
    </div>
  </div>

  </div>
</template>

<style scoped>

.banner-content {
  height: 100px;
  background-color: #153161;
}
.title-icon img {
  margin-top: 20px;
  margin-right: 400px;
}

.title {
  letter-spacing: 0;
  margin-top: 29px;
}

.login-icon {
  margin-top: 25px;
  margin-left: 400px;
  /* margin-right: 100px; */
}

.training-info {
  width: 80%;
  margin: auto;
}

.training-title {
  padding: 1.5rem;
  color: #B34712;
  margin-top: 15px;
  font-size: 40px;
}

.training-details {
  font-size: 18px;
  margin-left: 20px;
}

.detail {
  margin-bottom: 10px;
}

.detail strong {
  font-weight: bold;
}

.detail ul {
  list-style: none;
  padding-left: 0;
}

.detail ul li {
  margin-bottom: 5px;
}
</style> 



