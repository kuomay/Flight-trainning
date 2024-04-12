<script setup>
import { ref } from 'vue';
import { useExamStore } from '@/stores/exam';

const store = useExamStore();
const storeName = ref('');

const examTypes = ['普通操作證學科測驗', '專業操作證學科測驗'];
const examConfig = {
  '普通操作證學科測驗': {
    passScore: 80,
    questionCount: 20,
    deduction: 5,
    duration: '30分鐘'
  },
  '專業操作證學科測驗': {
    passScore: 80,
    questionCount: 40,
    deduction: 2.5,
    duration: '1小時'
  }
};
// const examTypes = Object.keys(examConfig);
const selectedExamType = ref(examTypes[0]);
const examStarted = ref(false);
const countdown = ref(0);
const userAns = reactive([])
const totalScore = ref(0);
const isSubmit = ref(false);
const examList = ref([
  {
    id: 'uniqueId1',
    title: '問題標題',
    answer: '',
    options: {
      A: '選項A內容',
      B: '選項B內容',
      C: '選項C內容',
      D: '選項D內容'
    }
  },
]);

onMounted(() => {
  storeName.value = localStorage.getItem('name') || '未知';
});

const startExam = async () => {
  examStarted.value = true;
  countdown.value = examConfig[selectedExamType.value].duration === '30分鐘' ? 30 * 60 : 60 * 60;

  try {
    let apiUrl;
    if (selectedExamType.value === '普通操作證學科測驗') {
      apiUrl = 'https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetQuestionsWithType/0/20';
    } else if (selectedExamType.value === '專業操作證學科測驗') {
      apiUrl = 'https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/GetQuestionsWithType/1/40';
    }

    const response = await useFetch(apiUrl, {
      method: 'GET'
    });

    // 如果需要處理回應的資料，可以在這裡進行操作
    const examQuestions = response; 
    //console.log(JSON.parse(examQuestions));
    // 將取得的測驗題目設置到 examList 中
    examList.value = examQuestions.data._value.questions;
  } catch (error) {
    console.error('Error fetching exam questions:', error);
    // 在這裡處理錯誤，例如顯示錯誤訊息給用戶
  }
  
  const timer = setInterval(() => {
    countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(timer);
        alert('作答已結束');
        store.addExamData(examList.value);
        isSubmit.value = true;
        examList.value.forEach((exam, index) => {
        if (userAns[index] && userAns[index].toUpperCase() === exam.answer) {
          totalScore.value += 100 / examConfig[selectedExamType.value].questionCount;
        } else {
          // 根據考試類型扣分
          if (selectedExamType.value === '普通學科測驗') {
            totalScore.value -= 5;
          } else if (selectedExamType.value === '專業學科測驗') {
            totalScore.value -= 2.5;
          }
        }
      });
      }
  }, 1000);
};


const handleSubmut = async () => {
  const formData = {
    "userID": storeName.value,
    "userTranscript": 0,
    "transcriptSelect": examList.value
  }

  // console.log('eamlist', examList.value)
  // console.log('formdata', formData)
  try {
    const response = await fetch('https://maxs-fer.geosat.com.tw/Examine/api/MAXSFER/UploadTranscript', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    // console.log(response.ok)

    // 檢查回應是否為 OK，如果不是，則拋出錯誤
    if (response.ok === "true") {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    } catch (error) {
      console.error('There was a problem with the fetch operation: ' + error.message);
    }
  // console.log(formData)
  isSubmit.value = true;
  countdown.value = null;
  // console.log(typeof(userAns[0]))
  examList.value.forEach((exam, index) => {
    if (userAns[index] && userAns[index].toUpperCase() === exam.answer) {
      totalScore.value += 100 / examConfig[selectedExamType.value].questionCount;
    } else {
      // 根據考試類型扣分
      if (selectedExamType.value === '普通學科測驗') {
        totalScore.value -= 5;
      } else if (selectedExamType.value === '專業學科測驗') {
        totalScore.value -= 2.5;
      }
    }
  });
}

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
        <p class="mt-5 ml-5 font-weight-bold">學科測驗計分方式</p>
        <h4 class="mt-5 ml-5">合格標準 : {{ examConfig[selectedExamType].passScore }} (滿分100)</h4>
        <h4 class="mt-3 ml-5">測驗題數 : {{ examConfig[selectedExamType].questionCount }}</h4>
        <h4 class="mt-3 ml-5">單題扣分 : {{ examConfig[selectedExamType].deduction }} </h4>
        <h4 class="mt-3 ml-5">測驗時間 : {{ examConfig[selectedExamType].duration }}</h4>
        <button class="btn ml-5 mb-6" @click="startExam">開始測驗</button>
        <v-divider></v-divider>
      </v-card>
    </div>

    <v-card v-else>
      <v-card-text>
        <div class="exam">
          <v-card class="text-card">
            <div class="exam-title d-flex justify-space-between">
              <h2 style="padding: 1rem;">{{ selectedExamType }}</h2>
              <h2 class="mt-4 mr-5" v-if="countdown > 0">倒數計時: {{ Math.floor(countdown / 60) }} 分 {{ countdown % 60 }} 秒</h2>
            </div>
            <v-divider></v-divider>
            <p class="mt-5 ml-5 font-weight-bold">學科測驗計分方式</p>
            <h4 class="mt-5 ml-5">合格標準 : {{ examConfig[selectedExamType].passScore }} (滿分100)</h4>
            <h4 class="mt-3 ml-5">測驗題數 : {{ examConfig[selectedExamType].questionCount }}</h4>
            <h4 class="mb-5 mt-3 ml-5">單題扣分 : {{ examConfig[selectedExamType].deduction }} </h4>
            <p class="mb-5 mt-2 ml-5 font-weight-bold"  :class="{ 'green-text': totalScore >= 80, 'red-text': totalScore < 80 }" v-if="isSubmit">總分：{{ totalScore }}</p>
            <v-divider></v-divider>
          </v-card>
          <v-card-text>
            <v-row>
              <v-col v-for="(exam, index) in examList" :key="exam.id" cols="12">
                <v-card>
                  <v-card-title class="font-weight-bold">({{ index + 1 }}) {{ exam.title }}</v-card-title>
                  <v-card-text>
                    <v-radio-group v-model="examList[index].userAns" :options="exam.options" :disabled="isSubmit">
                      <v-radio v-for="(option, key) in exam.options" :key="key" :label="option" :value="key"></v-radio>
                    </v-radio-group>
                    <v-alert type="error" v-if="((!userAns[index] || userAns[index].toUpperCase() !== exam.answer) || userAns[index] === null) && isSubmit">正確答案 : {{ exam.answer }}</v-alert>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <button class="btn" @click="handleSubmut">送出</button>
          </v-card-text>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>

.exam {
  /* height: 75vh; */
  margin: auto;
  margin-top: 70px;
  width: 80vw;
}

.exam-title {
  color: #FFF;
  background: #B34712 0% 0% no-repeat padding-box;
}

.text-card {
  color: #153161;
  border-radius: 20px 20px 0 0;
}

p {
  font-size: 28px;
  /* font-weight: bold; */
}

h4 {
  font-size: 24px;
}

.green-text {
  color: green;
}

.red-text {
  color: red;
}

.btn {
  margin-top: 50px;
  width: 100px;
  height: 50px;
  font-size: 20px;
  color: #FFF;
  background: #B34712 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
}
</style> 
