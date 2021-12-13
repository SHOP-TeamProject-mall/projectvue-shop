<template>
<div>
    <!-- <input type="checkbox" id="menuicon">
    <label for="menuicon">
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">sdfsfdsf</p>
              </div>
            </div>
          </div>
        </label>
        <div class="sidebar">
            ddfsf
        </div> -->

        <ul class="child-ul">
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
        </ul>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';

input[id="menuicon"] {display:none;}
input[id="menuicon"] + label {display: block; margin: 30px; width: 30px; height: 50px; position: relative; cursor: pointer;}


div[class="sidebar"] {width: 300px; height: 100%; background: #222;position: fixed;top: 0;left: -300px;z-index: 1;transition: all .35s;}
input[id="menuicon"]:checked + label + div {left: 0;}

*{margin: 0; padding: 0;}
.child-ul {font-size: 0; width: 850px;border: 1px solid #ccc;}
.child-ul:after {content:'';clear: both;display: block;float: none;}
.child-ul li {float:right;display: block;width: 33.3%;font-size: 12px;}
.child-ul li:nth-child(2) {width: 66.6%;}
.child-ul li:nth-child(2) a {height: 310px;}
.child-ul li:nth-child(3) a {height: 310px; margin-top: -155px;}
.child-ul li a {display: block; width: auto; margin: 5px; background: #ccc; height: 150px; transition: 1s;}
.child-ul li:nth-child(1) a {background: url('../assets/img/main1.jpg') center center / 100% no-repeat;}
.child-ul li:nth-child(2) a {background: url('../assets/img/main2.jpg') center center / 100% no-repeat;}
.child-ul li:nth-child(3) a {background: url('../assets/img/main3.jpg') center center / 200% no-repeat;}
.child-ul li:nth-child(4) a {background: url('../assets/img/main1.jpg') center center / 100% no-repeat;}
.child-ul li:nth-child(5) a {background: url('../assets/img/main2.jpg') center center / 100% no-repeat;}
.child-ul li a:hover {background-size: 110%;}
.child-ul li:nth-child(3) a:hover {background-size: 210%;}
</style>