<script setup>
 const props = defineProps(['name', 'id'])

 const response = await useFetch(`https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetTrainingSessions/${props.id}`)
 const data = response.data._rawValue
 console.log('detail', data.trainingSessions)
</script>

<template>
    <div class="pa-4 text-center">
      <v-dialog max-width="800">
        <template v-slot:activator="{ props: activatorProps }">
          <div v-bind="activatorProps" class="title">{{ props.name }}</div>
        </template>
  
        <template v-slot:default="{ isActive }">
          <v-card :title="props.name">
            <template v-slot:text>
                <div v-for="item in data.trainingSessions">
                    <p>{{ item.period }}</p>
                    <p>{{ item.classType }}</p>
                    <p>{{ item.numberOfStudents }}</p>
                    <p>{{ item.academicTestLocation }}</p>
                    <p>{{ item.academicTestLocationAddress }}</p>
                    <p>{{ item.technicalTestLocation }}</p>
                    <p>{{ item.technicalTestLocationAddress }}</p>
                    <p>{{ item.instructors }}</p>
                </div>
            </template>
          </v-card>
        </template>
      </v-dialog>
    </div>
</template>

<style scoped>
.text-center {
    /* outline: 1px solid red; */
}

.title {
    text-align: start;
    font-weight: 800;
    font-size: 1.5rem;
}
</style>