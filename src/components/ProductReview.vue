<template>
<!-- <div> -->
    <!-- <input type="checkbox" id="sidebar">
    <header>
        <div>
            <label for="sidebar" class="menu"></label>
        </div>
    </header>

    <div class="container">
        <img src="../assets/img/main3.jpg" alt="">
    </div> -->

<div class="container" style="margin-top:20px;">
    <div class="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h4 class="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Review</h4>
        <h1 class="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">상품리뷰</h1>
    </div>
    <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li v-for="review in review_list" v-bind:key="review">
          <img :src="`/HOST/product/select_productmain_image.json?productno=${review.productOrder.productOption.product.productno}`" class="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]">
          <p class="fs-110 font-cond-l" contenteditable="false">{{review.reviewcontent}}</p>
          <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">{{review.productOrder.productOption.product.producttitle}} - size - color</h5>
          <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">{{review.member.memberid}}</small>
        </li>
      </ul>
</div>

    <!-- <div class="sidebar_content">
        <ul>
            <li><a href="#">메뉴</a></li>
            <li><a href="#">메뉴</a></li>
            <li><a href="#">메뉴</a></li>
            <li><a href="#">메뉴</a></li>
            <li><a href="#">메뉴</a></li>
            <li><a href="#">메뉴</a></li>
        </ul>
        <label for="sidebar"></label>
    </div>
    <label for="sidebar" class="background"></label> -->
<!-- </div> -->
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return{
                token           : sessionStorage.getItem("TOKEN"),
                page            : 1,
                review_list     : ""
            }
        },
        methods:{
            async SelectReview(){
                console.log("11");
                const url = `/HOST/review/select_review.json?page=${this.page}`;
                const headers = { "Content-Type": "application/json"};
                const response = await axios.get(url, { headers });
                console.log(response.data);
                console.log(response.data.review.content);
                if(response.data.status === 200){
                    console.log("333");
                    this.review_list = response.data.review.content;
                    console.log(this.review_list);
                    console.log(response.data.review.content[0].productOrder.productOption.product.productno,"9999");
                }
            }
        },
        created(){
            this.SelectReview();
        }
    }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';

.container{
    height: 150vh;
}

// input#sidebar {display:none;}

// header {
//     background-color: #f5f5f5;
//     position: relative;
//     z-index:4;
// }
// header > div {
//     max-width:1200px;
//     margin:0 auto;
//     position: relative;
//     min-height: 60px;
// }
// header label.menu {
//     position: absolute;
//     top:50%; right: 10px;
//     transform: translateY(-50%);
//     width: 24px; height: 24px;
//     background: url('../assets/img/main3.jpg') 0 0 no-repeat;
//     cursor: pointer;
// }
// .container{max-width: 1200px; margin:0 auto;}
// .container img { max-width:100%;}

// .sidebar_content{
//     position:fixed;
//     top:0;right: -300px;
//     width: 300px; height: 100%;
//     background: #999;
//     transition: all .35s;
//     z-index:5;
// }

// .sidebar_content > ul {margin:20px;}
// .sidebar_content > ul > li {
//     border-bottom:1px solid #ccc;
//     list-style: none;
// }
// .sidebar_content > ul > li > a {
//     display: inline-block;
//     width: auto;
//     color: #fff;
//     padding: 10px;
//     margin: 10px;
//     background: #f5f5f5;
// }
// .sidebar_content label[for*='sidebar']{
//     position:absolute;
//     top: 0;left: 0;
//     width: 100%; height: 100%;
//     z-index: -1;
// }

// .background{
//     position: fixed;
//     top: 0;left: 0;
//     width: 100%;height: 100%;
//     background: rgba(0, 0, 0, .8);
//     transition: all .35s;
//     opacity: 0; visibility: hidden;
//     z-index: 1;
// }

// input#sidebar:checked ~ header label {background-position: -24px 0;}
// input#sidebar:checked ~ .sidebar_content{right:0;}
// input#sidebar:checked ~ .background {opacity: 1;visibility: visible;}

// 리뷰
body{margin-top:20px;}

.align-center {
    text-align: center;
}
.hash-list {
    display: block;
    padding: 0;
    margin: 0 auto;
}

@media (min-width: 768px){
    .hash-list.cols-3 > li:nth-last-child(-n+3) {
        border-bottom: none;
    }
}
@media (min-width: 768px){
    .hash-list.cols-3 > li {
        width: 33.3333%;
    }
}
.hash-list > li {
    display: block;
    float: left;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.pad-30, .pad-30-all > * {
    padding: 30px;
}
img {
    border: 0;
}
.mgb-20, .mgb-20-all > * {
    margin-bottom: 20px;
}
.wpx-100, .wpx-100-after:after {
    width: 100px;
}
.img-round, .img-rel-round {
    border-radius: 50%;
}
.padb-30, .padb-30-all > * {
    padding-bottom: 30px;
}

.mgb-40, .mgb-40-all > * {
    margin-bottom: 40px;
}
.align-center {
    text-align: center;
}
[class*="line-b"] {
    position: relative;
    padding-bottom: 20px;
    border-color: #E6AF2A;
}
.fg-text-d, .fg-hov-text-d:hover, .fg-active-text-d.active {
    color: #222;
}
.font-cond-b {
    font-weight: 700 !important;
}
</style>