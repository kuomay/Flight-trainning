<template>
  <div class="container">
    <div class="banner-content d-flex justify-space-between">
      <v-sheet class="title-icon" color="transparent">
        <img src="/assets/無人機飛操手培訓班採購案_icon/组 2.png" />
      </v-sheet>
      <v-sheet class="title text-white" color="transparent">
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
      <v-col cols="8">
        <v-sheet class="pa-2 ma-2"> .v-col-8
          <v-card class="mx-auto" max-width="344">
  >
    <v-card-text>
      <div>Word of the Day</div>
              <p class="text-h4 text--primary">be•nev•o•lent</p>
      </p>
      <p>adjective</p>
      <div class="text--primary">
                well meaning and kindly.<br />
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
              <v-btn color="deep-purple-accent-4" variant="text">
      >
        Learn More
      </v-btn>
            </v-card-actions>
  </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="4">
        <v-sheet class="pa-2 ma-2"> .v-col-4 </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const items = ref([
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
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
  margin-left: 100px;
  margin-top: 20px;
  width: 157px;
  height: 60px;
}

.title {
  font:
    normal normal bold 30px/42px 'PingFang SC',
    sans-serif;
  letter-spacing: 0px;
  margin-top: 29px;
}

.login-icon {
  margin-top: 25px;
  width: 50px;
  height: 50px;
  margin-right: 100px;
}
</style>
