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
          <a href="#" style="text-decoration:none; color:black; font-weight: bold; font-size:15px; margin-right:5px;" v-if="!logged" @click="changeMenu(7)"><span><strong>로그인</strong></span></a> | 
          <a href="#" style="text-decoration:none; color:black; font-weight: bold; font-size:15px; margin-left:5px;" v-if="!logged" @click="changeMenu(6)"><span><strong>회원가입</strong></span></a>
        </div>
        
        <!-- 회원 아이콘 -->
        <div class="flex-shrink-0 dropdown" v-if="logged">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="@/assets/img/product11.jpg" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#" @click="changeMenu(8)">내정보</a></li>
            <li><a class="dropdown-item" href="#" @click="changeMenu(9)">주문내역</a></li>
            <li><a class="dropdown-item" href="#">장바구니</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/logout">로그아웃</a></li>
          </ul>
        </div>
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
    <div class="scroll">
      <a href="#"><img src="@/assets/img/up.png" style="width:100px;" alt="" @click="scrollup"></a>
    </div>
      <router-view :key="$route.fullPath"
        @changeLogged="changeLogged" >
      </router-view>
</div>

<footer class="footer mt-auto py-3 bg-dark" style="text-align: center; color:white;">
  <div class="container">
    <p>상호:(주)SHOP | 대표자명 : 홍길동</p>
    <p>사업자등록번호 : 000-00-000000 | 유통판매업신고번호 : 제0000-서울강남-0000호</p>
    <p>연락처 : 02-000-0000 | 팩스 : 000-0000-0000 | 이메일 : ajasdu@naver.com</p>
    <p>주소 : 서울특별시 강남구 00로 194 00빌딩 3F</p>

    <span>이용약간</span><span>개인정보처리방침</span>
    <p>CopyRight© SHOP</p>
  </div>
</footer>
</template>

<script>
  // import axios from "axios";
  import { useStore } from "vuex";

	export default {
    data(){
      return{
        menu:1,
        menu_product:1,
        store : useStore(),
      }
    },

    created(){
			this.changeLogged();
		},

    mounted(){

    },

    methods:{
      scrollup(){
        window.scrollTo({top:0, left:0, behavior:'auto'});
      },
      getMenu(){
        //바꾸기 
        // this.store.commit("setMenu",  111);

        //가져오기
        // const a = this.store.getters.getMenu;
        // console.log(a);
        // alert(a);
      },

      changeMenu(menu){
        if(menu === 1){
					this.$router.push({ path: "/home" });
          console.log(menu);
        }
        else if(menu === 2){
					// this.$router.push({ path: "/product"});
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
        else if(menu === 8){
          this.$router.push({ path: "/mypage "});
        }
        else if(menu === 9){
          const idx = 3;
          console.log(idx,"idx");
          this.$router.push({path:'/mypage', query: {menu: idx}});
        }
        this.active = '';


      },

      changeLogged(){
				console.log("App.vue => changeLogged")
				this.token = sessionStorage.getItem("TOKEN");
          if ( this.token != null ) {
            this.logged = true;
          } else {
            this.logged = false;
          }
			},

      changeMenu_product(idx){
        if(idx === 1){
          // this.$router.push({path:'/product', query: {menu: 2}});
          this.store.commit("setMenu",  idx);
          // console.log(a);
          console.log(idx);
          // this.$refs['side'][idx].click();
        }
        else if(idx === 2){
          console.log(idx);
         
          
          this.store.commit("setMenu",  idx);
        }

        //바꾸기
         this.$router.push({path:'/product', query: {menu: idx}});
        
      }
    },
}
</script>


<style lang="scss">
@import 'bootstrap/scss/bootstrap';
ul{
   list-style:none;
   padding-left:0px;
   }
.scroll{
  position: fixed;
  left: 90%;
  top: 80%;
}
</style>
