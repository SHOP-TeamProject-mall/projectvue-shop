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
        <div class="row">
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
                <p class="card-text text-center">상품명{{this.menu}}</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명{{this.menu}}</p>
              </div>
            </div>
          </div>
          <div class="col-4 themed-grid-col">
            <div class="card" style="width: 18rem; border:1px solid black;">
              <img src="../assets/img/main3.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text text-center">상품명{{this.menu}}</p>
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
        <div class="row mb-3 mt-5">
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
        menu:1
      }
    },
    methods:{
      ChangMenu(menu){
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
    created(){
      function p() {
        return new Promise(resolve => {
          setTimeout(() => {
            var urlparam = location.search;
            var params = new URLSearchParams(urlparam);
            var menu = params.get('menu');
            resolve(menu);
          }, 1000);
        });
      }

      async function asyncFunc() {
        const temp = await p();
        // console.log(temp);
        this.ChangMenu(temp);
      }

      asyncFunc();
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
</style>