<script setup>
import { ref } from 'vue';
import { useExamStore } from '@/stores/exam';

const store = useExamStore();

const examTypes = ['普通操作證學科測驗', '專業操作證學科測驗'];

const selectedExamType = ref(examTypes[0]);

// 控制是否开始考试的变量
const examStarted = ref(false);
const examList = ref([
  {
    id: 'uniqueId1',
    title: '問題標題',
    answer: 'B',
    options: {
      A: '選項A內容',
      B: '選項B內容',
      C: '選項C內容',
      D: '選項D內容'
    }
  },
  {
    id: 'uniqueId2',
    title: '另一個問題標題',
    answer: 'D',
    options: {
      A: '選項A內容',
      B: '選項B內容',
      C: '選項C內容',
      D: '選項D內容'
    }
  }
]);

// 倒计时剩余时间（单位：秒）
const countdown = ref(0);

const startExam = async () => {
  examStarted.value = true;
  countdown.value = 10 * 60;

  try {
    const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetQuestionsWithType/0/25', {
      method: 'GET'
    });

    // 如果需要處理回應的資料，可以在這裡進行操作
    const examQuestions = await response.json();
    // 將取得的測驗題目設置到 examList 中
    examList.value = examQuestions;
  } catch (error) {
    console.error('Error fetching exam questions:', error);
    // 在這裡處理錯誤，例如顯示錯誤訊息給用戶
  }


  // 创建倒计时器
  
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      alert('作答已結束');
      store.addExamData(examList.value);
    }
  }, 1000);
};


</script>

<template>
   <div class="container">
    <div class="exam" v-if="!examStarted">
    <v-card class="text-card">
                <v-select
                    class="exam-title font-weight-bold"
                    v-model="selectedExamType"
                    label="請選擇學科測驗種類"
                    :items="examTypes"
                ></v-select>
                  <p class="mt-5 ml-5">學科測驗計分方式</p>
                  <h4 class="mt-2 ml-5">合格標準 : 80 (滿分100)</h4>
                  <h4 class="mt-2 ml-5">測驗題數 : 20</h4>
                  <h4 class="mt-2 ml-5">單題扣分 : 5 </h4>
                  <button class="btn ml-5 mb-6" @click="startExam">開始測驗</button>
                  <v-divider></v-divider>
                </v-card>
              </div>

    
      <v-card>
          <v-card-text v-if="examStarted">
              <div class="exam">
                <v-card class="text-card">
                <div class="exam-title d-flex justify-space-between"> 
                  <h2 style="padding: 1rem;">{{ selectedExamType }}</h2>
                  <h2 class="mt-4 mr-5">倒數計時: {{ Math.floor(countdown / 60) }} 分 {{ countdown % 60 }} 秒</h2>
                </div>
                 
                  <v-divider></v-divider>
                  <p class="mt-5 ml-5">學科測驗計分方式</p>
                  <h4 class="mt-2 ml-5">合格標準 : 80 (滿分100)</h4>
                  <h4 class="mt-2 ml-5">測驗題數 : 20</h4>
                  <h4 class="mb-5 mt-2 ml-5">單題扣分 : 5 </h4>
                  <v-divider></v-divider>
                </v-card>
                <v-card-text>
                  <v-row>
                    <v-col v-for="(exam, index) in examList" :key="exam.id" cols="12">
                      <v-card>
                        <v-card-title class="font-weight-bold">({{ index + 1 }}) {{ exam.title }}</v-card-title>
                        <v-card-text>
                          <v-radio-group v-model="exam.answer" :options="exam.options">
                            <v-radio
                              v-for="(option, key) in exam.options"
                              :key="key"
                              :label="option"
                              :value="key"
                            ></v-radio>
                          </v-radio-group>
                          <p>answer: {{ exam.answer }}</p>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  <button class="btn">送出</button>
                </v-card-text>
              </div>
          </v-card-text>
        </v-card>
  </div>
</template>

<style scoped>

.exam {
  width: 80vw;
  /* height: 75vh; */
  margin: auto;
  margin-top: 70px;
}

.exam-title {
  background: #B34712 0% 0% no-repeat padding-box;
  color: #FFFFFF;
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #153161;
}

.btn {
  color: #FFFFFF;
  font-size: 20px;
  width: 100px;
  height: 50px;
  background: #B34712 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  margin-top: 50px;
}
</style> 
