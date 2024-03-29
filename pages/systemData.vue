<script>
definePageMeta({
    layout: 'header'
})


</script>

<template>
     <div class="system-data">
        <v-card class="text-card">
            <div class="system-data-title"> 
                <h2 style="padding: 1rem;">系統公告</h2>
            </div>
            <div class="system-data-content">
                <!-- <div v-for="announcement in systemData.systemAnnouncements" :key="announcement.id">
                    <p class="mt-5">{{ announcement.expirationDate }}</p>
                    <p class="mt-5">{{ announcement.title }}</p>
                    <p class="mb-10 mt-5">{{ announcement.content }}</p>
                    <p class="mb-10 mt-5">{{ announcement.fileName }}</p>
                    <v-divider></v-divider>
                  </div> -->
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