import { defineStore } from 'pinia';

export const useExamStore = defineStore('exam',()=>{
  const examData = reactive([])

  const addExamData = (data) => {
    examData.push(data);
  }  
  
  return {
    addExamData
  }
});
  // id: 'exam',
  // state: () => ({
  //   examData: []
  // }),
  // actions: {
  //   addExamData(data) {
  //     this.examData.push(data);
  //   }
  // }