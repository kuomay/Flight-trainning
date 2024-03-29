<script setup>
onMounted(() => {
  const { data: trainingSessionsResponse, error: trainingSessionsError } = useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetTrainingSessionsInfo');
  const trainingSessions = trainingSessionsResponse;
  console.log(trainingSessions);

  if (trainingSessionsError.value) {
    console.error('Error fetching system data:', trainingSessionsError.value);
  }
});
</script>

<template>
    <div class="news">
        <v-card class="text-card">
            <div class="news-title"> 
                <h2 style="padding: 1.5rem;">訊息列表</h2>
            </div>
            <div class="news-content">
                <Nuxt-link to="/news-detail" class="news-link">第一梯次教育訓練(北部班次)</Nuxt-link>
                <ul>
                    <li class="mt-3"><strong>期程:</strong></li>
                    <li><strong>班別:</strong> 無人機多旋翼機班</li>
                    <li><strong>學科考場:</strong> 台北海洋科技大學</li>
                    <li><strong>術科考場:</strong> 新北市急難救援大隊術科考場</li>
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
