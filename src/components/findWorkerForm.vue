<template>
      <form  v-on:submit.prevent = "FindworkerZ" class="newForm" v-if="showFindWorkerForm">
    Посада <input type="text" v-model="findWorker.post"> <br>
    К-сть дітей <input type="number" v-model.number="findWorker.count_child" > <br>
    <button type="submit" >Знайти </button>
    <button type="reset"> Очистити </button>
  </form>
</template>

<script>
export default {
    name:"findWorkerForm", 
    props:{
        modelValue: Object
    },
    data(){
      return {
          showFindWorkerForm: false,
          findWorker: this.modelValue
      } 
    },
    methods:{
        FindworkerZ(){
            this.$emit("update: modelValue", this.findWorker)
            this.hide()
        },
        show(){
            this.showFindWorkerForm=true
        },
        hide(){
            this.showFindWorkerForm=false
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