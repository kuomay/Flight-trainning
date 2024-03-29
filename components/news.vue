<script setup>

const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetTrainingSessionsInfo');
console.log(response.data._rawValue);

response.data._rawValue.trainingSessions.forEach((item) => {
    console.log(item.name);
});


</script>

<template>
    <div class="news">
        <v-card class="text-card">
            <div class="news-title"> 
                <h2 style="padding: 1.5rem;">訊息列表</h2>
            </div>
            <div class="news-content" v-for="item in response.data._rawValue.trainingSessions" v-if="response">
                <Nuxt-link to="/news-detail" class="news-link">{{ item.name }}</Nuxt-link>
                <ul>
                    <li class="mt-3"><strong>期程:</strong></li>
                    <li><strong>班別:</strong> {{ item.classType }}</li>
                    <li><strong>學科考場:</strong> {{ item.academicTestLocation }}</li>
                    <li><strong>術科考場:</strong> {{ item.technicalTestLocation }}</li>
                </ul>
            </div>
        </v-card>
    </div>
</template>

<style scoped>

.news {
  width: 80vw;
  height: 75vh;
  margin: auto;
  margin-top: 70px;
}

.news-title {
  background: #B34712;
  color: #FFFFFF;
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #000000;
  font-size: 18px;
}

.news-content {
  padding: 1rem;
}

.news-link {
  text-decoration: none; /* 去除下划线 */
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  font-size: 35px;
  color: #153161;
  font-weight: bold;
}

.news-link:hover {
  color: #FFA500; /* 修改为您想要的悬停颜色 */
}

.news-content ul {
  list-style: none;
  padding: 0;
}

.news-content ul li {
  margin-bottom: 5px;
}

</style>
