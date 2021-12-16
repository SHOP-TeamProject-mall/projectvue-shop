<template>
<div class="container" >
  <header class="py-3 mb-3 border-bottom">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <div class="dropdown">
        <a href="#" @click="changeMenu(1)" style="text-decoration: none; color:black;">
          <img src="@/assets/img/logo11.png" style="width:150px;" alt=""><span class="fs-4 fw-bold" >SHOP</span>
        </a>
      </div>

      <div class="d-flex align-items-center">
        <form class="w-100 me-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div class="flex-shrink-0" >
          <a href="#" style="text-decoration:none; color:black; font-weight: bold; font-size:15px; margin-right:5px;" @click="changeMenu(7)"><span><strong>로그인</strong></span></a> | 
          <a href="#" style="text-decoration:none; color:black; font-weight: bold; font-size:15px; margin-left:5px;" @click="changeMenu(6)"><span><strong>회원가입</strong></span></a>
        </div>
        <!-- // 회원 아이콘 -->
        <!-- <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#">내정보</a></li>
            <li><a class="dropdown-item" href="#">주문내역</a></li>
            <li><a class="dropdown-item" href="#">장바구니</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">로그아웃</a></li>
          </ul>
        </div> -->
      </div>
    </div>
  </header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" style="border-bottom:2px solid red;" aria-label="Twelfth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="searchproduct" data-bs-toggle="dropdown" aria-expanded="false">상품검색</a>
              <ul class="dropdown-menu" aria-labelledby="searchproduct">
                <li style="text-align:center;">
                    <h5 style="background-color:pink;">남성복</h5>
                    <hr class="dropdown-divider">
                  <ul style="text-align:left;">
                    <li><a class="dropdown-item" href="#" @click="changeMenu_product(1)"><strong>남성상의</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu_product(2)"><strong>남성하의</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>남성외투</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>남성속옷</strong></a></li>
                  </ul>
                    <hr class="dropdown-divider">
                </li>
                <li style="text-align:center;">
                    <h5 style="background-color:pink;">여성복</h5>
                    <hr class="dropdown-divider">
                  <ul style="text-align:left;">
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>여성상의</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>여성하의</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>여성외투</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>여성속옷</strong></a></li>
                  </ul>
                    <hr class="dropdown-divider">
                </li>
                <li style="text-align:center;">
                    <h5 style="background-color:pink;">패션아이템</h5>
                    <hr class="dropdown-divider">
                  <ul style="text-align:left;">
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>상품1</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>상품2</strong></a></li>
                    <li><a class="dropdown-item" href="#" @click="changeMenu(2)"><strong>상품3</strong></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item" style="padding-left:15px;">
              <a class="nav-link" href="#" @click="changeMenu(3)"><strong>신상품</strong></a>
            </li>
            <li class="nav-item" style="padding-left:35px; padding-right:35px;">
              <a class="nav-link" href="#" @click="changeMenu(1)"><strong>HOME</strong></a>
            </li>
            <li class="nav-item" style="padding-right:15px;">
              <a class="nav-link" href="#" @click="changeMenu(4)"><strong>상품리뷰</strong></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="changeMenu(5)"><strong>고객센터</strong></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <router-view :key="$route.fullPath"></router-view>
</div>

<footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted">Place sticky footer content here.</span>
  </div>
</footer>
</template>

<script>
	export default {
    data(){
      return{
        menu:1,
        menu_product:1
      }
    },
    methods:{
      changeMenu(menu){
        if(menu === 1){
					this.$router.push({ path: "/home" });
          console.log(menu);
        }
        else if(menu === 2){
					this.$router.push({ path: "/product"});
          console.log(menu);
        }
        else if(menu === 3){
          this.$router.push({ path: "/newproduct"});
        }
        else if(menu === 4){
          this.$router.push({ path: "/productreview "});
        }
        else if(menu === 5){
          this.$router.push({ path: "/servicecenter "});
        }
        else if(menu === 6){
          this.$router.push({ path: "/join "});
        }
        else if(menu === 7){
          this.$router.push({ path: "/login "});
        }
        this.active = '';
      },
      changeMenu_product(idx){
        if(idx === 1){
          console.log(idx);
          this.$router.push({path:'/product', query: {menu: 1}});
        }
        else if(idx === 2){
          console.log(idx);
          this.$router.push({path:'/product', query: {menu: 2}});
        }
      }
    },
    created(){

    }
}
</script>


<style lang="scss">
@import 'bootstrap/scss/bootstrap';
ul{
   list-style:none;
   padding-left:0px;
   }
</style>
