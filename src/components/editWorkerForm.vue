<template>
    <form  v-on:submit.prevent = "ueditSelectedWorker" class="newForm" v-if="showEditWorkerForm">
    ПІБ <input type="text" v-model.lazy="editWorker.nameW"><br>
    Посада <input type="text" v-model.lazy="editWorker.post"> <br>
    З/п <input type="number" v-model.number.lazy="editWorker.salary"> <br>
    К-сть дітей <input type="number" v-model.number.lazy="editWorker.count_child" > <br>
    Стаж <input type="number" v-model.number.lazy="editWorker.experience" > <br>
    <button type="submit" >Редагувати </button>
    <button type="reset"> Очистити </button>
  </form>
</template>

<script>
export default {
    name:"editWorkerForm", 
    props:{
        modelValue: Object
    },
    data(){
      return {
          showEditWorkerForm: false,
          editWorker: this.modelValue
      } 
    },
    methods:{
        ueditSelectedWorker(){
            this.$emit("update: modelValue", this.editWorker)
            this.hide()
        },
        show(editWorker){
            this.editWorker=editWorker
            this.showEditWorkerForm=true
        },
        hide(){
            this.showEditWorkerForm=false
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