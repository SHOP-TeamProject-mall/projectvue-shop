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
                <div class="My_info" >
                    <img :src="`/HOST/member/MemberSelect_image?no=${memberlist.memberid}`" style="width:100%; height:400px;" />
                </div>
                <div>
                    <input type="file" style="position:relative; left:23%; top:10px;">
                </div>
                <div>
                    <button style="position:relative; left:23%; top:12px; color:blue; border:1px solid blue;">이미지 변경</button>
                </div>
                <div class="int-area">
                    <input type="text" name="id" id="id" autocomplete="off" readonly    v-model="memberlist.memberid" />
                    <label for="id">아이디</label>
                </div>
                <div class="int-area">
                    <input type="text" name="name" id="name"  autocomplete="off" required  :disabled="disabled"   v-model="memberlist.membername"/>
                    <label for="name">이름</label>
                </div>
                <div class="int-area">
                    <input type="text" name="phone" id="phone" autocomplete="off" required  :disabled="disabled"   v-model="memberlist.memberphone"/>
                    <label for="phone">연락처</label>
                </div>
                <div class="int-area">
                    <input type="text" name="adress" id="adress" style="font-size:16px;"  autocomplete="off" required  :disabled="disabled"   v-model="memberlist.memberaddress"/>
                    <label for="adress">주소</label>
                </div>
                <div class="int-area">
                    <input type="text" name="email" id="email" style="font-size:15px;"  autocomplete="off" required  :disabled="disabled"   v-model="memberlist.memberemail"/>
                    <label for="adress1">이메일</label>
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
                    <input type="password" name="id" id="id" autocomplete="off" required style="text-align:left; width:300px;" v-model="memberpw">
                    <label for="id">현재암호</label>
                </div>
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="name" id="name"  autocomplete="off" required style="text-align:left; width:300px;" v-model="membernewpw">
                    <label for="name">새암호</label>
                </div> 
                <div class="int-area" style="top:0; left:40%;">
                    <input type="password" name="phone" id="phone" autocomplete="off" required style="text-align:left; width:300px;" v-model="membernewpw1">
                    <label for="phone">새암호확인</label>
                </div>
                <div class="btn-area">
                    <button type="submit" style="top:50px;" @click ="handlepassword">변경하기</button>
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
                <table class="table table-striped" style="border: 1px solid rgb(139, 126, 126)">
                    <thead>
                        <tr>
                        <th>체크</th>
                        <th></th>
                        <th>상품명</th>
                        <th class="w130">가격</th>
                        <th class="w130">수량</th>
                        <th class="w130">배송</th>
                        <th class="w100">날짜</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td><input type="checkbox" v-model="chks" /></td>
                        <td><img :src="``" style="width:300px;height:150px" /></td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
        <!-- 찜목록 -->
        <div v-if="menu === 5">
            <section class="Login-form">
                <h1>찜목록</h1>
                <table class="table table-striped" style="border: 1px solid rgb(139, 126, 126)">
                    <thead>
                        <tr>
                        <th>체크</th>
                        <th></th>
                        <th>상품명</th>
                        <th class="w130">가격</th>
                        <th class="w130">수량</th>
                        <th class="w130">배송</th>
                        <th class="w100">날짜</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td><input type="checkbox" v-model="chks" /></td>
                        <td><img :src="``" style="width:300px;height:150px" /></td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        <td>{{}}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return{
                disabled      : true,
                menu          : 1,
                token         : sessionStorage.getItem("TOKEN"),
                memberid      : "",
                membername    : "",
                memberemail   : "",
                memberaddress : "",
                memberphone   : "",
                memberpw      : "",
                membernewpw   : "",
                membernewpw1  : "",

                memberlist    : {}
            }
        },

        created() {
            // 회원정보 가져오기
            this.handlememberlist();

            // 회원 이미지 가져오기
            // this.handlememberimage();

            // 카트리스트 가져오기
            this.cartList()
        },
        methods:{

            // 암호변경
            async handlepassword() { 
                if (this.memberpw.length === 0 ){
                    return alert("현재 비밀번호를 입력하세요.")
                }
                if (this.membernewpw.length === 0 ){
                    return alert("새 암호를 입력하세요.")
                }
                if (this.membernewpw1.length  === 0 ){
                    return alert("새 암호 확인을 입력하세요.")
                }
                if (this.membernewpw != this.membernewpw1){
                    return alert("암호와 새 암호 확인을 다시 해주세요.")
                }
                const headers = { "Content-Type": "application/json", "token" : this.token };
                const url = `/HOST/member/memberpwupdate.json`;
                const body = {
                    memberpw : this.memberpw,
                    // newpassword : this.newpassword,
                };
                const response = await axios.post(url, body, {headers:headers});
                    console.log('Mypage.vue => handlepassword');
                    console.log(response.data);
                    // this.$router.push({ path: "/home" });
            },


            // 회원정보 조회
            async handlememberlist() {  
                const url = '/HOST/member/memberlist.json';
                const headers = { "Content-Type": "application/json", token: this.token};
                const response = await axios.get(url, {headers:headers});
                
                console.log('Mypage.vue => handlemylist');
                console.log(response.data);
                if (response.data.status === 200){
                    this.memberlist = response.data.memberlist;
                }
            },

                // // 회원 이미지 조회
                // async handlememberimage() {  
                //     const url = `/HOST/member/MemberSelect_image?no=${this.memberid}`;
                //     const headers = { "Content-Type": "application/json", token: this.token};
                //     const response = await axios.get(url, {}, {headers:headers});
                //     console.log('Mypage.vue => handlememberimage');
                //     console.log(response);
                // },
            
            update_info(){ // 정보수정 클릭시 input text박스 변환 -> 완료버튼 나옴
                this.disabled = !this.disabled;
            },
            async update_info_clear(){ // 정보수정 후 완료버튼
                this.disabled = !this.disabled;
                const headers = { "Content-Type": "application/json", "token" : this.token };
                const url = `/HOST/member/memberupdate.json`;
                const body = {
                    // memberid      : this.memberid,
                    membername    : this.memberlist.membername,
                    memberphone   : this.memberlist.memberphone,
                    memberaddress : this.memberlist.memberphone,
                    memberemail   : this.memberlist.memberemail,
                };
                const response = await axios.put(url, body, {  headers:headers });
                console.log(response);
                this.changeMenu(1);
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
            },
            
            // 카트리스트
            async cartList(){
            const url = `/HOST/cart/memberselectcart.json`
            const headers = { "Content-Type": "application/json", "token" : this.token};
            const response = await axios.get(url, { headers : headers });
            console.log('cartList');
            console.log(response.data);
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