<template>
    <li>
      <h3 @click="showDetails">ПІБ: {{ bk.nameW }}</h3>
      <h3>Посада: {{ bk.post }}</h3>
      <h3>З/п: {{ bk.salary }}</h3>
      <h3>К-сть дітей: {{ bk.count_child }}</h3>
      <h3>Стаж: {{ bk.experience }}</h3>
    </li>
</template>

<script>
export default {
    name:"bookkeepingTemplate", 
    props:{
        bk: Object
    },
    data(){
      return {

      }
    },
     methods:{
        showDetails(){
          this.$router.push(`/worker/${this.bk.id}`);
        }
      }
}
</script>

<style scoped>

</style>