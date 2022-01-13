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
                    <input type="file" id="updatefile" ref="updatefile" @change="handleimgupdateFileUpload($event)" style="position:relative; left:23%; top:10px;">
                </div>
                <div>
                    <button style="position:relative; left:23%; top:12px; color:blue; border:1px solid blue;" @click="handleimagechange">이미지 변경</button>
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
        <div class="container_order" v-if="menu === 3">
            <div class="order_title">
                <img src="@/assets/img/servicecenter.gif" style="width:210px; height:200px; padding:0px; margin:0px;" alt="">
            </div>
            <div class="ordercontent" v-if="order_content_btn === true">
                <span class="orderlist_img">
                    <img :src="`/HOST/productoption/select_productoption_image.json?productoptionno=${this.order_content.order_productoptionno}`" style="width:100%; height:100%; border-radius:25px; border:3px solid pink; display: inline;" alt="">
                </span>
                <span class="orderlist_product_name">
                    <p>{{this.order_content.productname}}</p><label for="">상품명</label>
                </span>
                <span class="orderlist_product_ordernumber">
                    <p>{{this.order_content.ordernumber}}</p>
                </span>
                <span class="orderlist_product_productoption">
                    <p>{{this.order_content.order_productoptioncolor}} - {{this.order_content.order_productoptionsize}}</p><label for="">옵션</label>
                </span>
                <span class="orderlist_product_price">
                    <p>{{this.order_content.order_amount_paid}}원</p>
                </span>
                <span class="orderlist_product_cnt">
                    <p>{{this.order_content.order_productoptioncnt}}개</p>
                </span>
                <span class="orderlist_product_state">
                    <p>{{this.order_content.delivery_status}}</p>
                </span> 
                <span class="orderlist_product_user">
                    <p>{{this.order_content.reciever_name}}</p><label for="">수취인</label>
                </span>
                <span class="orderlist_product_userphone">
                    <p>{{this.order_content.reciever_phone}}</p><label for="">연락처</label>
                </span>
                <span class="orderlist_product_useraddress">
                    <p>{{this.order_content.reciever_address}}</p><label for="">주소</label>
                </span>
            </div>
            <div class="ordercontent1">
                <span class="orderlist_img">
                    <img src="../assets/img/main3.jpg" style="width:100%; height:100%; border-radius:25px; border:3px solid pink; display: inline;" alt="">
                </span>
                <span class="orderlist_product_name">
                    <p></p><label for="">상품명</label>
                </span>
                <span class="orderlist_product_ordernumber">
                    <p></p>
                </span>
                <span class="orderlist_product_productoption">
                    <p></p><label for="">옵션</label>
                </span>
                <span class="orderlist_product_price">
                    <p></p>
                </span>
                <span class="orderlist_product_cnt">
                    <p></p>
                </span>
                <span class="orderlist_product_state">
                    <p></p>
                </span> 
                <span class="orderlist_product_user">
                    <p></p><label for="">수취인</label>
                </span>
                <span class="orderlist_product_userphone">
                    <p></p><label for="">연락처</label>
                </span>
                <span class="orderlist_product_useraddress">
                    <p></p><label for="">주소</label>
                </span>
            </div>
            <div class="ordertable">
                <table style="border:1px solid rgb(223, 217, 217); width:1200px; text-align:center;">
                    <thead style="border:1px solid rgb(223, 217, 217); height:40px; font-size:12px;  background:rgb(235, 235, 235);">
                        <th style="width:50px;">번호</th>
                        <th style="width:100px;">주문번호</th>
                        <th style="width:300px;">상품명</th>
                        <th style="width:160px;">옵션</th>
                        <th style="width:50px;">수량</th>
                        <th>판매가</th>
                        <th>배송상태</th>
                        <th>리뷰작성</th>
                    </thead>
                    <tbody style="border:1px solid rgb(223, 217, 217); height:50px;" v-for="(ordercheck,idx) in orderlist" v-bind:key="ordercheck">
                        <td>{{idx+1}}</td>
                        <td>{{ordercheck.ordernumber}}</td>
                        <td><a href="#" style="color:black;" @click="ordercontent(ordercheck.ordernumber)">{{ordercheck.productname}}</a></td>
                        <td>{{ordercheck.order_productoptioncolor}} - {{ordercheck.order_productoptionsize}}</td>
                        <td>{{ordercheck.order_productoptioncnt}}</td>
                        <td>{{ordercheck.order_amount_paid}}</td>
                        <td>{{ordercheck.delivery_status}}</td>
                        <td><button type="button" class="btn btn-outline-warning" @click="Write_a_review()">작성</button></td>
                    </tbody>
                </table>
            </div>
                <ol class="ppagenation">
                    <li class="ppagenation_First"><a href="#" @click="Order_Pagenation(idx = 1)"></a></li>
                    <li class="ppagenation_Prev"><a href="#" ></a></li>
                    <li v-for="(productpagetion,idx) in ppages" v-bind:key="productpagetion"><a href="#" @click="Order_Pagenation(idx+1)" >{{idx+1}}</a></li>
                    <li class="ppagenation_Next"><a href="#" ></a></li>
                    <li class="ppagenation_Last"><a href="#" @click="Order_Pagenation(idx = ppages)"></a></li>
                </ol>
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
        <!-- 리뷰작성 모달 -->
    <div class="Write_a_review" v-if="reviewkey === true">
        <div class="Write_a_review_header">

        </div>
        <div class="Write_a_review_body">

        </div>
        <div class="Write_a_review_footer">

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

                memberlist    : {},
                page          : 1,
                // 주문조회
                orderlist     : [],
                idx           : [1,2,3,4,5],
                order_content_btn : false,
                order_productoption_no : 0,
                ppages        : "",
                order_content : "",
                // 리뷰작성
                reviewkey     : false

            }
        },
        mounted() {
            console.log(this.$route.query.menu , "query");
            const menu1 = Number(this.$route.query.menu);
            this.changeMenu(menu1);
        },
        created() {
            // 회원정보 가져오기
            this.handlememberlist();

            // 카트리스트 가져오기
            this.cartList()
        },
        methods : {
            Write_a_review(){
                this.reviewkey = !this.reviewkey;
            },
            // 주문조회 1개만 (주문번호가 일치하는 경우)
            async ordercontent(ordernumber){
                console.log(ordernumber);
                this.order_content_btn = !this.order_content_btn;

                const url = `HOST/order/select_myorderlist_one.json?ordernumber=${ordernumber}`;
                const headers = { "Content-Type": "application/json" , "token" : this.token };
                const response = await axios.get(url, { headers:headers });
                console.log(response);
                if(response.status === 200){
                    this.order_content = response.data.orderlist;
                    console.log(this.order_content);
                    console.log(this.order_content.productOption.product); // 상품정보
                }
            },
            // 주문조회
            async SelectMyOrder(){

                const url = `/HOST/order/select_myorderlist.json?page=${this.page}`;
                const headers = { "Content-Type": "application/json" , "token" : this.token };
                const response = await axios.get(url, { headers:headers });
                console.log(response);
                if(response.status === 200){
                    this.orderlist = response.data.list;
                    console.log(this.orderlist, "orderlist");

                    this.ppages = response.data.ppage;
                    console.log(this.ppages);
                }
            },
            async Order_Pagenation(idx){
                console.log(idx);

                const url = `/HOST/order/select_myorderlist.json?page=${idx}`;
                const headers = { "Content-Type": "application/json" , "token" : this.token };
                const response = await axios.get(url, { headers:headers });
                console.log(response);
                if(response.status === 200){
                    this.orderlist = response.data.list;
                    console.log(this.orderlist, "orderlist");

                    this.ppages = response.data.ppage;
                    console.log(this.ppages);
                }
            },
            // 변경 할 이미지 첨부 여부 확인
            handleimgupdateFileUpload(e) {
                this.updatefile = e.target.files[0];
                console.log(this.updatefile);
            },

            // 이미지 변경
            async handleimagechange(){
                if (this.updatefile === undefined){
                    return alert("변경 할 파일 이미지를 첨부 하세요.")
                }
                
                const url = `/HOST/member/memberiamgeupdate.json?memberid=${this.memberlist.memberid}`
                const headers = { "Content-Type": "multipart/form-data" };
                const formData = new FormData();
                formData.append("updatefile", this.updatefile);
                const response = await axios.post( url, formData, { headers :  headers })
                console.log(response.data);
                if (response.data.sucess == 200){
                    alert("이미지 변경이 정상적으로 완료되었습니다.")
                    this.changeMenu(1);
                }
            },

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
                    this.SelectMyOrder();
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
    height: 110vh;
    align-items: center;
    justify-content: center;
}
.container2{
    height: 100vh;
    align-items: center;
    justify-content: center;
}

// 주문내역 ======================================================================================================
.container_order{
    position: absolute;
    width: 1296px;
    top: 240px;
    justify-content: center;
    align-items: center;
    height: 82vh;
}
.ordertable{
    position: relative;
    width: 1000px;
    left: 50px;
    top: 10px;
}
.ordercontent{
    position: absolute;
    width: 980px;
    height: 200px;
    left: 280px;
    top: 0px;
    border: 1px solid rgb(223, 217, 217);
}
.ordercontent label{
    position: absolute; left: 5px; top: -25px;
    font-size: 14px; color: rgb(36, 35, 35);
    background: pink;
    font-weight: bold;
}

.order_title{
    position: relative;
    width: 210px;
    height: 210px;
    left: 40px;
}
.orderlist_img{
    position: absolute;
    width: 200px;
    height: 180px;
    top: 10px;
    left: 15px;
    border-radius: 10px;
}
.orderlist_product_name{
    position: absolute;
    width: 240px;
    height: 30px;
    left: 250px;
    top: 30px;
    font-weight: bold;
}
.orderlist_product_ordernumber{
    position: absolute;
    width: 120px;
    height: 30px;
    left: 830px;
    top: 5px;
    text-align: right;
    font-weight: bold;
}
.orderlist_product_productoption{
    position: absolute;
    width: 200px;
    height: 30px;
    left: 250px;
    top: 90px;
    font-weight: bold;
}
.orderlist_product_price{
    position: absolute;
    width: 130px;
    height: 30px;
    left: 820px;
    top: 150px;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
    color: blue;
}
.orderlist_product_cnt{
    position: absolute;
    width: 100px;
    height: 30px;
    left: 850px;
    top: 120px;
    font-weight: bold;
    text-align: center;
    font-size: 16px;
}
.orderlist_product_state{
    position: absolute;
    width: 90px;
    height: 30px;
    left: 860px;
    top: 40px;
    font-weight: bold;
    color: red;
}
.orderlist_product_user{
    position: absolute;
    width: 200px;
    height: 30px;
    font-weight: bold;
    left: 520px;
    top: 30px;
}
.orderlist_product_userphone{
    position: absolute;
    width: 200px;
    height: 30px;
    left: 520px;
    top: 90px;
    font-weight: bold;
}
.orderlist_product_useraddress{
    position: absolute;
    width: 520px;
    height: 60px;
    left: 250px;
    top: 145px;
    font-weight: bold;
}

.ordercontent1{
    position: absolute;
    width: 980px;
    height: 200px;
    left: 280px;
    top: 0px;
    border: 1px solid rgb(223, 217, 217);
    z-index: -1;
    font-weight: bold;
}
.ordercontent1 label{
    position: absolute; left: 5px; top: -25px;
    font-size: 14px; color: rgb(36, 35, 35);
    background: pink;
    font-weight: bold;
}


// ====================================================================================================================

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

// 페이지 네이션 ===============================================================================================


.ppagenation {position: relative; text-align: center; padding: 0 0; top: 50px;}
.ppagenation li {display: inline-block; vertical-align: middle;}
.ppagenation li a {color: #898786; display: block; width: 32px; height: 32px;}
.ppagenation li a:hover {color: #ff5a20; text-decoration: underline;}
.ppagenation li.ppagenation_First a,
.ppagenation li.ppagenation_Prev a,
.ppagenation li.ppagenation_Next a,
.ppagenation li.ppagenation_Last a {overflow: hidden; width: 30px; height: 30px; margin: 0 2px; color: transparent; background: no-repeat center;}
.ppagenation li.ppagenation_First a {background-image: url('../assets/img/first.png') ;}
.ppagenation li.ppagenation_Prev a {background-image: url('../assets/img/left.png') ;}
.ppagenation li.ppagenation_Next a {background-image: url('../assets/img/right.png') ;}
.ppagenation li.ppagenation_Last a {background-image: url('../assets/img/last.png') ;}
.ppagenation li.ppagenation_Prev a {margin-right: 23px; margin-left: 13px;}
.ppagenation li.ppagenation_Next a {margin-left: 23px; margin-right: 13px;}

// 주문 후 리뷰작성 모달 =========================================================================================
div[class="Write_a_review"]{
  position: fixed;
  top: 50%;
  left: 50%;
  border: 3px solid gold;
  border-radius: 25px;
  background: rgb(255, 247, 210);
  transform: translate(-50%,-50%);
  width: 500px;
  height: 670px;
  z-index: 2;
}
div[class="Write_a_review_header"]{
border: 1px solid red;
width: 100%;
height: 150px;
}
div[class="Write_a_review_body"]{
border: 1px solid red;
width: 100%;
height: 150px;
}
div[class="Write_a_review_footer"]{
border: 1px solid red;
width: 100%;
height: 150px;
}
</style>