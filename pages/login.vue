<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import {useExamStore} from '@/stores/exam'

const useExam = useExamStore()
const storeAccount = storeToRefs(useExam)

const router = useRouter()

const userAccount = ref('');
const userPassword = ref('');
const userInterimPassword = ref('');
const userNewPassword = ref('');
const userConfirmNewPassword = ref('');

const AccountRules = [
  value => {
    if (!value) return '请输入帳號';
    return true;
  }
];

const passwordRules = [
  value => {
    if (value && value.length >= 5) return true;
    return '密碼至少需要 5 個字符';
  }
];

const InterimPasswordRules = [
  value => {
    if (!value) return '請輸入臨時密碼';
    if (value.length >= 5) return true;
    return '臨時密碼至少需要5個字符';
  }
];



const handleSubmit = async () => {

    if (!userAccount.value || !userPassword.value) {
        alert('請填寫所有欄位');
        return;
    }

    if (userPassword.value.length < 5) {
        alert('密碼至少需要 5 個字符');
        return;
    }

    try {
        const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                account: userAccount.value,
                password: userPassword.value
            })
        })
        console.log(response)

        if (response.data.value === "ok") {
            console.log("登入成功！");
            localStorage.setItem('isLoggedIn', true);
            storeAccount.value = userAccount.value
            router.push('/flight')
            console.log('jump')
            // 例如，可以跳转到其他页面
        } else if (response.data.value === "帳號密碼錯誤") {
            console.log("帳號或密碼错误！");
            alert('登入失敗，請檢查您的帳號或密碼');
        }
    } catch (err) {
        console.error('Error:',err);
        alert('登入失敗，請檢查您的帳號或密碼');
    }
};

const handleForgotPassword = () => {
    isForget.value = !isForget.value
};

const isForget = ref(false)



</script>


<template>
    <div class="banner-content d-flex justify-space-around">
      <v-sheet class="title-icon" color="transparent">
        <img src="/assets/images/icon/组 2.png" />
      </v-sheet>
      <v-sheet class="title font-pingfang text-white" color="transparent">
        飛行教育資源平台
      </v-sheet>
      <v-sheet class="login-icon" color="transparent">
      </v-sheet>
    </div>

    <div class="login-container bg-grey-lighten-2" v-if="!isForget">
        <h3 class="login-title mb-16">登入帳戶</h3>
        <v-card class="login w-50"> 
          <form @submit.prevent="handleSubmit">
              <v-text-field
                  v-model="userAccount"
                  label="請輸入您的帳號"
                  :rules="AccountRules"
                  class="mb-8 w-75 mx-auto mt-16"
                  prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                  v-model="userPassword"
                  label="請輸入您的密碼"
                  :rules="passwordRules"
                  class="mb-5 w-75 mx-auto"
                  prepend-icon="mdi-lock"
                  type="password"
              ></v-text-field>
              <div class="btn mb-16">
                  <v-btn type="submit" class="" block>完成</v-btn>
              </div>
          </form>
        </v-card>
    </div>

    <!-- <div class="login-container bg-grey-lighten-2" v-else>
        <h3 class="login-title mb-16">忘記密碼</h3>
        <v-card class="login w-50">
            
        <form>
          <v-text-field
            v-model="userInterimPassword"
            label="臨時密碼"
            :rules="InterimPasswordRules"
            class="mb-8 w-75 mx-auto mt-16"
            prepend-icon="mdi-lock"
          ></v-text-field>

          <v-text-field
            v-model="userNewPassword"
            label="新密碼"
            :rules="passwordRules"
            class="mb-5 w-75 mx-auto"
            prepend-icon="mdi-lock"
          ></v-text-field>

          <v-text-field
            v-model="userConfirmNewPassword"
            label="確認新密碼"
            :rules="passwordRules"
            class="mb-5 w-75 mx-auto"
            prepend-icon="mdi-lock"
          ></v-text-field>

            <div class="btn mb-16">
                <v-btn class="" block @click="handleRevise">完成</v-btn>
            </div>
         
        </form>
        </v-card>
    </div> -->
   
</template>

<style scoped>
.banner-content {
  height: 100px;
  background-color: #153161;
}

.title-icon img {
  margin-top: 20px;
  margin-right: 200px;
}

.login-container{
    height: 100vh;
    width: 100vw;
}

.title {
  letter-spacing: 0;
  margin-top: 29px;
  margin-right: 350px;
}

.login-title {
    font-weight: bold;
    margin-top: 70px;
    font-size: 40px;
    letter-spacing: 0px;
    color: #B34712;
    opacity: 1;
    position: relative;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 1rem;
}

.login {
    width: 30vw;
    /* outline: rgb(20, 80, 190) solid 1px; */
    margin: 0 auto;
}

.btn {
    width: 5vw;
    margin: auto;
}

.v-btn {
  text-decoration: none;
  color: #fff;
  background-color: #969696 ;
  border-radius: 25px;
  display: inline-block;
}
.v-btn:hover {
  background-color: #B34712;
}

.forgot-password {
    position: absolute;
    margin-left: 850px;
    margin-top: 20px;
    color: #FF8000;
    font-size: 20px;
}

.forgot-password:hover {
    color: #153161;
}
</style>