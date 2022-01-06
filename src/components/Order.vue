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
                <tbody style="border:1px solid rgb(223, 217, 217); height:50px;">
                    <td>1</td>
                    <td>남성상의</td>
                    <td>테스트</td>
                    <td>1</td>
                    <td>39800</td>
                    <td>3000</td>
                    <td>36800</td>
                </tbody>
                <tbody style="border:1px solid rgb(223, 217, 217); height:50px;">
                    <td>2</td>
                    <td>남성상의</td>
                    <td>테스트</td>
                    <td>1</td>
                    <td>39800</td>
                    <td>3000</td>
                    <td>36800</td>
                </tbody>
                <tbody style="border:1px solid rgb(223, 217, 217); height:50px;">
                    <td>3</td>
                    <td>남성상의</td>
                    <td>테스트</td>
                    <td>1</td>
                    <td>39800</td>
                    <td>3000</td>
                    <td>36800</td>
                </tbody>
            </table>
        </div>

        <div class="orderprice">
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly  autocomplete="off" required placeholder="39,800">
                <label for="id">상품금액</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="display:none;"  autocomplete="off" required >
                <label for="id" style="position:absolute; left:47.5%; top:-24%; font-size:70px;">-</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly  autocomplete="off" required placeholder="39,800">
                <label for="id">할인금액</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="display:none;"   autocomplete="off" required>
                <label for="id" style="position:absolute; left:65%; top:0%; font-size:50px;">+</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly  autocomplete="off" required placeholder="3,800">
                <label for="id">배송비</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="display:none;"   autocomplete="off" required>
                <label for="id" style="position:absolute; left:81%; top:0%; font-size:50px;">=</label>
            </span>
            <span class="int-area">
                <input type="text" name="pw" id="pw" readonly style="color:red;"  autocomplete="off" required v-model="finalprice">
                <label for="id" >총구매금액</label>
            </span>
        </div>
        <div class="userinformation">
            <div style="border-top:1px solid black; border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:200px;">배송비 결제</label></span>
                <span class="radio2"><input type="radio"  value="a" id="a" v-model="deliradio">선결제</span>
                <span class="radio3"><input type="radio"  value="b" id="b" v-model="deliradio">착불</span>
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
                <span class="radio2"><input type="text" style="width:100px; border:1px solid rgb(235, 235, 235);"><button style="margin-left:5px; background:rgb(235, 225, 255);">주소찾기</button></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">주소*</label></span>
                <span class="radio2"><input type="text" style="width:600px; border:1px solid rgb(235, 235, 235);"></span>
            </div>
            <div style="border-bottom:1px solid rgb(235, 235, 235); height:40px;">
                <span class="radio1"><label for="c" style="margin-left:25px; margin-top:5px; width:140px;">상세주소*</label></span>
                <span class="radio2"><input type="text" style="width:360px; border:1px solid rgb(235, 235, 235);"></span>
            </div>
        </div>
        <div class="order_btn">
            <button>주문완료</button><button style="background:red; margin-left:10px;">주문취소</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                finalprice:39800,
                deliradio:""
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