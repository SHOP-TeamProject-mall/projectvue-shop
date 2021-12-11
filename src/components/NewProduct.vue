<template>
<div class="container">
  <div class="row" style="margin-top:50px;" v-for="a in aa" v-bind:key="a">
    <div class="col">
      1 of 3
    </div>

    <div class="col-8" >
        <div class="card bg-dark text-white" style="width:100%;" >
        <img src="../assets/img/main3.jpg" class="card-img" alt="...">
        <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>

    <hr>


    

    </div>
    <div class="col">
      3 of 3
    </div>
  </div>




</div>
</template>

<script>
    export default {
        data(){
            return{
                aa:3
            }
        }
    }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';
</style>