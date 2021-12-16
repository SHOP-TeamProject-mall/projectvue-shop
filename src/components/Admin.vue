<template>
<div class="container">
    <div class="row mb-3">
      <div class="col-sm-6 col-lg-3 themed-grid-col">
        <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
          <a href="/product" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
            <span style="padding-right:20px;">
                <img src="../assets/img/admin.png" width="50px" height="50px" alt="">
            </span>
            <span class="fs-5 fw-semibold">ADMIN</span>
          </a>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                상품관리
              </button>
              <div class="collapse" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded" @click="changeMenu(1)">상품등록</a></li>
                    <li><a href="#" class="link-dark rounded" @click="changeMenu(2)">상품조회 및 (옵션)관리</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                고객관리
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">고객조회 및 주문관리</a></li>
                    <li><a href="#" class="link-dark rounded">주문조회 및 고객관리</a></li>
                    <li><a href="#" class="link-dark rounded">QNA게시판 관리</a></li>
                    <li><a href="#" class="link-dark rounded">공지사항 관리</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                매출관리
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">매출현황</a></li>
                  <li><a href="#" class="link-dark rounded">매출 top10</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 메뉴 list 
           메뉴1 = 상품등록
           메뉴2 = 상품조회   
                          -->

      <!-- 메뉴1(상품등록) -->
      <div class="col-6 col-lg-9 themed-grid-col" v-if="menu === 1">
          <div class="container1">
              <h3 style="margin-top:130px; margin-left:30px; width:115px; border-bottom:1px solid black;">상품등록</h3>
            <table border="1px solid black;"  >
                <thead>
                    <tr>
                        <th style="width:50px;"><input type="checkbox"></th>
                        <th>상품명</th>
                        <th>상품분류</th>
                        <th>수량</th>
                        <th>브랜드</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-bottom:none;"></td>
                        <td><input type="text"></td>
                        <td>
                            <select name="aa" id="aa" style="width:100%; text-align:center; border:none;">
                                <option value="dd">남성상의</option>
                                <option value="dd">남성하의</option>
                                <option value="dd">남성외투</option>
                                <option value="dd">남성속옷</option>
                                <option value="dd">여성상의</option>
                                <option value="dd">여성하의</option>
                                <option value="dd">여성외투</option>
                                <option value="dd">여성속옷</option>         
                                <option value="dd">상품1</option>  
                                <option value="dd">상품2</option>  
                                <option value="dd">상품3</option>  
                            </select>
                            </td>
                        <td>
                            <select name="bb" id="bb" style="width:100%; text-align:center; border:none;">
                                <option value="" v-for="qnt in quantity" v-bind:key="qnt">{{qnt}}</option>
                            </select>
                            </td>
                        <td><input type="text"></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th style="width:50px; border-bottom:none; border-top:none; background:none;"></th>
                        <th>옷감</th>
                        <th>가격</th>
                        <th>배송비</th>
                        <th>대표이미지</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-top:none;"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="file"></td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>

      <div class="col-6 col-lg-9 themed-grid-col" v-if="menu === 2">
          <div class="container1">
              <h3 style="margin-top:130px; margin-left:30px; width:115px; border-bottom:1px solid black;">상품관리</h3>
            <table border="1px solid black;"  >
                <thead>
                    <tr>
                        <th style="width:50px;"><input type="checkbox"></th>
                        <th>상품명</th>
                        <th>상품분류</th>
                        <th>수량</th>
                        <th>브랜드</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-bottom:none;"></td>
                        <td><input type="text"></td>
                        <td>
                            <select name="aa" id="aa" style="width:100%; text-align:center; border:none;">
                                <option value="dd">남성상의</option>
                                <option value="dd">남성하의</option>
                                <option value="dd">남성외투</option>
                                <option value="dd">남성속옷</option>
                                <option value="dd">여성상의</option>
                                <option value="dd">여성하의</option>
                                <option value="dd">여성외투</option>
                                <option value="dd">여성속옷</option>         
                                <option value="dd">상품1</option>  
                                <option value="dd">상품2</option>  
                                <option value="dd">상품3</option>  
                            </select>
                            </td>
                        <td>
                            <select name="bb" id="bb" style="width:100%; text-align:center; border:none;">
                                <option value="" v-for="qnt in quantity" v-bind:key="qnt">{{qnt}}</option>
                            </select>
                            </td>
                        <td><input type="text"></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th style="width:50px; border-bottom:none; border-top:none; background:none;"></th>
                        <th>옷감</th>
                        <th>가격</th>
                        <th>배송비</th>
                        <th>대표이미지</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-top:none;"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                        <td>
                          <input type="submit" style="width:50%; background:gold;" value="상품정보수정">
                          <input type="button" style="width:50%; background:pink;" @click="optionmodal = true" value="상품옵션추가">
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
    </div>

<!-- 브랜드 / 상품명 / 제품명 / 제조사 / 가격 / 배송비 / 착불 , 선불 / (대표이미지) / 개별이미지 -->

<!-- 상품(옵션) MODAL -->
</div>
    <div class="option_modal" v-if="optionmodal === true">
      <div id="optionmodal_close" @click="optionmodal = false"></div>
      <div id="optionmodal_close_bg"></div>
      <!-- 옵션추가 -->
      <div class="option_modal_header">

      </div>
      <!-- 옵션조회 -->
      <div class="option_modal_body">
        <section>
        <table style="margin-top:0;">
          <thead>
            <tr>
              <th>옵션번호</th>
              <th>옵션명</th>
              <th>사이즈</th>
              <th>컬러</th>
              <th>추가금액</th>
              <th>버튼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style="height:50px;">이미지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table style="margin-top:0;">
          <thead>
            <tr>
              <th>옵션번호</th>
              <th>옵션명</th>
              <th>사이즈</th>
              <th>컬러</th>
              <th>추가금액</th>
              <th>버튼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style="height:50px;">이미지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table style="margin-top:0;">
          <thead>
            <tr>
              <th>옵션번호</th>
              <th>옵션명</th>
              <th>사이즈</th>
              <th>컬러</th>
              <th>추가금액</th>
              <th>버튼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style="height:50px;">이미지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
          <table style="margin-top:0;">
          <thead>
            <tr>
              <th>옵션번호</th>
              <th>옵션명</th>
              <th>사이즈</th>
              <th>컬러</th>
              <th>추가금액</th>
              <th>버튼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style="height:50px;">이미지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
          <table style="margin-top:0;">
          <thead>
            <tr>
              <th>옵션번호</th>
              <th>옵션명</th>
              <th>사이즈</th>
              <th>컬러</th>
              <th>추가금액</th>
              <th>버튼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
              <td><input type="text"></td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style="height:50px;">이미지</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        </section>
      </div>
      <!-- 모달 close 버튼 -->
      <div class="option_modal_footer">
          <button @click="optionmodal = false">닫기</button>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                quantity:1000,
                menu:1,
                optionmodal:false
            }
        },
        methods:{
            changeMenu(menu){
                if(menu === 1){
                    this.menu = 1;
                }
                else if(menu === 2){
                    this.menu = 2;
                }
            }
        },
        created(){
            this.changeMenu();
        }
    }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Noto+Sans+KR:wght@900&family=Roboto+Mono:ital,wght@0,300;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Noto+Sans+KR:wght@300;900&family=Roboto+Mono:ital,wght@0,300;1,700&display=swap');
//옵선추가 모달========================================================================================================================
div[class="option_modal"]{
  position: fixed;
  top: 50%;
  left: 50%;
  border: 1px solid red;
  border-radius: 25px;
  background: white;
  transform: translate(-50%,-50%);
  width: 1000px;
  height: 700px;
  z-index: 2;
}
// 모달 닫기
#optionmodal_close{
  position: absolute;
  top: 0%;
  left: 96.5%;
  background: url('../assets/img/close.png') center center / 100% no-repeat;
  width: 30px;
  height: 30px;
  z-index: 1;
}
#optionmodal_close_bg{
  position: absolute;
  top: 0%;
  left: 0%;
  background:#999;
  border-bottom: 1px solid black;
  width: 1000px;
  height: 30px;
  border-start-start-radius: 25px;
  border-start-end-radius: 25px;
}
div[class="option_modal_header"]{
  position: absolute;
  top: 30px;
  left: 0%;
  width: 1000px;
  height: 150px;
  border: 1px solid red;
}
div[class="option_modal_body"]{
  position: absolute;
  top: 180px;
  left: 0%;
  width: 1000px;
  height: 450px;
  border: 1px solid red;
  overflow-y: auto;
}
div[class="option_modal_footer"]{
  position: absolute;
  top: 630px;
  left: 0%;
  border-end-start-radius: 25px;
  border-end-end-radius: 25px;
  width: 1000px;
  height: 70px;
  border: 1px solid red;
}
div[class="option_modal_footer"] button{
  position: absolute;
  top: 25%;
  left: 50%;
  color: white;
  background: black;
  font-size: 18px;
  border-radius: 6px;
  font-weight: bold;
}



//상품등록 테이블===========================================================================================================================
table{
    border: 1px solid black;
    margin-top: 50px;
    width: 100%;
}
th{
    width: 200px;
    background: rgb(167, 165, 165);
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    border: 1px solid black;
    // display: list-item;
}
td{
    width: 200px;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    border: 1px solid black;
    // display: list-item;
}
td > input {
    width: 100%;
    padding: 0; margin: 0;
    border: none;
}


.container1{
    height: 70vh;
    align-items: center;
    justify-content: center;
}

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