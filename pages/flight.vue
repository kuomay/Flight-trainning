<script setup>
const tab = ref(null);
import { useRouter } from 'vue-router'
const storeName = ref('');

onMounted(() => {
  storeName.value = localStorage.getItem('name') || '未知';
});


const router = useRouter()

const handleLogout = async () => {
    try {
        const response = await $fetch('https://maxs-fer.geosat.com.tw/Examine/api/Login/Logout', {
            method: 'DELETE'
        });

        if (response.MSG === "ok") {
            console.log("登出成功！");
            // 清空 localStorage
            localStorage.clear();
            router.push('/login');
        } else {
            console.log("登出失敗！");
            alert('登出失敗，請稍後再試。');
        }
    } catch (err) {
        console.error('Error:', err);
        alert('登出時發生錯誤：' + err.message);
    }
};


</script>

<template>
   <div class="container">
    <div class="banner-content d-flex justify-space-around">
        <v-sheet class="title-icon" color="transparent">
          <img src="/assets/images/icon/组 2.png" />
        </v-sheet>
        <v-sheet class="title font-pingfang text-white" color="transparent">
          飛行教育資源平台
        </v-sheet>

        <v-sheet class="login-icon" color="transparent">
          <h4 class="member-name">{{ storeName }} : 學員</h4>
          <img class="mr-16" src="/assets/images/icon/组 25.png" />
          <button @click="handleLogout">
            <img src="/assets/images/icon/组 4.png" />
          </button>
        </v-sheet>
      </div>
      <v-card>
          <v-tabs
            v-model="tab"
            bg-color="white"
            align-tabs="center"
            height="50"
          >
            <v-tab value="one">自我評量</v-tab>
            <v-tab value="two">訊息專區</v-tab>
            <v-tab value="three">帳號管理</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <Exam />
              </v-window-item>

              <v-window-item value="two">
                <News />
               
              </v-window-item>

              <v-window-item value="three">
                <Account />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>

  </div>
</template>

<style scoped>

.banner-content {
  height: 100px;
  background-color: #153161;
}
.title-icon img {
  margin-top: 20px;
  margin-right: 400px;
}

.title {
  letter-spacing: 0;
  margin-top: 29px;
}

.login-icon {
  margin-top: 25px;
  margin-left: 400px;
}

.login-icon img {
  width: 3rem; 
  height: auto; 
}

.member-name {
  font-size: 2rem; 
  margin: 1rem; 
  color: #FFFFFF;
  position: absolute;
  top: 15px;
  left: 1420px;
}

.v-tab {
  font-size: 30px;
  font-weight: bolder;
  color: #153161;
}

</style> 
