import { defineStore } from 'pinia';

export const useExamStore = defineStore('exam',()=>{
  const examData = reactive([])

  const addExamData = (data) => {
    examData.push(data);
  }  
  
  const storeAccount = ref('')

  const storeName = ref('')

  return {
    addExamData,
    storeAccount,
    storeName
  }
});