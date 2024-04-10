<script setup>
definePageMeta({
    layout: 'header'
})

const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetRegulaAndDoc');
// console.log(response);

response.data._rawValue.regulationsAndDocuments.forEach((item) => {
    console.log(item);
});
</script>

<template>
     <div class="regula-data">
        <v-card class="text-card">
            <div class="regula-data-title"> 
                <h2 style="padding: 1rem;">法規及文件</h2>
            </div>
              <div class="regula-data-content" v-for="item in response.data._rawValue.regulationsAndDocuments" v-if="response">
                    <p class="mt-9 text-subtitle-1">{{ item.expirationDate }}</p>
                    <!-- <p class="mt-3">{{ item.title }}</p> -->
                    <a :href="'https://maxs-fer.geosat.com.tw/PDF/' + item.content" download class="mt-5 mb-5">{{ item.title }}</a>
                    <!-- <a :href="'https://maxs-fer.geosat.com.tw/PDF/' + item.fileName" download class="mb-5 mt-5">{{ item.content }}</a> -->
                    <v-divider></v-divider>
            </div>
        </v-card>
    </div>
</template>

<style scoped>

.regula-data {
  width: 80vw;
  height: 75vh;
  margin: auto;
  margin-top: 152px;
}

.regula-data-title {
  background: #B34712;
  color: #FFFFFF;
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #000000;
  font-size: 18px;
}

.regula-data-content {
  padding: 1rem;
}
</style>