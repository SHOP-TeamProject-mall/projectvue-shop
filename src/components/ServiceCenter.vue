<template>
    <div>
        <div class="main-container">
            <div class="room-deal-information-container">
                <div id="aside" class="col-md-3">
                    <div class="aside">
                        <h3 class="aside-title">고객센터</h3>
                        <div class="checkbox-filter">
                            <div class="input-checkbox">
                                <label style="font-size:14px" for="category-1" @click="changeMenu(1)"><span></span><strong>공지사항</strong></label>
                            </div>

                            <div class="input-checkbox">
                                <label style="font-size:14px" for="category-1" @click="changeMenu(2)"><span></span><strong>판매Q&A</strong></label>
                            </div>

                            <div class="input-checkbox">
                                <label style="font-size:14px" for="category-1" @click="changeMenu(3)"><span></span><strong>상품Q&A</strong></label>
                            </div>

                            <div class="input-checkbox">
                                <label style="font-size:14px" for="category-1" @click="changeMenu(4)"><span></span><strong>1:1문의</strong></label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 공지사항 -->
                <div id="aside" class="col-md-9">
                    <div v-if="menu==1" class="billing-details order-details" style="padding:50px;">
                        <div class="form-group">
                            <h4>공지사항</h4>
                        </div>
                        <hr />
                        <div class="form-group">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(board, idx) in noticeitems" v-bind:key="board">
                                        <td style="width:50px;">{{board.no}}</td>
                                        <td>
                                            <a href="#">
                                                <div class="form-group">
                                                    <div class="input-checkbox">
                                                        <input type="checkbox" :id="`create-account_${idx}`" @click="selectonenotice(board.no)">
                                                        <label :for="`create-account_${idx}`">{{board.title}}</label>
                                                        <div class="caption">
                                                            <img :src="`/HOST/boards/selectboard_image?no=${board.no}`" style="width:350px;">
                                                            <p>{{this.noticeonecontent[board.no]}}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                        <td style="width:100px;">{{board.writer}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ul class="reviews-pagination">
                            <li class="active">1</li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                        </ul>
                        <br />

                        <div class="header-search" style="text-align:center; border-top:2px solid red;">
                            <form v-on:submit.prevent>
                                <select class="input-select">
                                    <option value="0">제목</option>
                                    <option value="1">내용</option>
                                    <option value="1">작성자</option>
                                </select>
                                <input class="input" placeholder="검색어를 입력하세요.">
                                <button class="search-btn" >검색</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
                        el: ".main-container",
                data() {
                    return {

                        files: [], //업로드용 파일
                        filesPreview: [],
                        uploadImageIndex: 0 // 이미지 업로드를 위한 변수
                    }
                },
                 methods: {
                    imageUpload() {
                        console.log(this.$refs.files.files);

                        // this.files = [...this.files, this.$refs.files.files];
                        //하나의 배열로 넣기
                        let num = -1;
                        for (let i = 0; i < this.$refs.files.files.length; i++) {
                            this.files = [
                                ...this.files,
                                //이미지 업로드
                                {
                                    //실제 파일
                                    file: this.$refs.files.files[i],
                                    //이미지 프리뷰
                                    preview: URL.createObjectURL(this.$refs.files.files[i]),
                                    //삭제및 관리를 위한 number
                                    number: i
                                }];
                            num = i;
                            //이미지 업로드용 프리뷰
                            // this.filesPreview = [
                            //   ...this.filesPreview,
                            //   { file: URL.createObjectURL(this.$refs.files.files[i]), number: i }
                            // ];
                        }
                        this.uploadImageIndex = num + 1; //이미지 index의 마지막 값 + 1 저장
                        console.log(this.files);
                        // console.log(this.filesPreview);
                    },

                    imageAddUpload() {
                        console.log(this.$refs.files.files);

                        // this.files = [...this.files, this.$refs.files.files];
                        //하나의 배열로 넣기c
                        let num = -1;
                        for (let i = 0; i < this.$refs.files.files.length; i++) {
                            console.log(this.uploadImageIndex);
                            this.files = [
                                ...this.files,
                                //이미지 업로드
                                {
                                    //실제 파일
                                    file: this.$refs.files.files[i],
                                    //이미지 프리뷰
                                    preview: URL.createObjectURL(this.$refs.files.files[i]),
                                    //삭제및 관리를 위한 number
                                    number: i + this.uploadImageIndex
                                }
                            ];
                            num = i;
                        }
                        this.uploadImageIndex = this.uploadImageIndex + num + 1;

                        console.log(this.files);
                        // console.log(this.filesPreview);
                    },
                    fileDeleteButton(e) {
                        const name = e.target.getAttribute('name');
                        this.files = this.files.filter(data => data.number !== Number(name));
                        // console.log(this.files);
                    },
                }
    }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';
// input[id="select_option"] {display:none;}
// input[id="select_option"] + label {display: block; position: relative; cursor: pointer;}
// div[class="select_option_list"] {width: 500px; height: 500px; background: rgb(255, 255, 255);position:fixed; overflow-y: auto; top: 0;left: 0;z-index: 1;transition: all .35s; border-right: 2px solid rgb(255, 0, 0);}
// input[id="select_option"]:checked + label + div {display: none;}


.main-container {
            width: 1200px;
            height: 400px;
            margin: 0 auto;
        }
        
        .room-deal-information-container {
            margin-top: 50px;
            color: #222222;
            border: 1px solid #dddddd;
        }
        
        .room-deal-information-title {
            text-align: center;
            font-size: 18px;
            line-height: 60px;
            border-bottom: 1px solid #dddddd;
        }
        
        .room-deal-information-content-wrapper {
            min-height: 50px;
            display: flex;
        }
        
        .room-deal-informtaion-content-title {
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            background-color: #f9f9f9;
        }
        
        .room-deal-information-content {
            width: 100%;
            font-size: 14px;
        }
        
        .room-deal-option-selector {
            display: flex;
            align-items: center;
            padding: 15px;
        }
        
        .room-deal-option-item {
            width: 100px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #cccccc;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .room-deal-option-item:last-child {
            margin-left: 10px;
        }
        
        .room-deal-option-notice {
            margin-left: auto;
            font-size: 14px;
            color: #888888;
        }
        
        .room-deal-option-item-deposit {
            margin-left: 10px;
        }
        
        .room-deal-information-wrapper {
            display: flex;
            flex-direction: column;
        }
        
        .room-deal-information-option {
            padding: 10px;
            display: flex;
            align-items: center;
        }
        
        .room-deal-information-option:last-child {
            border-bottom: 1px solid #dddddd;
        }
        
        .room-deal-information-item-type {
            font-size: 13px;
            color: #fff;
            background-color: #61b6e5;
            min-width: 50px;
            height: 26px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
        }
        
        .room-deal-information-item-wrapper {
            display: flex;
            align-items: center;
            margin-left: 10px;
            height: 46px;
            width: 100%;
        }
        
        .room-deal-information-item-wrapper>input {
            border: 1px solid #dddddd;
            width: 140px;
            height: 100%;
            padding: 0 15px;
            font-size: 15px;
        }
        
        .room-deal-inforamtion-won {
            margin: 0 10px;
        }
        
        .room-deal-information-example {
            color: #888888;
        }
        
        .room-deal-information-option:not(:first-child) {
            margin-top: 10px;
        }
        
        .room-deal-inforamtion-divide {
            font-size: 22px;
            margin: 0 8px;
            color: #222222;
            font-weight: 100;
        }
        
        .room-deal-close-button-wrapper {
            margin-left: auto;
            cursor: pointer;
        }
        
        .room-deal-close-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            background-color: #666666;
            color: rgb(220, 220, 220);
        }
        
        .room-deal-cliked {
            background-color: rgb(235, 235, 235);
            color: rgb(170, 170, 170);
        }
        
        .room-file-upload-example {
            height: 100%;
        }
        
        .room-write-content-container {
            border-top: 1px solid #dddddd;
            min-height: 260px;
        }
        
        .room-picture-notice {
            margin: 20px;
            padding: 20px 40px;
            border: 1px solid #dddddd;
        }
        
        .file-preview-content-container {
            height: 100%;
        }
        
        .room-file-upload-wrapper {
            margin: 20px;
            border: 1px solid #dddddd;
            background-color: #f4f4f4;
            min-height: 350px;
            font-size: 15px;
            color: #888888;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
        
        .room-file-upload-example-container {
            display: flex;
            align-items: center;
            justify-content: center;
            /* height: 100%;
  width: 100%; */
        }
        
        .room-file-image-example-wrapper {
            text-align: center;
        }
        
        .room-file-notice-item {
            margin-top: 5px;
            text-align: center;
        }
        
        .room-file-notice-item-red {
            color: #ef4351;
        }
        
        .image-box {
            margin-top: 30px;
            padding-bottom: 20px;
            text-align: center;
        }
        
        .image-box input[type='file'] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
        }
        
        .image-box label {
            display: inline-block;
            padding: 10px 20px;
            background-color: #232d4a;
            color: #fff;
            vertical-align: middle;
            font-size: 15px;
            cursor: pointer;
            border-radius: 5px;
        }
        
        .file-preview-wrapper {
            padding: 10px;
            position: relative;
        }
        
        .file-preview-wrapper>img {
            position: relative;
            width: 190px;
            height: 130px;
            z-index: 10;
        }
        
        .file-close-button {
            position: absolute;
            /* align-items: center; */
            line-height: 18px;
            z-index: 99;
            font-size: 18px;
            right: 5px;
            top: 10px;
            color: #fff;
            font-weight: bold;
            background-color: #666666;
            width: 20px;
            height: 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .file-preview-container {
            height: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        
        .file-preview-wrapper-upload {
            margin: 10px;
            padding-top: 20px;
            background-color: #888888;
            width: 190px;
            height: 130px;
        }
        
        .room-write-button-wrapper {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #222222;
        }
        
        .room-write-button-wrapper>div {
            width: 160px;
            height: 50px;
            border: 1px solid #dddddd;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            cursor: pointer;
        }
        
        .room-write-button {
            margin-left: 15px;
            color: #fff;
            background-color: #1564f9;
        }
        
        .room-write-button:hover {
            opacity: 0.8;
        }







// input[id="menuicon"] {display:none;}
// input[id="menuicon"] + label {display: block; margin: 30px; width: 30px; height: 50px; position: relative; cursor: pointer;}


// div[class="sidebar"] {width: 300px; height: 100%; background: #222;position: fixed;top: 0;left: -300px;z-index: 1;transition: all .35s;}
// input[id="menuicon"]:checked + label + div {left: 0;}

// *{margin: 0; padding: 0;}
// .child-ul {font-size: 0; width: 850px;border: 1px solid #ccc;}
// .child-ul:after {content:'';clear: both;display: block;float: none;}
// .child-ul li {float:right;display: block;width: 33.3%;font-size: 12px;}
// .child-ul li:nth-child(2) {width: 66.6%;}
// .child-ul li:nth-child(2) a {height: 310px;}
// .child-ul li:nth-child(3) a {height: 310px; margin-top: -155px;}
// .child-ul li a {display: block; width: auto; margin: 5px; background: #ccc; height: 150px; transition: 1s;}
// .child-ul li:nth-child(1) a {background: url('../assets/img/main1.jpg') center center / 100% no-repeat;}
// .child-ul li:nth-child(2) a {background: url('../assets/img/main2.jpg') center center / 100% no-repeat;}
// .child-ul li:nth-child(3) a {background: url('../assets/img/main3.jpg') center center / 200% no-repeat;}
// .child-ul li:nth-child(4) a {background: url('../assets/img/main1.jpg') center center / 100% no-repeat;}
// .child-ul li:nth-child(5) a {background: url('../assets/img/main2.jpg') center center / 100% no-repeat;}
// .child-ul li a:hover {background-size: 110%;}
// .child-ul li:nth-child(3) a:hover {background-size: 210%;}
</style>