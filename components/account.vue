<script setup>
import { ref } from 'vue';
import {useExamStore} from '@/stores/exam'

const useExam = useExamStore()
const storeAccount = storeToRefs(useExam)

const userOldPassword = ref('');
const userNewPassword = ref('');
const userConfirmNewPassword = ref('');

const OldPasswordRules = [
  value => {
    if (value && value.length >= 5) return true;
    return '密碼至少需要5個字符';
  }
];

const passwordRules = [
  value => {
    if (!value) return '請輸入新密碼';
    if (value.length >= 5) return true;
    return '新密碼至少需要5個字符';
  }
];

const confirmPasswordRules = [
  value => {
    if (!value) return '請確認新密碼';
    if (value.length >= 5) return true;
    return '新密碼至少需要5個字符';
  }
];



const handleRevise = async () => {
  if (!userOldPassword.value || !userNewPassword.value || !userConfirmNewPassword.value) {
    alert('請填寫所有欄位');
    return;
  }

  if (userNewPassword.value !== userConfirmNewPassword.value) {
    alert('新密碼與確認新密碼不一致');
    return;
  }

  if (userOldPassword.value.length < 5) {
    alert('密碼至少需要 5 個字符');
    return;
  }

  const data = {
    oldPassword: userOldPassword.value,
    password: userNewPassword.value,
    account: storeAccount.value
  };

  console.log(data);

  // try {
  //   const response = await useFetch('https://maxs-fer.geosat.com.tw/Examine/api/Login', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: data
  //   });

  //   console.log(response);

  //   if (response.ok) {
  //     alert('修改完成');
  //   } else {
  //     throw new Error('修改失敗');
  //   }
  // } catch (error) {
  //   console.error('Error updating password:', error);
  //   alert('修改密碼時錯誤');
  // }
};
</script>

<template>
    <div class="account">
        <v-card class="text-card">
            <div class="account-title"> 
                  <h2 style="padding: 1.5rem;">修改密碼</h2>
            </div>
            <div class="login-container">
                <div class="login w-80">
                    <form>
                    <v-text-field
                        v-model="userOldPassword"
                        label="舊密碼"
                        :rules="OldPasswordRules"
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
                        :rules="confirmPasswordRules"
                        class="mb-5 w-75 mx-auto"
                        prepend-icon="mdi-lock"
                    ></v-text-field>

                    <div class="btn mb-16">
                        <v-btn class="" block @click="handleRevise">完成</v-btn>
                    </div>
                    
                    </form>
                </div>
            </div>
                
        </v-card>
    </div>
</template>

<style scoped>

.account {
  width: 80vw;
  height: 75vh;;
  /* outline: rgb(20, 80, 190) solid 1px; */
  margin: auto;
  margin-top: 70px;
}

.account-title {
  background: #B34712 0% 0% no-repeat padding-box;
  color: #FFFFFF;
  font-size: 18px;
  /* outline: rgb(38, 28, 168) solid 5px; */
}

.text-card {
  border-radius: 20px 20px 0 0;
  color: #153161;
}

.btn {
    width: 5vw;
    margin: auto;
}

.v-btn {
  text-decoration: none;
  color: #fff;
  background-color: #B34712 ;
  border-radius: 25px;
  display: inline-block;
}

</style> 