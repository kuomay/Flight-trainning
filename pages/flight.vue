<script setup lang="ts">
const tab = ref(null);
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
      <v-card>
          <v-tabs
            v-model="tab"
            bg-color="white"
            align-tabs="center"
            height="50"
          >
            <v-tab value="one">自我評量</v-tab>
            <v-tab value="two">訊息專區</v-tab>
            <v-tab value="three">帳號管理</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <Exam />
              </v-window-item>

              <v-window-item value="two">
                <News />
               
              </v-window-item>

              <v-window-item value="three">
                <Account />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>

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

.member-name {
  color: #FFFFFF;
  font-size: 35px;
  position: absolute;
  top: 30px;
  left: 1553px;
}

.v-tab {
  font-size: 30px;
  font-weight: bolder;
  color: #153161;
}

</style> 
