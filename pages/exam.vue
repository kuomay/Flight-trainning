<script setup lang="ts">
const examList = [
  {
    "id": "uniqueId1",
    "title": "問題標題",
    "answer": "B",
    "options": {
      "A": "選項A內容",
      "B": "選項B內容",
      "C": "選項C內容",
      "D": "選項D內容"
    }
  },
  {
    "id": "uniqueId2",
    "title": "另一個問題標題",
    "answer": "D",
    "options": {
      "A": "選項A內容",
      "B": "選項B內容",
      "C": "選項C內容",
      "D": "選項D內容"
    }
  }
]
</script>

<template>
  <div>
    <v-card title="學科線上考試">
      <p>....</p>
      <v-divider></v-divider>
    </v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" v-for="(exam, index) in examList" :key="exam.id">
          <v-card>
            <v-card-title>({{index+1}}) {{ exam.title }}</v-card-title>
            <v-card-text>
              <v-radio-group v-model="exam.answer" :options="exam.options">
                <v-radio v-for="(option, key) in exam.options" :key="key" :label="option" :value="key"></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>
