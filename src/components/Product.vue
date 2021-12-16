<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-sm-6 col-lg-3 themed-grid-col">
        <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
          <a href="/product" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
            <span style="padding-right:20px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" style="color:teal;" class="bi bi-shop" viewBox="0 0 16 16">
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
              </svg>
            </span>
            <span class="fs-5 fw-semibold">Product category</span>
          </a>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                남성
              </button>
              <div class="collapse" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(1)">남성상의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(2)">남성하의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="menu=3">남성외투</a></li>
                  <li><a href="#" class="link-dark rounded" @click="menu=4">남성속옷</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                여성
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded" @click="menu=5">여성상의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="menu=6">여성하의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="menu=7">여성외투</a></li>
                  <li><a href="#" class="link-dark rounded" @click="menu=8">여성속옷</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                악세서리
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">New</a></li>
                  <li><a href="#" class="link-dark rounded">Processed</a></li>
                  <li><a href="#" class="link-dark rounded">Shipped</a></li>
                  <li><a href="#" class="link-dark rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                기타기능
              </button>
              <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">찜목록</a></li>
                  <li><a href="#" class="link-dark rounded">주문내역</a></li>
                  <li><a href="#" class="link-dark rounded">Settings</a></li>
                  <li><a href="#" class="link-dark rounded">Sign out</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-6 col-lg-9 themed-grid-col mt-5" v-if="menu===1">
        <div class="row" >
          <div class="col-2">남성상의
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>보기</option>
              <option value="1">최신순</option>
              <option value="2">인기순</option>
              <option value="3">주문순</option>
            </select>
          </div>
          <div class="col-md-3">
          </div>
          <div class="col col-lg-7">
            <div class="input-group mb-3" style="width:300px; float:right;">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon21">
              <button style="background-color:pink; border:1px solid pink;" type="button" id="button-addon21">Button</button>
            </div>
          </div>
        </div>
        <div class="row mb-3 mt-5">
          <div class="col-4 themed-grid-col" v-for="a in aa" v-bind:key="a">
            <input type="checkbox" id="menuicon">
            <label for="menuicon">
              <div class="col-4 themed-grid-col">
                <div class="card" style="width: 18rem; border:1px solid black;">
                <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <p class="card-text text-center">상품명{{this.menu}}</p>
                  </div>
                </div><hr>
              </div>
            </label>
            <!-- 사이드바 -->
            <div class="sidebar">
              <div style="padding:50px;">
                <input type="checkbox" id="menuicon">
                <label for="menuicon" style="position: absolute; top: 0%; right: 0%;">
                  <img src="../assets/img/close.png" style="width:30px; background:pink;" alt="">
                </label>
              </div>
              <!-- 이미지 모달 -->
              <input type="checkbox" id="popup">
              <label for="popup">
                <img src="../assets/img/product33.gif" alt="">
                <div style="color:black; margin-left:50px;">
                  <p >[이미지를 클릭하시면 상품의 이미지를 볼 수 있습니다]</p>
                </div>
              </label>
              <div>
                <div>
                  <label for="popup"></label>
                  <div class="section">
                    <input type="radio" name="slide" id="slide01" checked>
                    <input type="radio" name="slide" id="slide02">
                    <input type="radio" name="slide" id="slide03">
                    <div class="slidewrap">
                      <ul class="slidelist">
                        <li>
                          <a href="#">
                            <label for="slide03" class="left"></label>
                            <img src="../assets/img/product11.jpg" alt="">
                            <label for="slide02" class="right"></label>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <label for="slide01" class="left"></label>
                            <img src="../assets/img/product22.jpg" alt="">
                            <label for="slide03" class="right"></label>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <label for="slide02" class="left"></label>
                            <img src="../assets/img/product33.gif" alt="">
                            <label for="slide01" class="right"></label>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                  <label for="popup">

                  </label>
              </div>

                  <h3 style="color:black; text-align:center;">모아로라 슬림티(2colors)</h3>
                  <h3 style="color:red; text-align:center;">38,000원</h3>
              <hr style="border:1px solid black; width:80%; margin-left:10%;">

              <div class="container">
                <label style="margin-left:80%; " for="delivery_fee">배송비</label><span id="delivery_fee">무료</span>

                <br>

                <div style="margin-top:30px;">
                  <input type="checkbox" id="select_option">
                  <label for="select_option">ddd</label>
                  <div class="select_option_list" >
                    <div class="select_option_list_content">
                      <img src="../assets/img/product11.jpg" alt=""> <span id="select_option_list_content_name">free - 블랙(black)</span> <span id="select_option_list_content_quantity">수량 : 43</span>
                    </div>

                    <hr style="margin:0; padding:0;">

                    <div class="select_option_list_content">
                      <img src="../assets/img/product22.jpg" alt=""> <span id="select_option_list_content_name">free - 아이보리(Ivory)</span> <span id="select_option_list_content_quantity">수량 : 43</span>
                    </div>

                    <hr style="margin:0; padding:0;">

                    <div class="select_option_list_content">
                      <img src="../assets/img/main3.jpg" alt=""> <span id="select_option_list_content_name">실링 퍼프 블라우스(3colors)</span> <span id="select_option_list_content_quantity">수량 : 43</span>
                    </div>
                  </div>

                </div>

              <hr style="border:1px solid black; width:90%; margin-left:5%;">
                <div class="container">
                  <label for="total_price" style="margin-left:40px; font-size:20px;"><strong>총구매가</strong></label>
                  <span id="total_price" style="margin-left:55%; font-size:20px; color:red;"><strong>40,000원</strong></span>
                  <span style="margin-left:15px;">
                    <button class="product_order_btn" style="margin-top:20px;">주문하기</button>
                    <button class="product_order_btn_shopping_basket" style="margin-top:20px; margin-left:15px;">장바구니</button>
                    <button class="product_order_btn_heart" style="margin-left:5px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                      찜
                    </button>
                  </span>
                </div>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-9 themed-grid-col mt-5" v-if="menu===2">
        <div class="row">
          <div class="col-2">남성하의
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>보기</option>
              <option value="1">최신순</option>
              <option value="2">인기순</option>
              <option value="3">주문순</option>
            </select>
          </div>
          <div class="col-md-3">
          </div>
          <div class="col col-lg-7">
            <div class="input-group mb-3" style="width:300px; float:right;">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" style="background-color:pink;" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
        <div class="row mb-3 mt-5" v-for="a in aa" v-bind:key="a">
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main2.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명{{this.menu}}</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main2.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명{{this.menu}}</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main2.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명{{this.menu}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-9 themed-grid-col mt-5" v-if="menu===3">
        <div class="row">
          <div class="col-2">남성외투
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>보기</option>
              <option value="1">최신순</option>
              <option value="2">인기순</option>
              <option value="3">주문순</option>
            </select>
          </div>
          <div class="col-md-3">
          </div>
          <div class="col col-lg-7">
            <div class="input-group mb-3" style="width:300px; float:right;">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" style="background-color:pink;" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
        <div class="row mb-3 mt-5">
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명432423</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6 col-lg-9 themed-grid-col mt-5" v-if="menu===4">
        <div class="row">
          <div class="col-2">남성속옷
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>보기</option>
              <option value="1">최신순</option>
              <option value="2">인기순</option>
              <option value="3">주문순</option>
            </select>
          </div>
          <div class="col-md-3">
          </div>
          <div class="col col-lg-7">
            <div class="input-group mb-3" style="width:300px; float:right;">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" style="background-color:pink;" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
        <div class="row mb-3 mt-5">
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">sdfsfdsf</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  </div>
</template>

<script>
  export default {
    data(){
      return{
        menu:1,
        aa:9,
        
      }
    },
    methods:{
      ChangMenu(menu){
        console.log("Hello", menu);
        if(menu === 1){
          this.menu = 1;
          console.log(menu);
        }
        else if(menu === 2){
          this.menu = 2;
          console.log(menu);
        }
      }
    },
    async created(){
      
    },
    async mounted() {
      // this.$router.go();
      const this1 = this;
      function p() {
        return new Promise(resolve => {
          console.log("Hello");
          var urlparam = location.search;
          var params = new URLSearchParams(urlparam);
          var menu = params.get('menu');
          if(menu == 1) {
            this1.menu = 1;
          }else if(menu == 2) {
            this1.menu = 2;
          }
          console.log(resolve);
        });
      }
      await p();
    }
  }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
.bd-placeholder-img-lg {
  font-size: 3.5rem;
}
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}

main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

.b-example-divider {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.bi {
  vertical-align: -.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle { outline: 0; }

.nav-flush .nav-link {
  border-radius: 0;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: .5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, .85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold { font-weight: 600; }
.lh-tight { line-height: 1.25; }

// 사이드바
input[id="menuicon"] {display:none;}
input[id="menuicon"] + label {display: block; position: relative; cursor: pointer;}


div[class="sidebar"] {width: 600px; height: 100%; background: rgb(255, 255, 255);position:fixed; overflow-y: auto; top: 0;left: -600px;z-index: 1;transition: all .35s; border-right: 2px solid rgb(255, 0, 0);}
input[id="menuicon"]:checked + label + div {left: 0;}

// 슬라이드 이미지
.section input[id*="slide"]{
  display: none;
}
.section .slidewrap{
  max-width: 1200px;
  margin:0 auto;
  overflow: hidden;
}
.section .slidelist{
  white-space: nowrap;
  font-size: 0;
}
.section .slidelist > li {
  display: inline-block;
  vertical-align: center;
  width: 100%;
  transition: all .5s;
}
.section .slidelist > li > a {
  display: block;
  position: relative;
}
.section .slidelist > li > a img{
  width:90%;

}
.section .slidelist label {
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px;
  cursor: pointer;
}
.section .slidelist .left{
  left: 30px;
  background: url('../assets/img/left_white.png') center center / 80% no-repeat;
}

.section .slidelist .right{
  right: 100px;
  background: url('../assets/img/right_white.png') center center / 80% no-repeat;
}

.section [id="slide01"]:checked ~ .slidewrap .slidelist > li {transform: translateX(0%);}
.section [id="slide02"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-100%);}
.section [id="slide03"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-200%);}

// 모달 이미지
input[id*="popup"]{
  display: none;
}
input[id="popup"] + label {
  display: inline-block;
  color: #fff;
}
input[id="popup"] + label > img{
  width: 100%;
  height: 50%;
  margin-top: -15%;
  margin-left: 10%;

}
input[id="popup"] + label + div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
input[id="popup"] + label + div > div {
  position: absolute;
  top: 22.5%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 700px;
  height: 400px;
  z-index: 2;
}
// // close 버튼
// input[id="popup"] + label + div > div > label {
//   position: block;
//   margin-left:100%;
//   right: 0%;
//   transform: translate(40%, -40%);
//   padding: 20px;
//   background: url('../assets/img/close.png') center center no-repeat;
//   z-index: 1;
// }
input[id="popup"] + label + div > label {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .9);
  z-index: 1;
}
input[id*="popup"] + label + div{
  opacity: 0;visibility: hidden;transition: all 1s;
}
input[id*="popup"]:checked + label + div{
  opacity: 1;visibility: visible;
}

// 상품정보페이지
//선택 = 옵션
input[id="select_option"] {display:none;}
input[id="select_option"] + label {display: block; position: relative; cursor: pointer; border: 2px solid #999; width: 80%; left: 10%; text-align: center; font-size: 18px; font-weight: 600;}
div[class="select_option_list"] {width: 440px; height: 100px; background: rgb(255, 255, 255); margin-left: 8.5%;  position: block; overflow-y: auto; top: 69%;left: 13%;z-index: 1;transition: all .35s; border: 2px solid #999;}
input[id="select_option"]:checked + label + div {display: none;}
div[class="select_option_list_content"]{
  width: 410px;
  height: 52px;
  margin: 5px;
}
div[class="select_option_list_content"] img{
  width: 50px;
  height: 50px; 
}
div[class="select_option_list_content"] span[id="select_option_list_content_name"]{
  position: block;
  margin-left: 10%;
  font-size: 16px;
  margin-top: 11px;
  font-weight: bold;
}
div[class="select_option_list_content"] span[id="select_option_list_content_quantity"]{
  position: block;
  margin-top: 11px;
  float: right;
  font-size: 16px;

}


// 주문버튼 ================================================
// 주문하기
.product_order_btn {
  font-size: 21px;
  padding: 15px 30px;
  border: 1px solid red;

  background-color:transparent ;
  color: red;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.product_order_btn:focus{
  outline: none;
}
.product_order_btn::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.product_order_btn:hover::before{
  transform: translateY(-100%);
}
.product_order_btn:hover{
  color: white;
}
//장바구니
.product_order_btn_shopping_basket {
  font-size: 21px;
  padding: 15px 30px;
  border: 1px solid rgb(0, 0, 0, .9);

  background-color:transparent ;
  color: rgb(0, 0, 0, .9);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.product_order_btn_shopping_basket:focus{
  outline: none;
}
.product_order_btn_shopping_basket::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, .9);
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.product_order_btn_shopping_basket:hover::before{
  transform: translateY(-100%);
}
.product_order_btn_shopping_basket:hover{
  color: white;
}
// 찜하기
.product_order_btn_heart {
  font-size: 21px;
  padding: 15px 30px;
  border: 1px solid red;

  background-color:transparent ;
  color: red;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.product_order_btn_heart:focus{
  outline: none;
}
.product_order_btn_heart::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.product_order_btn_heart:hover::before{
  transform: translateY(-100%);
}
.product_order_btn_heart:hover{
  color: white;
}

</style>