<script setup>

const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetTrainingSessionsInfo');
console.log(response.data._rawValue);

response.data._rawValue.trainingSessions.forEach((item) => {
    console.log(item.name);
});

const url = 'https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetTrainingSessions/'
</script>

<template>
    <div class="news">
        <v-card class="text-card">
            <div class="news-title"> 
                <h2 style="padding: 1.5rem;">訊息列表</h2>
            </div>
            <div class="news-content" v-for="item in response.data._rawValue.trainingSessions" v-if="response">
                <Nuxt-link :to="url" class="news-link">{{ item.name }}</Nuxt-link>
                <ul>
                    <li class="mt-3"><strong>期程:{{ item.period }}</strong></li>
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
  margin: auto;
  margin-top: 70px;
}

.news-title {
  background: #B34712;
  color: #FFFFFF;
  border-bottom: 1px solid #dee2e6;
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #000000;
  font-size: 18px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* 為卡片添加陰影效果 */
  transition: 0.3s; /* 添加過渡效果 */
}
.text-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); /* 當滑鼠懸停時增加陰影 */
}

.news-content {
  padding: 1rem;
  border-bottom: 1px solid #dee2e6; /* 添加底部邊框作為分隔線 */
  padding-bottom: 1rem; /* 添加底部內距以增加分隔線與內容之間的空間 */
  margin-bottom: 1rem; 
  line-height: 1.5;
}

.news-link {
  text-decoration: none; 
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
  margin-top: 1rem;
}

.news-content ul li {
  margin-bottom: 5px;
}

</style>
