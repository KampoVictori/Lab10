<template>
<div>
<input type="button" value="Редагувати" @click="edit" >
    <ul>
        <li>
        <h3>ПІБ: {{ worker.nameW }}</h3>
        <h3>Посада: {{ worker.post }}</h3>
        <h3>З/п: {{ worker.salary }}</h3>
        <h3>К-сть дітей: {{worker.count_child }}</h3>
        <h3>Стаж: {{ worker.experience }}</h3>
        </li>
    </ul>
</div>
</template>

<script>
import storage from '../storage'
export default {
    props: {
        id: String
    },
    data(){
        return{
            worker: {}
        }
    },
    mounted(){
        this.worker=storage.worker.find(worker => worker.id==Number(this.id))
    },
    method:{
        edit(){
            this.$router.push(`${this.worker.id}/edit`);
        }
    }
}
</script>

<style scoped>
li{
    width: 250px;
    height: 300px;
}
</style>