<template>
  <div class="container">
    <div class="banner-content d-flex justify-space-between">
      <v-sheet class="title-icon" color="transparent">
        <img src="/assets/無人機飛操手培訓班採購案_icon/组 2.png" />
      </v-sheet>
      <v-sheet class="title font-pingfang text-white" color="transparent">
        飛行教育資源平台
      </v-sheet>
      <v-sheet class="login-icon" color="transparent">
        <img src="/assets/無人機飛操手培訓班採購案_icon/组 4.png" />
      </v-sheet>
    </div>
    <v-carousel class="carousel" :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-row no-gutters>
      <v-col cols="8" style="background: #f0f0f0">
        <v-sheet class="custom-card-left ml-15 mt-10">
          <div class="">
            <div class="card">
              <div class="card-header font-pingfang">最新消息</div>
              <div class="card-body">
                <div class="left-content">
                  <h5 class="font-pingfang">系統公告</h5>
                  <p class="mt-10">系統開放使用公告</p>
                  <p class="mb-10 mt-10">系統開放使用公告</p>
                  <div class="button-container">
                    <a href="#" class="btn btn-primary">更多</a>
                  </div>
                </div>
                <div class="right-content">
                  <h5 class="font-pingfang">民航局公告</h5>
                  <p class="mt-10">派遣協調人員至航管單位之登記方式</p>
                  <p class="mb-10 mt-10">派遣協調人員至航管單位之登記方式</p>
                  <div class="button-container">
                    <a href="#" class="btn btn-primary">更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="4" style="background: #f0f0f0">
        <v-sheet class="custom-card-right mt-10">
          <div class="">
            <div class="card">
              <div class="card-header">法規及文件</div>
              <div class="card-body">
                <div class="left-content">
                  <p class="mb-10 mt-10">系統使用手冊</p>
                  <div class="button-container">
                    <a href="#" class="btn btn-primary">更多</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import banner from 'assets/images/banner.jpg'
const items = ref([
  {
    src: banner
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
  }
])
</script>

<style scoped>
.banner-content {
  height: 100px;
  background-color: #153161;
}

.title-icon img {
  margin-top: 20px;
  margin-left: 100px;
  width: 157px;
  height: 60px;
}

.title {
  letter-spacing: 0;
  margin-top: 29px;
}

.login-icon {
  margin-top: 25px;
  margin-right: 100px;
  width: 50px;
  height: 50px;
}

.custom-card-left {
  width: 1100px;
  height: 518px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px; /* 添加左边卡片的圆角 */
}

.custom-card-right {
  width: 550px;
  height: 518px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
}

.title-container {
  background-color: #153161;
}

.card-header {
  font:
    normal normal bold 30px/42px 'PingFang SC',
    sans-serif;
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: #153161;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.left-content,
.right-content {
  flex: 0 0 45%;
}

h5 {
  text-align: center;
  color: #153161;
}

.button-container {
  text-align: center;
}

.btn-primary {
  padding: 8px 16px;
  text-decoration: none;
  color: #fff;
  background-color: #153161;
  border-radius: 25px;
  display: inline-block;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
