<template>
    <div class="container1">
        <div class="mypage_nav">
            <div class="mypage_nav_a">
            <a href="#" @click="changeMenu(1)">내정보</a>
            <a href="#" @click="changeMenu(2)">암호변경</a>
            <a href="#" @click="changeMenu(3)">주문조회</a>
            <a href="#" @click="changeMenu(4)">장바구니</a>
            <a href="#" @click="changeMenu(5)">찜목록</a>
            </div>
        </div>
        <!-- 내정보조회 및 수정 -->
        <div v-if="menu === 1">
            <section class="Login-form">
                <h1>내정보</h1>
                <div class="My_info">
                </div>
                <div>
                    <input type="file" style="position:relative; left:23%; top:10px;">
                </div>
                <div>
                    <button style="position:relative; left:23%; top:12px; color:blue; border:1px solid blue;">이미지 변경</button>
                </div>
                <div class="int-area">
                    <input type="text" name="id" id="id" autocomplete="off" required  :disabled="disabled" focus placeholder="a1">
                    <label for="id">아이디</label>
                </div>
                <div class="int-area">
                    <input type="text" name="name" id="name"  autocomplete="off" required  :disabled="disabled"  placeholder="홍길동">
                    <label for="name">이름</label>
                </div>
                <div class="int-area">
                    <input type="text" name="phone" id="phone" autocomplete="off" required  :disabled="disabled"  placeholder="010-2429-4026">
                    <label for="phone">연락처</label>
                </div>
                <div class="int-area">
                    <input type="text" name="adress" id="adress" style="font-size:16px;"  autocomplete="off" required  :disabled="disabled"  placeholder="부산광역시 해운대구 재송2동">
                    <label for="adress">주소</label>
                </div>
                <div class="int-area">
                    <input type="text" name="adress1" id="adress1" style="font-size:15px;"  autocomplete="off" required  :disabled="disabled"  placeholder="1987-46857번지 xxx아파트 550동 203호">
                    <label for="adress1">상세주소</label>
                </div>
                <div class="btn-area">
                    <button type="submit" @click="update_info">정보수정</button>
                </div>
                <div class="btn-area1" style="position:relative; left:23%; top:-90px;">
                    <button type="submit" v-if="disabled === false" @click="update_info_clear">수정완료</button>
                </div>
            </section>
        </div>
        <!-- 암호변경 -->
        <div v-if="menu === 2">
            <section class="Login-form">
                <h1>암호변경</h1>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="id" id="id" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="id">현재암호</label>
                </div>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="name" id="name"  autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="name">새암호</label>
                </div> 
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="phone" id="phone" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="phone">새암호확인</label>
                </div>
                <div class="btn-area">
                    <button type="submit" style="top:50px;">정보수정</button>
                </div>
            </section>
        </div>
        <!-- 주문조회 -->
        <div v-if="menu === 3">
            <section class="Login-form">
                <h1>주문조회</h1>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="id" id="id" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="id">현재암호</label>
                </div>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="name" id="name"  autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="name">새암호</label>
                </div> 
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="phone" id="phone" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="phone">새암호확인</label>
                </div>
                <div class="btn-area">
                    <button type="submit" style="top:50px;">정보수정</button>
                </div>
            </section>
        </div>
        <!-- 장바구니 -->
        <div v-if="menu === 4">
            <section class="Login-form">
                <h1>장바구니</h1>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="id" id="id" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="id">현재암호</label>
                </div>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="name" id="name"  autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="name">새암호</label>
                </div> 
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="phone" id="phone" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="phone">새암호확인</label>
                </div>
                <div class="btn-area">
                    <button type="submit" style="top:50px;">정보수정</button>
                </div>
            </section>
        </div>
        <!-- 찜목록 -->
        <div v-if="menu === 5">
            <section class="Login-form">
                <h1>찜목록</h1>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="id" id="id" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="id">현재암호</label>
                </div>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="name" id="name"  autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="name">새암호</label>
                </div> 
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="phone" id="phone" autocomplete="off" required style="text-align:left; width:300px;">
                    <label for="phone">새암호확인</label>
                </div>
                <div class="btn-area">
                    <button type="submit" style="top:50px;">정보수정</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                disabled:true,
                menu:1,
            }
        },
        methods:{
            update_info(){ // 정보수정 클릭시 input text박스 변환 -> 완료버튼 나옴
                this.disabled = !this.disabled;
            },
            update_info_clear(){ // 정보수정 후 완료버튼
                this.disabled = !this.disabled;
            },
            changeMenu(menu){
                if(menu === 1){
                    this.menu = 1;
                }
                else if(menu === 2){
                    this.menu = 2;
                }
                else if(menu === 3){
                    this.menu = 3;
                }
                else if(menu === 4){
                    this.menu = 4;
                }
                else if(menu === 5){
                    this.menu = 5;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';
.container1{
    height: 100vh;
    align-items: center;
    justify-content: center;
}
.container2{
    height: 100vh;
    align-items: center;
    justify-content: center;
}
.mypage_nav{
    width: 100%;
    height: 50px;
    background: pink;
}
.mypage_nav_a{
    position: block;
    text-align: center;
    padding-top: 10px;
}
a{
    margin-left: 10px;
    margin-right: 10px;
    text-decoration:none; 
    color:white; 
    font-weight: bold; 
    font-size:16px;
}
.My_info{
    width: 200px;
    height: 200px;
    position: relative;
    margin-top: -10px;
    left: 23%;
    background: url('../assets/img/user_image.png') center center /100% no-repeat;
    border-radius: 100px;
}
.container::before{
    content: "";
    position: absolute; z-index: 1;
    top: 0; right: 100%; bottom: 0; left: 0;
    background-color: rgba(0, 0, 0,.7);
}
.Login-form{
    position: relative;
    z-index: 1;
}
.Login-form h1{
    font-size: 32px; color: #999;
    text-align: center;
    margin-bottom: 60px;
    padding-top: 60px;
}
.int-area{
    width: 400px;
    left: 55%;
    top: -270px;
    position: relative;
    margin-top: 20px;
}
.int-update{
    width: 400px;
    left: 55%;
    top: -270px;
    position: relative;
    margin-top: 20px;
    border: 1px solid black;
}
.int-area:first-child{
    margin-top: 0;
}
.int-area input{
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    padding: 20px 10px 10px;
    background-color: transparent;
    text-align: center;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 20px; color: rgb(0, 0, 0);
    outline: none;
}
.int-area label{
    position: absolute; left: -130px; top: 25px;
    font-size: 20px; color: #999;
}

// 정보수정버튼
.btn-area{
    margin-top: 30px;
}
.btn-area button {
  font-family: 'Noto Sans KR', sans-serif;
  width: 20%; height: 60px;
  font-size: 21px;
  padding: 15px 30px;
  border: 3px solid pink;
  border-radius: 25px;
  top: -180px;
  left: 40%;
  background-color:transparent ;
  color: pink;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.btn-area button:focus{
  outline: none;
}
.btn-area button::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: pink;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.btn-area button:hover::before{
  transform: translateY(-100%);
}
.btn-area button:hover{
  color: white;
}

// 수정완료버튼
.btn-area1{
    margin-top: 30px;
}
.btn-area1 button {
  font-family: 'Noto Sans KR', sans-serif;
  width: 20%; height: 60px;
  font-size: 21px;
  padding: 15px 30px;
  border: 3px solid rgb(101, 101, 213);
  border-radius: 25px;
  top: -180px;
  left: 40%;
  background-color:transparent ;
  color: rgb(101, 101, 213);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.btn-area1 button:focus{
  outline: none;
}
.btn-area1 button::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(101, 101, 213);
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.btn-area1 button:hover::before{
  transform: translateY(-100%);
}
.btn-area1 button:hover{
  color: white;
}
</style>