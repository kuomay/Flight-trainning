<script setup>
definePageMeta({
    layout: 'header'
})

const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetCaa');
// console.log(response);

response.data._rawValue.caaAnnouncements.forEach((item) => {
    console.log(item);
});
</script>

<template>
     <div class="caa-data">
        <v-card class="text-card">
            <div class="caa-data-title"> 
                <h2 style="padding: 1rem;">民航局公告</h2>
            </div>
              <div class="caa-data-content" v-for="item in response.data._rawValue.caaAnnouncements" v-if="response">
                      <p class="mt-9 text-subtitle-1">{{ item.expirationDate }}</p>
                      <p class="mt-3">{{ item.title }}</p>
                      <p  class="mb-5 mt-5">{{ item.content }}</p>
                      <v-divider></v-divider>
              </div>

        </v-card>
    </div>
</template>

<style scoped>

.caa-data {
  width: 80vw;
  height: 75vh;
  margin: auto;
  margin-top: 152px;
}

.caa-data-title {
  background: #B34712;
  color: #FFFFFF;
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #000000;
  font-size: 18px;
}

.caa-data-content {
  padding: 1rem;
}
</style>