<template>
    <div class="container">
        <div class="order_complete_table">
            <div class="table1">
                <h3 style="margin-top:15px; margin-left:15px; font-weight: bold; color:rgb(114, 112, 112);">주문완료</h3>
            </div>
            <div class="table2">
                <div class="table2_1">
                    <span>SHOP을 이용해 주셔서 감사합니다.</span>
                </div>
                <div class="table2_2">
                    <span>고객님,</span> <span style="color:red;">주문이 완료</span><span>되었습니다.</span>
                </div>
                <div class="table2_3">
                    <span>고객님이 주문하신 주문번호는</span><br>
                    <span style="color:red; font-size:26px;">| </span><span style="color:red; font-size:26px;" v-for="items in ordernumber" v-bind:key="items"> {{items.onumber}} | </span><span>입니다.</span>
                </div>
                <div class="table2_4">
                    <span>주문내역 확인은 배송/마이페이지의</span><br>
                    <span>"주문/배송조회"에서 하실 수 있습니다.</span>
                </div>
            </div>
            <div class="table3">
                <button @click="orderlist">주문내역보러가기</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
export default {
    data(){
        return{
            token               : sessionStorage.getItem("TOKEN"),
            store               : useStore(),
            orderidx            : "",
            userid              : "",
            list                : [],
            ordernumber              : [],
        }
    },
    mounted(){

    },
    created(){
        let a = this.store.getters.getOrderidx;
        this.orderidx = a;
        console.log(this.orderidx,"주문완료페이지");

        let b = this.store.getters.getUserid;
        this.userid = b;
        console.log(this.userid,"주문완료페이지");
        
        this.SelectOrderNumber();
    },
    methods:{
        orderlist(){
            this.$router.push({path:'/mypage'});
        },
        async SelectOrderNumber(){
            const url = `/HOST/order/select_ordernumber.json?idx=${this.orderidx}&userid=${this.userid}`;
            const headers = { "Content-Type": "application/json" };
            const response = await axios.get(url, { headers });
            // console.log(response);
                if(response.status === 200){
                    this.list = response.data;
                        // console.log(this.list.list.length);
                    for(var i=0; i< this.list.list.length; i++){
                        this.ordernumber.push({
                            onumber: this.list.list[i].ordernumber
                        })
                            // console.log(this.ordernumber,"list");
                        
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    position: relative;
    justify-content: center;
    align-items: center;
    height: 82vh;
}
.order_complete_table{
    position: absolute;
    // 가운데 정렬
    left: 50%;
    transform: translateX(-50%);
    width: 750px;
    height: 600px;
    top: 10%;
    border: 3px solid rgb(228, 225, 225);
    border-radius: 10px;
}
.table1{
    position: relative;
    width: 100%;
    height: 70px;
    top: 30px;
    font-weight: bold;
    border: 1px solid rgb(228, 225, 225);
    background: rgb(245, 245, 245);
    vertical-align: middle;
}
.table2{
    position: absolute;
    // 가운데 정렬
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    width: 90%;
    height: 350px;
    top: 125px;
    border: 4px solid rgb(228, 225, 225);
}
.table2_1{
    width: 100%;
    height: 50px;
    text-align: center;
}
.table2_1 span{
    position: relative;
    font-weight: bold;
    top:16px;
    font-size: 22px;
    color: rgb(114, 112, 112);
}
.table2_2{
    position: absolute;
    // 가운데 정렬
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 70px;
    top: 60px;
    text-align: center;
    font-size: 26px;
    background: rgb(207, 252, 255);
}
.table2_2 span{
    position: relative;
    font-weight: bold;
    top:12px;
    color: rgb(90, 89, 89);
}
.table2_3{
    position: absolute;
    // 가운데 정렬
    left: 50%;
    transform: translateX(-50%);
    width: 95.5%;
    height: 70px;
    top: 150px;
    text-align: center;
    font-size: 20px;
}
.table2_3 span{
    position: relative;
    font-weight: bold;
    color: rgb(131, 131, 131);
}
.table2_4{
    position: absolute;
    // 가운데 정렬
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 70px;
    top: 250px;
    text-align: center;
    font-size: 20px;
}
.table2_4 span{
    position: relative;
    font-weight: bold;
    top:12px;
    color: rgb(131, 131, 131);
}
.table3{
    position: absolute;
    // 가운데 정렬
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 60px;
    top: 500px;
    text-align: center;
    vertical-align: middle;
}
.table3 button{
    position: relative;
    top: 10px;
    font-size: 22px;
    width: 200px;
    color:rgb(114, 112, 112);
    background: rgb(245, 245, 245);
    font-weight: bold;
}
</style>