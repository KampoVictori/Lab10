<template>
    <form  v-on:submit.prevent = "addNewWorker" class="newForm" v-if="showNewWorkerForm">
    ПІБ <input type="text" v-model="newWorker.nameW"><br>
    Посада <input type="text" v-model="newWorker.post"> <br>
    З/п <input type="number" v-model.number="newWorker.salary"> <br>
    К-сть дітей <input type="number" v-model.number="newWorker.count_child" > <br>
    Стаж <input type="number" v-model.number="newWorker.experience" > <br>
    <button type="submit" >Додати </button>
    <button type="reset"> Очистити </button>
  </form>
</template>

<script>
export default {
    name:"NewWorkerForm", 
    props:{
        modelValue: Object
    },
    data(){
      return {
          showNewWorkerForm: false,
          newWorker: this.modelValue
      } 
    },
    methods:{
        addNewWorker(){
            this.$emit("update: modelValue", this.newWorker)
            this.hide()
        },
        show(){
            this.showNewWorkerForm=true
        },
        hide(){
            this.showNewWorkerForm=false
        }
    }
}
</script>

<style scoped>
.newForm{
  text-align: left;
  display: inline-block;
   font:14px Arial, Helvetica, sans-serif;
   margin-top: 20px;
}
</style>