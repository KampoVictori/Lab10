<template>
<div class="bookkeeping"> 
  <input type="button" value="Додати" v-on:click="showForm" >
  <input type="button" value="Редагувати" v-on:click="showEditForm" >
  <input type="button" value="Видалити" v-on:click="deleteWorker" >
  <input type="button" value="Знайти" v-on:click="showfindWorker" >
  <div class="wrap"> 
    <new-worker-form v-model="newWorker" @submit.prevent="addNewWorker" ref="newWorkerForm"></new-worker-form>
  </div>
  <ul>
    <bookkeeping-template v-for="(b, i) in worker" :key="i" class="bookkeeping" v-on:click="selectWorker(i)" :style="i==selected?'box-shadow: 0 0 20px rgba(0,0,0,0.5);':'' " v-bind:bk="b"></bookkeeping-template>
  </ul>
  <edit-worker-form v-model="editWorker" @submit.prevent="editSelectedWorker" ref="editWorkerForm"></edit-worker-form>
 <find-worker-form v-model="findWorker" @submit.prevent="FindworkerZ" ref="findWorkerForm"></find-worker-form>
</div>
</template>

<script>
import bookkeepingTemplate from './bookkeepingTemplate.vue';
import NewWorkerForm from './NewWorkerForm.vue';
import findWorkerForm from './findWorkerForm.vue';
import editWorkerForm from './editWorkerForm.vue';
import storage from '../storage';

export default{
    name:"worker", 
    components:{
      bookkeepingTemplate,
      NewWorkerForm,
      findWorkerForm,
      editWorkerForm,
      
    },
    data(){
      return {
      selected:-1,
      children_count:0,
        worker:storage.worker,
        newWorker: {
          nameW: "",
          post:"",
          salary: 0,
          count_child: 0,
          experience: 0       
        },
        editWorker:{
          nameW: "",
          post:"",
          salary: 0,
          count_child: 0,
          experience: 0       
        },
        findWorker: {
          post: "",
          count_child: 0
        }
      };
    },
    methods: {
    addNewWorker(){
      console.log(this.newWorker)
      let newWorkerCopy = Object.assign({}, this.newWorker)
      this.worker.push(newWorkerCopy)
      this.showNewWorkerForm = false
    },
    showForm(){
       this.$refs.newWorkerForm.show();
    },
    selectWorker(index){
      this.selected = index;
    }, 
    showEditForm(){
      if (this.selected>=0){
        this.editWorker = this.worker[this.selected];
        this.$refs.editWorkerForm.show(this.editWorker);
      }
      else alert("Виберіть працівника")
    },
    editSelectedWorker(){
      this.showEditWorkerForm = false;
    },
    showfindWorker(){
      this.$refs.findWorkerForm.show();
    },
    FindworkerZ(){
      var p=this.findWorker.post;
      var z=this.findWorker.count_child;
      this.worker=this.worker.filter(x=>x.post==p && x.count_child<=z);
      this.showFindWorkerForm=false;
    },
    deleteWorker(){
      if (this.selected>=0)
        this.worker.splice(this.selected, 1);
    }
  },
};
</script>
<style>
body{
  background:url(https://i1.wp.com/hipzmag.com/wp-content/uploads/2018/12/novogodnij-fon-2018.jpg);
  background-size: 100%;
  text-align: center;
}
ul{
  list-style: none;
}
.bookkeeping {
  padding: 50px;
  padding-top: 0px;
}
.newForm{
  text-align: left;
  display: inline-block;
   font:14px Arial, Helvetica, sans-serif;
   margin-top: 20px;
}
input{
  background: linear-gradient(0deg, rgba(255,255,255,0.9026961126247374) 0%, rgba(176,175,174,1) 100%);
}
input[type=button]{
text-align:center; 
 padding:11px 33px;   
 font:18px Arial, Helvetica, sans-serif; 
 font-weight:bold; 
 box-shadow:1px 1px 5px #000000, inset 0px 0px 1px #ffffff;  
 text-shadow: 2px 1px 0px #adabab; 
 }

 input[type=button]:hover{
 padding:15px 40px; 
 font:18px Arial, Helvetica, sans-serif; 
 font-weight:bold; 
 color:#000000; 
 box-shadow:3px 3px 6px #000000, inset 0px 0px 1px #ffffff;  
 text-shadow: 2px 1px 0px #adabab; 
}
li{
    background: linear-gradient(0deg, rgba(255,255,255,0.9026961126247374) 0%, rgba(176,175,174,1) 100%);
    margin: 20px;
    width: 130px;
    display: inline-block;
}
</style>
