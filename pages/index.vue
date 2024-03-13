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

<template>
  <div class="container">
    <div class="banner-content d-flex justify-space-around">
      <v-sheet class="title-icon" color="transparent">
        <img src="/assets/images/icon/组 2.png" />
      </v-sheet>
      <v-sheet class="title font-pingfang text-white" color="transparent">
        飛行教育資源平台
      </v-sheet>
      <v-sheet class="login-icon" color="transparent">
        <img src="/assets/images/icon/组 4.png" />
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
              <div class="card-header font-pingfang">
                <img
                  src="/assets/images/icon/路徑 11.png"
                  style="
                    width: 38px;
                    height: 36px;
                    top: 6px;
                    position: relative;
                  "
                  alt="icon"
                />
                最新消息
              </div>
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
              <div class="card-header">
                <img
                  src="/assets/images/icon/路径 12.png"
                  style="
                    width: 38px;
                    height: 36px;
                    top: 6px;
                    position: relative;
                  "
                  alt="icon"
                />法規及文件
              </div>
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
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14556.831457304039!2d120.62186191217364!3d24.19949852805464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469163ca35bb163%3A0x86c483aa1446c880!2z5ZyL5a625Lit5bGx56eR5a2456CU56m26ZmiIOiIquepuueglOeptuaJgCDlj7DkuK3pmaLljYA!5e0!3m2!1szh-TW!2stw!4v1710216079838!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
  /* margin-left: 100px; */
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

.custom-card-left {
  width: 60vw; /* 70% of the viewport's width */
  height: 50vh; /* 50% of the viewport's height */
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px; /* 添加左边卡片的圆角 */
}

.custom-card-right {
  width: 30vw; /* 30% of the viewport's width */
  height: 50vh; /* 50% of the viewport's height */
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
