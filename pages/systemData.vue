<script setup>
definePageMeta({
    layout: 'header'
})

const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetSystem');
// console.log(response);

response.data._rawValue.systemAnnouncements.forEach((item) => {
    console.log(item);
});

</script>

<template>
     <div class="system-data">
        <v-card class="text-card">
            <div class="system-data-title"> 
                <h2 style="padding: 1rem;">系統公告</h2>
            </div>
            <div class="system-data-content" v-for="item in response.data._rawValue.systemAnnouncements" v-if="response">
                    <p class="mt-9 text-subtitle-1">{{ item.expirationDate }}</p>
                    <p class="mt-3">{{ item.title }}</p>
                    <a :href="'https://maxs-fer.geosat.com.tw/PDF/' + item.fileName" download class="mb-5 mt-5">{{ item.content }}</a>
                    <v-divider></v-divider>
            </div>
        </v-card>
    </div>
</template>

<style scoped>

.system-data {
  width: 80vw;
  height: 75vh;
  margin: auto;
  margin-top: 152px;
}

.system-data-title {
  background: #B34712;
  color: #FFFFFF;
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #000000;
  font-size: 18px;
}

.system-data-content {
  padding: 1rem;
}
</style>