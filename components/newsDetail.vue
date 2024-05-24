<script setup>
 const props = defineProps(['name', 'id'])

 const response = await useFetch(`https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetTrainingSessions/${props.id}`)
 const data = response.data._rawValue
 console.log('detail', data.trainingSessions)
</script>

<template>
    <div class="pa-2 text-center">
      <v-dialog max-width="800">
        <template v-slot:activator="{ props: activatorProps }">
          <div v-bind="activatorProps" class="title">{{ props.name }}</div>
        </template>
  
        <template v-slot:default="{ isActive }">
          <v-card >
            <template v-slot:text>
                <div v-for="item in data.trainingSessions">
                    <p class="detail-title text-h4 font-weight-bold mb-3">{{ item.name }}</p>
                    <p>期程：{{ item.period }}</p>
                    <p>班別：{{ item.classType }}</p>
                    <p>人數：{{ item.numberOfStudents }}</p>
                    <p>學科考場：{{ item.academicTestLocation }}</p>
                    <p>學科地址：{{ item.academicTestLocationAddress }}</p>
                    <p>術科考場：{{ item.technicalTestLocation }}</p>
                    <p>術科地址：{{ item.technicalTestLocationAddress }}</p>
                    <p>師資教官姓名及證照：<br> </p>
                    <p v-for="instructors in item.instructors.split('\n')">{{ instructors }}</p>
                    <p>訓練無人機形式及型號：{{ item.droneTraining }}</p>
                    
                    <div class="photo-container" v-if="item.photo.length > 0">
                      <p>教育訓練成果：</p>
                      <img v-for="photo in item.photo" :key="photo" :src="`https://maxs-fer.geosat.com.tw${photo}`" alt="Training Photo"  class="training-photo">
                    </div>
                </div>
            </template>
          </v-card>
        </template>
      </v-dialog>
    </div>
</template>

<style scoped>

.detail-title {
  color: #B34712;
}

p {
  color: #000;
}

.title {
    text-align: start;
    font-weight: 800;
    font-size: 2.1rem;
}

.photo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  gap: 9px;
}

.training-photo {
  width: 740px; 
  height: auto; 
}

</style>