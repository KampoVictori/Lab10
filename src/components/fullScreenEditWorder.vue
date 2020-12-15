<template>
   <form  v-on:submit.prevent = "save">
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
import storage from '../storage'
export default {
    props: {
        id: String
    },
    data(){
        return{
            editWorker: {}
        }
    },
    mounted(){
        this.editWorker=storage.worker.find(worker => worker.id==Number(this.id))
    },
    method:{
        save(){
            this.$router.push(`/worker/${this.editWorker.id}`);
        }
    }
}
</script>