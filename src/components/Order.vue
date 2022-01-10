<template>
    <div class="container">
        <div class="ordertable">
            <table style="border:1px solid rgb(223, 217, 217); width:1000px; text-align:center;">
                <thead style="border:1px solid rgb(223, 217, 217); height:40px; font-size:12px;  background:rgb(235, 235, 235);">
                    <th>No</th>
                    <th>Category</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>판매가</th>
                    <th>할인금액</th>
                    <th>할인적용금액</th>
                </thead>
                <tbody style="border:1px solid rgb(223, 217, 217); height:50px;" v-for="(orderimfomation,idx) in list" v-bind:key="orderimfomation">
                    <td>{{idx+1}}</td>
                    <td>{{this.productitemsone.productcategory}}</td>
                    <td>{{this.productitemsone.producttitle}} - {{orderimfomation.name}}</td>
                    <td>{{orderimfomation.cnt}}</td>
                    <td>{{orderimfomation.price}}</td>
                    <td>{{orderimfomation.sale}}</td>
                    <td>{{orderimfomation.sale}}</td>
                </tbody>
            </table>
        </div>

        <div class="orderprice">
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly  autocomplete="off" required v-model="this.cost">
                <label for="id">상품금액</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="display:none;"  autocomplete="off" required >
                <label for="id" style="position:absolute; left:47.5%; top:-24%; font-size:70px;">-</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly  autocomplete="off" required placeholder="39,800" v-model="this.salecost">
                <label for="id">할인금액</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="display:none;"   autocomplete="off" required>
                <label for="id" style="position:absolute; left:65%; top:0%; font-size:50px;">+</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly  autocomplete="off" required v-model="this.productitemsone.productdeliveryfee">
                <label for="id">배송비</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="display:none;"   autocomplete="off" required>
                <label for="id" style="position:absolute; left:81%; top:0%; font-size:50px;">=</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="color:red;"  autocomplete="off" required v-model="this.order_finalprice">
                <label for="id" >총구매금액</label>
            </span>
        </div>
        <div class="userinformation">
            <div style="border-top:1px solid black; border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:200px;">배송비 결제</label></span>
                <span class="radio2"><input type="radio"  value="prepayment" id="a" v-model="deliradio" @change="changeradio">선결제</span>
                <span class="radio3"><input type="radio"  value="Cash_on_delivery" id="b" v-model="deliradio" @change="changeradio">착불</span>
            </div>
            <div style="border-top:1px solid black; border-bottom:1px solid rgb(235, 235, 235); height:40px; margin-top:30px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">수취인*</label></span>
                <span class="radio2"><input type="text" placeholder="고객명" style="border:none;"></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">연락처*</label></span>
                <span class="radio2">010-0000-0000</span>
            </div>
            <div style="border-top:1px solid black; border-bottom:1px solid rgb(235, 235, 235); height:40px; margin-top:30px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">배송지*</label></span>
                <span class="radio2"><button style="color:white; background:#999; border:none; border-radius:15px;">기본배송지</button><button style="color:white; background:#999; margin-left:5px; border:none; border-radius:15px;">신규배송지</button></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">우편번호*</label></span>
                <span class="radio2"><input type="text" style="width:100px; border:1px solid rgb(235, 235, 235);" id="zonecode" required v-model="this.zonecode"><button style="margin-left:5px; background:rgb(235, 225, 255);" @click="Find_address()">주소찾기</button></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">주소*</label></span>
                <span class="radio2"><input type="text" style="width:600px; border:1px solid rgb(235, 235, 235);" id="address" required v-model="this.address"></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">상세주소*</label></span>
                <span class="radio2"><input type="text" style="width:360px; border:1px solid rgb(235, 235, 235);" v-model="Detailed_Address"></span>
            </div>
        </div>
        <div class="order_btn">
            <button @click="order">주문완료</button><button style="background:red; margin-left:10px;">주문취소</button>
        </div>
    </div>
</template>


<script>

import axios from "axios";
import { useStore } from "vuex";
export default {
    name:'Order',
    watch:{
    getList(){
        this.list = this.getList;
    },
    list(){

    }
    },
    created(){
        let a = this.store.getters.getList;
        this.list = a;
        // console.log(this.list,"this.list");
        let b = this.store.getters.getPrice;
        this.totalprice = b;
        // console.log(this.totalprice, "totalprice")
        let c = this.store.getters.getCost;
        this.cost = c;
        // console.log(this.cost, "cost");
        let d = this.store.getters.getSalecost;
        this.salecost = d;
        // console.log(this.salecost, "salecost");
        // console.log(this.productitemsone,"productitemsone");
        this.selectoneProduct();
        // // console.log(this.$route.query.name);
        // console.log(this.$route.query.productno);
        // console.log(this.$route);
        
    },
    mounted() {

    },
    data(){
        return{
            finalprice:39800,
            deliradio:"prepayment",
            list:[],
            store:useStore(),
            totalprice:0,
            order_finalprice:0,
            cost:0,
            salecost:0,
            productitemsone:"",
            product_saleprice:0,
            zonecode:"",
            address:null,
            Detailed_Address:"",

        }
    },
    methods:{
        changeradio(){
            if(this.deliradio === "Cash_on_delivery"){
                this.order_finalprice = this.totalprice
            }
            else{
                this.order_finalprice = this.totalprice + this.productitemsone.productdeliveryfee;
            }
        },
        order(){
            if(this.Detailed_Address === ""){
                alert("상세주소를 입력하세요");
            }
            console.log(this.deliradio);
            this.address = document.getElementById('address').value;
            this.zonecode = document.getElementById('zonecode').value;
            console.log(this.address);
            console.log(this.zonecode);
            console.log(this.Detailed_Address);
        },
        async selectoneProduct(){
        const url = `/HOST/product/selectone_product.json?productno=${this.$route.query.productno}`;
        const headers = { "Content-Type": "application/json" };
        const response = await axios.get(url, { headers });
        // console.log(response);
        if(response.status === 200){
          this.productitemsone = response.data.list;
          this.productsubimageidx = response.data.list.productsubimageidx;
          // console.log(this.productsubimageidx);
          console.log(this.productitemsone);
        //   this.product_saleprice = this.productitemsone
            // console.log(this.totalprice,"====================");
            // console.log(this.productitemsone.productdeliveryfee,"========================");
            this.order_finalprice = this.totalprice + this.productitemsone.productdeliveryfee;
            // console.log(this.order_finalprice);
        }  
      },
      // 카카오주소찾기 api
      Find_address(){
            var width = 600; //팝업의 너비
            var height = 600; //팝업의 높이
        new window.daum.Postcode({
            width:width,
            height:height,
            
            oncomplete: (data) => {
                console.log("[주소]",data);
                
                this.address = data.address;
                // console.log(this.address,"adddd");
                this.zonecode = data.zonecode;
                // console.log(this.zonecode, "zonecode");
                
                document.getElementById('zonecode').value = data.zonecode;
                document.getElementById('address').value = data.address;
            },
            theme: {
                // bgColor: "#C00C0C", //바탕 배경색
                // //searchBgColor: "", //검색창 배경색
                // //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
                // //pageBgColor: "", //페이지 배경색
                // //textColor: "", //기본 글자색
                // //queryTextColor: "", //검색창 글자색
                // //postcodeTextColor: "", //우편번호 글자색
                // emphTextColor: "#C01160" //강조 글자색
                // //outlineColor: "", //테두리
            }
        }).open({
            left: (window.screen.width / 2) - (width / 2),
            top: (window.screen.height / 2) - (height / 2)
        });
      }
    }
}
</script>

<style lang="scss" scoped>
.container{
    position: relative;
    justify-content: center;
    align-items: center;
    height: 110vh;
}
.ordertable{
    position: relative;
    width: 1000px;
    left: 11%;
    top: 10%;
}
.orderprice{
    position: relative;
    top: 13%;
    width: 1000px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    left: 11%;
    height: 80px;
    vertical-align: center;
}
.userinformation{
    position: relative;
    top: 20%;
    width: 1000px;
    left: 11%;
    height: 500px;
    vertical-align: center;
}
.order_btn{
    position: relative;
    top: 12%;
    width: 1000px;
    left: 11%;
    height: 200px;
    vertical-align: center;
}
.order_btn button{
    position: relative;
    width: 150px;
    left: 35%;
    font-weight: bold;
    font-size: 22px;
    height: 50px;
    color: white;
    background: rgb(0, 80, 253);
}
.int-area input{
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    width: 120px;
    left: 36%;
    padding: 35px 10px 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    outline: none;
}
.int-area label{
    position: relative; left: 25%; top: -30px;
    font-size: 14px; color: rgb(36, 35, 35);
}
.radio1{
    position: relative;
    left: 0%;
    background: rgb(235, 235, 235);
    height: 40px;
    font-size: 17px;
    width: 300px;
}
.radio2{
    position: relative;
    left: 5%;
    width: 100px;
    margin-top: 5px;
}
.radio3{
    position: relative;
    left: 6%;
    width: 100px;
    margin-top: 5px;
    
}
</style>