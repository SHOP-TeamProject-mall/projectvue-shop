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
                <span class="radio2"><input type="text" v-model="this.memberlist.membername" style="border:none;"></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">연락처*</label></span>
                <span class="radio2"><input type="text" v-model="this.memberlist.memberphone" style="border:none;"></span>
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
                <span class="radio2"><input type="text" style="width:360px; border:1px solid rgb(235, 235, 235);" v-model="this.Detailed_Address"></span>
            </div>
        </div>
        <div class="order_btn">
            <button @click="order">주문완료</button><button style="background:red; margin-left:10px;" @click="cancle_order(1)">주문취소</button>
        </div>
    </div>
</template>


<script>

import axios from "axios";
import { useStore } from "vuex";
export default {
    name:'Order',
    watch:{
    // getList(){
    //     this.list = this.getList;
    // },
    list(){

    }
    },
    created(){
        this.handlememberlist();
        let a = this.store.getters.getList;
        this.list = a;
        console.log(this.list,"this.list");
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
        this.ordernumber = String(Math.floor(Math.random()*999999)); 
        console.log(this.ordernumber);

        let a = this.store.getters.getOrderidx;
        a = this.ordernumber;
        console.log(a,"ordernumber");
        this.store.commit("setOrderidx",  a);
    },
    data(){
        return{
            token               : sessionStorage.getItem("TOKEN"),
            memberlist          : {},
            finalprice          :39800,
            deliradio           :"prepayment",
            list                :[],
            store               :useStore(),
            totalprice          :0,
            order_finalprice    :0,
            cost                :0,
            salecost            :0,
            productitemsone     :"",
            product_saleprice   :0,
            zonecode            :"",
            address             :null,
            Detailed_Address    :"",
            menu                :1,
            orderlist           :[],
            ordernumber         :"",

        }
    },
    methods:{
        cancle_order(menu){
            console.log("menu",menu);
            console.log(this.token);
            console.log(this.productitemsone.producttitle);
                for(let i=0; i<this.list.length; i++){
                    const url = `/HOST/order/insertorder.json`;
                    const headers = { "Content-Type": "application/json" };
                    const body = {
                            order_productoptionno : this.list[i].no,
                            order_productoptioncnt : this.list[i].cnt,
                            order_productoptionsize : this.list[i].size,
                            order_productoptioncolor : this.list[i].color,
                            order_amount_paid:this.list[i].price,
                            order_deliveryfee : this.productitemsone.productdeliveryfee,
                            order_deliveryfee_check : this.deliradio,
                            reciever_name : this.memberlist.membername,
                            reciever_phone : this.memberlist.memberphone,
                            reciever_zipcode : this.zonecode,
                            reciever_address : this.address,
                            reciever_detailed_address : this.Detailed_Address,
                            userid : this.memberlist.memberid,
                            idx : this.ordernumber,
                            productname : this.productitemsone.producttitle
                    };
                    // console.log(body);
                    if(0 < i){
                        body.order_deliveryfee = 0;
                    }
                    else{
                        body.order_deliveryfee = this.productitemsone.productdeliveryfee;
                    }
                    this.orderlist = body;
                    console.log(this.orderlist);

                    // // console.log(body);
                    const response = axios.post(url,this.orderlist, {headers:headers});
                    console.log(response);
                }

                    let b = this.store.getters.getUserid;
                    b = this.memberlist.memberid;
                    console.log(b,"userid");
                    this.store.commit("setUserid",  b);   

                    this.$router.push({ path: "/order_complete"});
        },
        changeradio(){
            if(this.deliradio === "Cash_on_delivery"){
                this.order_finalprice = this.totalprice
            }
            else{
                this.order_finalprice = this.totalprice + this.productitemsone.productdeliveryfee;
            }
        },
        async order(){
            // if(this.Detailed_Address === ""){
            //     alert("상세주소를 입력하세요");
            // }
            // console.log(this.deliradio);
            // this.address = document.getElementById('address').value;
            // this.zonecode = document.getElementById('zonecode').value;
            // console.log(this.address);
            // console.log(this.zonecode);
            // console.log(this.Detailed_Address);


			var IMP = window.IMP; // 생략가능
			IMP.init('imp85009680'); //iamport 대신 자신의 "가맹점 식별코드"를 사용하시면 됩니다
			// 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
			// i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
			IMP.request_pay({
			pg: 'kakao', // version 1.1.0부터 지원.
			/*
			'kakao':카카오페이,
			html5_inicis':이니시스(웹표준결제)
			'nice':나이스페이
			'jtnet':제이티넷
			'uplus':LG유플러스
			'danal':다날
			'payco':페이코
			'syrup':시럽페이
			'paypal':페이팔
			*/
			pay_method: 'card',
			/*
			'samsung':삼성페이,
			'card':신용카드,
			'trans':실시간계좌이체,
			'vbank':가상계좌,
			'phone':휴대폰소액결제
			*/
			merchant_uid: 'merchant_' + new Date().getTime(),
			/*
			merchant_uid에 경우
			https://docs.iamport.kr/implementation/payment
			위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
			참고하세요.
			나중에 포스팅 해볼게요.
			*/
			name: this.productitemsone.producttitle,
			//결제창에서 보여질 이름
			amount: this.order_finalprice,
			//가격
			buyer_email: 'iamport@siot.do',
			buyer_name: '구매자이름',
			buyer_tel: '010-1234-5678',
			buyer_addr: '서울특별시 강남구 삼성동',
			buyer_postcode: '123-456',
			m_redirect_url: 'https://www.yourdomain.com/payments/complete'
			/*
			모바일 결제시,
			결제가 끝나고 랜딩되는 URL을 지정
			(카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐)
			*/
			}, (rsp) => {
			console.log(rsp);
			if (rsp.success) {
				var msg = '결제가 완료되었습니다.';
				alert(msg);

                for(let i=0; i<this.list.length; i++){
                    const url = `/HOST/order/insertorder.json`;
                    const headers = { "Content-Type": "application/json" };
                    const body = {
                            order_productoptionno : this.list[i].no,
                            order_productoptioncnt : this.list[i].cnt,
                            order_productoptionsize : this.list[i].size,
                            order_productoptioncolor : this.list[i].color,
                            order_amount_paid:this.list[i].price,
                            order_deliveryfee : this.productitemsone.productdeliveryfee,
                            order_deliveryfee_check : this.deliradio,
                            reciever_name : this.memberlist.membername,
                            reciever_phone : this.memberlist.memberphone,
                            reciever_zipcode : this.zonecode,
                            reciever_address : this.address,
                            reciever_detailed_address : this.Detailed_Address,
                            userid : this.memberlist.memberid,
                            idx : this.ordernumber,
                            productname : this.productitemsone.producttitle
                    };
                    // console.log(body);
                    if(0 < i){
                        body.order_deliveryfee = 0;
                    }
                    else{
                        body.order_deliveryfee = this.productitemsone.productdeliveryfee;
                    }
                    this.orderlist = body;
                    console.log(this.orderlist);

                    // // console.log(body);
                    const response = axios.post(url,this.orderlist, {headers:headers});
                    console.log(response);
                }

                    let b = this.store.getters.getUserid;
                    b = this.memberlist.memberid;
                    console.log(b,"userid");
                    this.store.commit("setUserid",  b);   

                    this.$router.push({ path: "/order_complete"});

			} else {
				var msg1 = '결제에 실패하였습니다.';
				msg1 += '에러내용 : ' + rsp.error_msg;
				alert(msg1);
			}
			});
   
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