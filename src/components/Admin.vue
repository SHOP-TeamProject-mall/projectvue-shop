<template>
<div class="container">
    <div class="row mb-3">
      <div class="col-sm-6 col-lg-3 themed-grid-col">
        <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
          <a href="#" @click="changeMenu(1)" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
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
              <h3 style="margin-top:60px; margin-left:30px; width:115px; border-bottom:1px solid black;">상품등록</h3>
            <table border="1px solid black;"  >
                <thead>
                    <tr>
                        
                        <th>상품명</th>
                        <th>상품분류</th>
                        <th>수량</th>
                        <th>브랜드</th>
                        <th>할인(1~100% 숫자만)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" v-model="producttitle"></td>
                        <td>
                            <select  style="width:100%; text-align:center; border:none;" v-model="productcategory">
                                <option >남성상의</option>
                                <option >남성하의</option>
                                <option >남성외투</option>
                                <option >남성속옷</option>
                                <option >여성상의</option>
                                <option >여성하의</option>
                                <option >여성외투</option>
                                <option >여성속옷</option>         
                                <option >상품1</option>  
                                <option >상품2</option>  
                                <option >상품3</option>  
                            </select>
                            </td>
                        <td>
                            <select style="width:100%; text-align:center; border:none;" v-model="productquantity">
                                <option v-for="qnt in quantity" v-bind:key="qnt">{{qnt}}</option>
                            </select>
                            </td>
                        <td><input type="text" v-model="productbrand"></td>
                        <td><input type="text" v-model="productsale"></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th></th>
                        <th>옷감</th>
                        <th>가격</th>
                        <th>배송비</th>
                        <th>대표이미지</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="background:rgb(167, 165, 165); border:none;"></td>
                        <td><input type="text" v-model="productfabric"></td>
                        <td><input type="text" v-model="productprice"></td>
                        <td><input type="text" v-model="productdeliveryfee"></td>
                        <td><input type="file" @change="handleProductMainImage($event)"></td>
                    </tr>
                </tbody>
            </table>
            <div class="room-file-upload-wrapper">
                <div v-if="!files.length" class="room-file-upload-example-container">
                    <div class="room-file-upload-example">
                        <div class="room-file-image-example-wrapper">서브이미지</div>
                        <div class="room-file-notice-item">
                            실사진 최소 3장 이상 등록하셔야 됩니다.
                        </div>
                        <div class="room-file-notice-item room-file-upload-button">
                            <div class="image-box">
                                <label for="file">서브이미지 등록</label>
                                <input type="file" id="file" ref="files" @change="imageUpload()" multiple />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="file-preview-content-container">
                    <div class="file-preview-container">
                        <div v-for="(file, index) in files" :key="index" class="file-preview-wrapper">
                            <div class="file-close-button" @click="fileDeleteButton(index)" :name="file.number">
                                x
                            </div>
                            <img :src="file.preview" />
                        </div>
                        <div class="file-preview-wrapper-upload">
                            <div class="image-box">
                                <label for="file">추가 이미지 등록</label>
                                <input type="file" id="file" ref="files" @change="imageAddUpload($event)" multiple />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <button style="left:44%; position:relative; top:30px; font-size:20px; font-weight:bold; border:1px solid black; " @click="insertProduct">상품등록완료</button>
          </div>
      </div>

      <div class="col-6 col-lg-9 themed-grid-col" v-if="menu === 2">
          <div class="container1">
              <h3 style="margin-top:60px; margin-left:30px; width:115px; border-bottom:1px solid black;">상품관리</h3>
            <table border="1px solid black;" v-for="(product,idx) in productitems" v-bind:key="product" style="margin-bottom:-50px;">
                <thead>
                    <tr>
                        <th style="width:50px;">{{product.productno}}</th>
                        <th>상품명</th>
                        <th>상품분류</th>
                        <th>수량</th>
                        <th>브랜드</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-bottom:none;"></td>
                        <td><input type="text" v-model="productitems[idx].producttitle"></td>
                        <td>
                            <select name="aa" id="aa" style="width:100%; text-align:center; border:none;" v-model="productitems[idx].productcategory">
                                <option >{{product.productcategory}}</option>
                                <option >남성상의</option>
                                <option >남성하의</option>
                                <option >남성외투</option>
                                <option >남성속옷</option>
                                <option >여성상의</option>
                                <option >여성하의</option>
                                <option >여성외투</option>
                                <option >여성속옷</option>         
                                <option >상품1</option>  
                                <option >상품2</option>  
                                <option >상품3</option>  
                            </select>
                            </td>
                        <td>
                            <select name="bb" id="bb" style="width:100%; text-align:center; border:none;" v-model="productitems[idx].productquantity">
                                <option>{{product.productquantity}}</option>
                                <option v-for="qnt in quantity" v-bind:key="qnt">{{qnt}}</option>
                            </select>
                            </td>
                        <td><input type="text"  v-model="productitems[idx].productbrand"></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th style="width:50px; border-bottom:none; border-top:none; background:none;"></th>
                        <th>옷감</th>
                        <th>가격</th>
                        <th>배송비</th>
                        <th>할인율(%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-top:none;"></td>
                        <td><input type="text" v-model="productitems[idx].productfabric"></td>
                        <td><input type="text" v-model="productitems[idx].productprice"></td>
                        <td><input type="text" v-model="productitems[idx].productdeliveryfee"></td>
                        <td><input type="text" v-model="productitems[idx].productsale"></td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th style="width:50px; border-bottom:none; border-top:none; background:none;"></th>
                        <th>대표이미지</th>
                        <th>서브이미지</th>
                        <th>최종가격</th>
                        <th>버튼</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="width:50px; border-top:none;"></td>
                        <td><img :src="`/HOST/product/select_productmain_image.json?productno=${product.productno}`" alt="" style="width:50px; height:50px;"><input type="file" @change="handleUpdateProductMainImage($event)"></td>
                        <td >
                          <button style="background:green; color:white;" @click="subimageadminmodal(product.productno)">서브이미지관리</button>
                          
                          </td>
                        <td><input type="text" readonly v-model="productitems[idx].productfinalprice"></td>
                        <td>
                          <div><button style="width:50%; background:blue; margin-top:5px; color:white;" @click="updateproduct(idx)">상품정보수정</button></div>
                          <div><button style="width:50%; background:pink; margin-top:5px; margin-bottom:5px; color:black;" @click="openoptionmodal(product.productno)" >상품옵션관리</button></div>
                          <div><button style="width:50%; background:red; margin-bottom:5px; color:white;" @click="DeleteProduct(product.productno)">상품삭제</button></div>
                          
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>

              <ol class="ppagenation">
                <li class="ppagenation_First"><a href="#" @click="productpagenation(idx = 1)"></a></li>
                <li class="ppagenation_Prev"><a href="#" ></a></li>
                <li v-for="(productpagetion,idx) in ppages" v-bind:key="productpagetion"><a href="#" @click="productpagenation(idx+1)" >{{idx+1}}</a></li>
                <li class="ppagenation_Next"><a href="#" ></a></li>
                <li class="ppagenation_Last"><a href="#" @click="productpagenation(idx = ppages)"></a></li>
              </ol>

            </div>
          </div>
      </div>
    </div>

</div>
<!-- 브랜드 / 상품명 / 제품명 / 제조사 / 가격 / 배송비 / 착불 , 선불 / (대표이미지) / 개별이미지 -->
 
<!-- 상품(옵션) MODAL ======================================================================================================================================= -->
    <div class="option_modal" v-if="optionmodal === true">
      <div id="optionmodal_close" @click="optionmodal_cancle"></div>
      <div id="optionmodal_close_bg"></div>
      <!-- 옵션추가 -->
      <div class="option_modal_header">
          <div class="int-area">
              <input type="text" name="name" id="name"  autocomplete="off" required v-model="productoptionname" >
              <label for="name">옵션명</label>
          </div>
          <div class="int-area">
              <input type="text" name="name" id="name"  autocomplete="off" required v-model="productoptionsize" >
              <label for="name">사이즈</label>
          </div>
          <div class="int-area1">
              <input type="text" name="name" id="name"  autocomplete="off" required v-model="productoptioncolor" >
              <label for="name">컬러</label>
          </div>
          <div class="int-area1">
              <input type="text" name="name" id="name"  autocomplete="off" required v-model="productoptionadditionalamount" >
              <label for="name">추가금액</label>
          </div>
          <div class="int-area2">
              <input type="file"  style="font-size:13px; font-weight:bold; position:relative; left:-30px; " @change="handleProductOptionImage($event)">
          </div>
          <div class="int-area2">
              <input type="submit" style="font-size:20px; font-weight:bold; position:relative; left:50px; " value="옵션추가" @click="insertProductOption">
          </div>
      </div>
      <!-- 옵션조회 -->
      <div class="option_modal_body">
        <section v-for="(productoption,idx) in productoptionitems" v-bind:key="productoption">
        <table style="margin-top:0;" >
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
              <td>{{productoption.productoptionno}}</td>
              <td><input type="text" v-model="productoptionitems[idx].productoptionname"></td>
              <td><input type="text" v-model="productoptionitems[idx].productoptionsize"></td>
              <td><input type="text" v-model="productoptionitems[idx].productoptioncolor"></td>
              <td><input type="text" v-model="productoptionitems[idx].productoptionadditionalamount"></td>
              <td><button @click="UpdateProductOption(idx)">수정완료</button><button style="background:red; color:white; margin-left:5px;" @click="DeleteProductOption(idx)">삭제</button></td>
            </tr>
          </tbody>
        </table>
          <div style="position:relative; text-align:center; margin:10px;">
            <img :src="`/HOST/productoption/select_productoption_image.json?productoptionno=${productoption.productoptionno}`" style="width:100px; height:100px; background-color:white; display: inline;" alt=""> 
            <input type="file" style="margin-left: 50px;" @change="handleUpdateProductOptionImage($event)">
          </div>

        </section>
      </div>
      <!-- 모달 close 버튼 -->
      <div class="option_modal_footer">
          <button @click="optionmodal_cancle">닫기</button>
      </div>
    </div>

    <!-- 서브 이미지 모달 ==================================================================================================================================== -->
    <div class="subimage_modal" v-if="subimageadminmodalkey === true">
      <div id="subimage_modal_close" @click="subimageadminmodalkey = false"></div>
      <div id="subimage_modal_close_bg"></div>
      <!-- 이미지추가 -->
      <div class="subimage_modal_header">
        <div style="margin-top:50px;">
        <input type="file" @change="handleAddProductSubImage($event)"> <button @click="AddSubImage">서브이미지추가</button>
        <p style="margin-top:20px; font-weight:bold;"><img src="@/assets/img/siren.png" style="width:30px; height:30px;" alt=""> 이미지 삭제 및 변경을 하려면 이미지를 클릭하세요</p>
        </div>
      </div>
      <!-- 옵션조회 -->
      <div class="subimage_modal_body">
        <section >
          <span v-for="(subimage,idx) in productsubimageidx" v-bind:key="subimage">
          <button @click="Sub_image_management(idx)"><img :src="`/HOST/product/select_productsub_image.json?productno=${this.productsubmodal_productno}&productidx=${subimage}`" alt="" style="width:160px; height:160px;" ></button>
          </span>
        </section>
      </div>
      <!-- 모달 close 버튼 -->
      <div class="subimage_modal_footer">
          <button @click="subimageadminmodalkey = false">닫기</button>
      </div>
    </div>

    <!-- 서브 이미지 모달 ==================================================================================================================================== -->
    <div class="subimage_modal" v-if="subimageadminmodalkey1 === true">
      <div id="subimage_modal_close" @click="subimageadminmodalkey1 = false"></div>
      <div id="subimage_modal_close_bg"></div>
      <!-- 이미지추가 -->
      <div class="subimage_modal_header">
        <div style="margin-top:50px;">
        <input type="file" @change="handleAddProductSubImage($event)"> <button @click="AddSubImage">서브이미지추가</button>
        <p style="margin-top:20px; font-weight:bold;"><img src="@/assets/img/siren.png" style="width:30px; height:30px;" alt=""> 이미지 삭제 및 변경을 하려면 이미지를 클릭하세요</p>
        </div>
      </div>
      <!-- 옵션조회 -->
      <div class="subimage_modal_body">
        <section >
          <span v-for="(subimage,idx) in productsubimageidx" v-bind:key="subimage">
          <button @click="Sub_image_management(idx)"><img :src="`/HOST/product/select_productsub_image.json?productno=${this.productsubmodal_productno}&productidx=${subimage}`" alt="" style="width:160px; height:160px;" ></button>
          </span>
        </section>
      </div>
      <!-- 모달 close 버튼 -->
      <div class="subimage_modal_footer">
          <button @click="subimageadminmodalkey1 = false">닫기</button>
      </div>
    </div>

    

        <!-- 서브 관리 모달 ==================================================================================================================================== -->
    <div class="management_subimage_modal" v-if="management_subimage_modal === true">
      <div id="management_subimage_modal_close_bg"></div>
      <!-- 옵션추가 -->
      <div class="management_subimage_modal_img">
        <img :src="`/HOST/product/select_productsub_image.json?productno=${this.productsubmodal_productno}&productidx=${this.management_subimage_idx}`" alt=""  >
      </div>
      <!-- 옵션조회 -->
      <div class="management_subimage_modal_body">
        <section >

        </section>
      </div>
      <!-- 모달 close 버튼 -->
      <div class="management_subimage_modal_footer">
          <button @click="management_subimage_modal_cancel">닫기</button>
          <input type="file" style="position:absolute; bottom:90px; left:50px;" @change="handleUpdateProductSubImage($event)"> <button style="left:50px; background:blue;" @click="UpdateProductSubImage()">이미지저장</button>
          <button style="left:370px; background:red; ">삭제</button>
      </div>
    </div>

        <!-- 서브 관리 모달 ==================================================================================================================================== -->
    <div class="management_subimage_modal" v-if="management_subimage_modal1 === true">
      <div id="management_subimage_modal_close_bg"></div>
      <!-- 옵션추가 -->
      <div class="management_subimage_modal_img">
        <img :src="`/HOST/product/select_productsub_image.json?productno=${this.productsubmodal_productno}&productidx=${this.management_subimage_idx}`" alt=""  >
      </div>
      <!-- 옵션조회 -->
      <div class="management_subimage_modal_body">
        <section >

        </section>
      </div>
      <!-- 모달 close 버튼 -->
      <div class="management_subimage_modal_footer">
          <button @click="management_subimage_modal_cancel">닫기</button>
          <input type="file" style="position:absolute; bottom:90px; left:50px;" @change="handleUpdateProductSubImage($event)"> <button style="left:50px; background:blue;" @click="UpdateProductSubImage()">이미지저장</button>
          <button style="left:370px; background:red; ">삭제</button>
      </div>
    </div>
    
</template>

<script>
  import axios from "axios";
  export default {
    data(){
        return{
            quantity:1000,
            category:11,
            menu:1,
            productidx:0,
            optionmodal:false,
            subimageadminmodalkey:false,
            subimageadminmodalkey1:false,
            files: [], //업로드용 파일
            filesPreview: [],
            uploadImageIndex: 0, // 이미지 업로드를 위한 변수
            page:1,
            ppages:"",
            productitems:"",
            idxs:[1,2,3,4,5,6],
            productsubmodal_productno:"",
            management_subimage_modal:false,
            management_subimage_modal1:false,
            management_subimage_idx:"",

            // product
            productcategory:[],
            producttitle:"",
            productquantity:[],
            productbrand:'',
            productfabric:'',
            productprice:0,
            productdeliveryfee:0,
            productsale:0,
            productfinalprice:0,
            productmainimage:"",
            productsubimage:"",
            productitemsone:"",
            productsubimageidx:"",
            
            

            // update product
            updateproductcategory:[],
            updateproducttitle:"",
            updateproductquantity:[],
            updateproductbrand:'',
            updateproductfabric:'',
            updateproductprice:0,
            updateproductdeliveryfee:0,
            updateproductsale:0,
            updateproductfinalprice:0,
            updateproductmainimage:"",
            updateproductitemsone:"",
            updateproductsubimageidx:0,
            productsubimageidxreflash:0,
            

            // productoption
            productoptionname:"",
            productoptionsize:"",
            productoptioncolor:"",
            productoptionadditionalamount:0,
            productoptionimage:"",
            productoption_productno:0,
            productoptionitems:""

        }
    },
    methods:{
        Sub_image_management(idx){
          // confirm(idx)
          this.management_subimage_modal = true;
          this.management_subimage_idx = idx+1;
          // console.log(idx);
          this.updateproductsubimageidx = idx+1;
          this.productsubimageidxreflash = idx;
          console.log(this.productsubimageidxreflash);
          console.log(this.productsubmodal_productno);
        },
        changeMenu(menu){
          this.menu = menu;
          if(menu === 1){
            this.menu = 1;
          
          }
          else if(menu === 2){
            this.selectProduct();
          }
        },
        handleProductMainImage(e){
          this.productmainimage = e.target.files[0];
        },
        handleUpdateProductMainImage(e){
          this.productmainimage = e.target.files[0];
        },
        handleUpdateProductSubImage(e){
          this.productsubimage = e.target.files[0];
        },
        handleAddProductSubImage(e){
          this.productsubimage = e.target.files[0];
        },
        handleProductOptionImage(e){
          this.productoptionimage = e.target.files[0];
        },
        handleUpdateProductOptionImage(e){
          this.productoptionimage = e.target.files[0]
        },
        imageUpload() {
            // console.log(this.$refs.files.files);

            // this.files = [...this.files, this.$refs.files.files];
            //하나의 배열로 넣기
            let num = -1;
            for (let i = 0; i < this.$refs.files.files.length; i++) {
              // console.log(this.uploadImageIndex);
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
                    }
                ];
                num = i;
                //이미지 업로드용 프리뷰
                this.filesPreview = [
                  ...this.filesPreview,
                  { file: URL.createObjectURL(this.$refs.files.files[i]), number: i }
                ];

            }
            this.uploadImageIndex = num + 1; //이미지 index의 마지막 값 + 1 저장
            // console.log(this.filesPreview);
        },


        imageAddUpload(e) {
          console.log(e);
            // console.log(this.$refs.files.files);
            this.files.push({ 
                  file: e.target.files[0],
                  preview: URL.createObjectURL(e.target.files[0]),
            });
            // console.log(this.files);
        },


        fileDeleteButton(idx) {
          console.log(idx);
          let tmp = [];
          for(let i=0;i<this.files.length;i++){
            if(idx !== i){
              tmp.push(this.files[i]);
            }
          }
          this.files = tmp;
        },


        //상품등록 ==================================================================================================================
        async insertProduct(){
          if(this.productmainimage === ""){
            return alert("메인이미지를 업로드하세요");
          }
          if(this.filesPreview.length < 1){
            return alert("서브이미지를 업로드하세요");
          }
          if(this.producttitle === ""){
            return alert("상품명을 입력하세요");
          }
          if(this.productcategory.length === 0){
            return alert("상품카테고리를 선택하세요");
          }
          if(this.productbrand === ""){
            return alert("브랜드를 입력하세요");
          }
          if(this.productprice === ""){
            return alert("가격을 입력하세요");
          }
          if(this.productfabric === ""){
            return alert("옷감을 입력하세요");
          }
          if(this.productquantity.length === 0){
            return alert("수량을 선택하세요");
          }
          if(this.productdeliveryfee === ""){
            return alert("배송비를 입력하세요");
          }
          this.productfinalprice = this.productprice - (this.productprice*this.productsale/100);
          console.log(this.productfinalprice);
          const headers = { "Content-Type": "application/json" };
          const url = `/HOST/product/insertproduct.json`;
          const body = {
            producttitle : this.producttitle,
            productcategory : this.productcategory,
            productbrand : this.productbrand,
            productprice : this.productprice,
            productfabric : this.productfabric,
            productquantity : this.productquantity,
            productdeliveryfee : this.productdeliveryfee,
            productsale : this.productsale,
            productfinalprice : this.productfinalprice
          };
          const response = await axios.post(url,body, {headers:headers});
          console.log(response);

          const headers1 = { "Content-Type": "multipart/form-data" };
          const url1 = `/HOST/product/insertproduct_subimage.json?productno=${response.data.no}`;
          const formData1 = new FormData();
          
            for(var i=0; i<this.files.length; i++){
              formData1.append("product_subfile", this.files[i].file);
            }
              const response1 = await axios.post(url1, formData1, { headers:headers1 });
              console.log(response1);

            const headers2 = { "Content-Type": "multipart/form-data" };
            const url2 = `/HOST/product/insertproduct_mainimage.json?productno=${response.data.no}`;
            const formData2 = new FormData();

            formData2.append("product_mainfile", this.productmainimage);
            const response2 = await axios.post(url2, formData2, { headers:headers2 });
            console.log(response2);
        },
        async selectProduct(){
          const url = `/HOST/product/select_product.json?page=${this.page}&title=&brand=`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          console.log(response.data);
          if(response.status === 200){
            this.productitems = response.data.list;
            // console.log(this.productitems);
            this.ppages = response.data.ppage;

            console.log(this.ppages);
          }
        },
        async productpagenation(idx){
          console.log("222");
          const url = `/HOST/product/select_product.json?page=${idx}&title=?&brand=`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          console.log(response);
          if(response.status === 200){
            this.productitems = response.data.list;
            console.log(this.productitems);
          }
        },
        async subimageadminmodal(productno){
          this.subimageadminmodalkey = true;
          
          console.log(productno);
          console.log(this.productsubmodal_productno);
          const url = `/HOST/product/selectone_product.json?productno=${productno}`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          // console.log(response);
          if(response.status === 200){
            this.productitemsone = response.data.list;
            this.productsubimageidx = response.data.list.productsubimageidx;
            console.log(this.productsubimageidx);
            console.log(this.productitemsone);
            this.productsubmodal_productno = productno;
          }
        },
        async updateproduct(idx){
          console.log(idx);
          console.log(this.productitems[idx].productno);
          this.productitems[idx].productfinalprice = this.productitems[idx].productprice - (this.productitems[idx].productsale*this.productitems[idx].productprice /100);
            const url = `/HOST/product/product_update.json?page=${this.page}&productno=${this.productitems[idx].productno}`;
            const headers = { "Content-Type": "application/json" };
            const body = {
            producttitle : this.productitems[idx].producttitle,
            productcategory : this.productitems[idx].productcategory,
            productbrand : this.productitems[idx].productbrand,
            productprice : this.productitems[idx].productprice,
            productfabric : this.productitems[idx].productfabric,
            productquantity : this.productitems[idx].productquantity,
            productdeliveryfee : this.productitems[idx].productdeliveryfee,
            productsale : this.productitems[idx].productsale,
            productfinalprice : this.productitems[idx].productfinalprice
            };
          
            const response = await axios.put(url,body, {headers:headers});
            console.log(response.data);
            console.log(this.productitems[idx]);

          const headers2 = { "Content-Type": "multipart/form-data" };
          const url2 = `/HOST/product/update_product_mainimage.json?${this.page}&productno=${this.productitems[idx].productno}`;
          const formData2 = new FormData();

          formData2.append("updatemainimage", this.productmainimage);
          const response2 = await axios.post(url2, formData2, { headers:headers2 });
          console.log(response2);

            this.selectProduct();
        },
        async UpdateProductSubImage(){
          // console.log(this.productsubmodal_productno);
          // console.log(this.productsubimageidxreflash);
          console.log(this.updateproductsubimageidx);
          // const idx = this.productsubimageidxreflash;
          const headers = { "Content-Type": "multipart/form-data" };
          const url = `/HOST/product//update_product_subimage.json?productno=${this.productsubmodal_productno}&productidx=${this.updateproductsubimageidx}`;
          const formData = new FormData();

          formData.append("updatesubimage", this.productsubimage);
          const response = await axios.post(url, formData, { headers:headers });
          console.log(response);
          this.management_subimage_modal = !this.management_subimage_modal;
          this.subimageadminmodalkey = !this.subimageadminmodalkey;
          this.subimageadminmodalkey1 = !this.subimageadminmodalkey1;

          // this.Sub_image_management(this.productsubimageidxreflash);
        },
        async AddSubImage(){

          console.log(this.productsubmodal_productno);
          let idx = this.productsubimageidx + 1;
          console.log(idx);

          const headers1 = { "Content-Type": "multipart/form-data" };
          const url1 = `/HOST/product/add_product_subimage.json?productno=${this.productsubmodal_productno}&productidx=${idx}`;
          const formData1 = new FormData();

          formData1.append("addsubimage", this.productsubimage);
          const response1 = await axios.post(url1, formData1, { headers:headers1 });
          console.log(response1);
          if(response1.status === 200){
            console.log("dfsdffdfdsfsdfsd");
            const url = `/HOST/product/update_product_subimage_idx.json?productno=${this.productsubmodal_productno}`;
            const headers = { "Content-Type": "application/json" };

            const response = await axios.put(url, {headers:headers});
            console.log(response);
            this.subimageadminmodalkey = !this.subimageadminmodalkey;
            this.subimageadminmodal(this.productsubmodal_productno);
          }
        },
        management_subimage_modal_cancel(){
          // console.log(this.productsubmodal_productno);
          this.management_subimage_modal = false;
          // console.log(this.subimageadminmodal());
        },
        async DeleteProduct(productno){
          console.log(productno);
            const url = `/HOST/product/deleteProduct.json?productno=${productno}`;
            const headers = { "Content-Type": "application/json" };
            const response = await axios.delete(url, {headers:headers});
          console.log(url);
            console.log(response);
        },
        //옵션추가 ==================================================================================================================
        async insertProductOption(){
          console.log(this.productoption_productno);
          const headers = { "Content-Type": "application/json" };
          const url = `/HOST/productoption/insert_productoption.json?productno=${this.productoption_productno}`;
          const body = {
            productoptionname : this.productoptionname,
            productoptionsize : this.productoptionsize,
            productoptioncolor : this.productoptioncolor,
            productoptionadditionalamount : this.productoptionadditionalamount
          };
          const response = await axios.post(url,body, {headers:headers});
          console.log(response);

          const headers2 = { "Content-Type": "multipart/form-data" };
          const url2 = `/HOST/productoption/insert_productoption_image.json?productoptionno=${response.data.option.productoptionno}`;
          const formData2 = new FormData();

          formData2.append("product_optionfile", this.productoptionimage);
          const response2 = await axios.post(url2, formData2, { headers:headers2 });
          console.log(response2);

          this.openoptionmodal(this.productoption_productno);
         },
        async openoptionmodal(productno){
          this.productoption_productno = productno;
          this.optionmodal = true;
          const url = `/HOST/productoption/select_productoption.json?productno=${this.productoption_productno}`;
          const headers = { "Content-Type": "application/json" };
          const response = await axios.get(url, { headers });
          // console.log(response);
          // console.log(productno);
          if(response.status === 200){
            this.productoptionitems = response.data.list;
            // console.log(this.productoptionitems.productno);
            // console.log(this.productoptionitems);
          }
          
        },
        async UpdateProductOption(idx){
          console.log(idx);
          console.log(this.productoptionitems[idx]);
          console.log(this.productoptionitems[idx].productoptionno)
          const headers = { "Content-Type": "application/json" };
          const url = `/HOST/productoption/update_productoption.json?productoptionno=${this.productoptionitems[idx].productoptionno}`;
          const body = {
            productoptionname : this.productoptionitems[idx].productoptionname,
            productoptionsize : this.productoptionitems[idx].productoptionsize,
            productoptioncolor : this.productoptionitems[idx].productoptioncolor,
            productoptionadditionalamount : this.productoptionitems[idx].productoptionadditionalamount
          };
          const response = await axios.put(url, body, {headers:headers});
          console.log(response);

          const headers2 = { "Content-Type": "multipart/form-data" };
          const url2 = `/HOST/productoption/update_productoptionImage.json?productoptionno=${this.productoptionitems[idx].productoptionno}`;
          const formData2 = new FormData();

          formData2.append("updateproductoptionimage", this.productoptionimage);
          const response2 = await axios.post(url2, formData2, { headers:headers2 });
          console.log(response2);

          // console.log(this.productoption_productno);
          this.openoptionmodal(this.productoption_productno);
        },
        // 옵션모달 닫기
        optionmodal_cancle(){
          this.optionmodal = false;
          this.productoptionname = "";
          this.productoptionsize = "";
          this.productoptioncolor = "";
          this.productoptionadditionalamount = 0;
          this.productoptionimage = null;
        },
        async DeleteProductOption(idx){
          console.log(this.productoptionitems[idx].productoptionno)
            const url = `/HOST/productoption/delete_productoption.json?productoptionno=${this.productoptionitems[idx].productoptionno}`;
            const headers = { "Content-Type": "application/json" };
            const response = await axios.delete(url, {headers:headers});
          console.log(url);
            console.log(response);
        },
        created(){
            this.changeMenu();

        }
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
  border: 1px solid black;
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
  width: 999px;
  height: 30px;
  border-start-start-radius: 25px;
  border-start-end-radius: 25px;
}
div[class="option_modal_header"]{
  position: absolute;
  top: 30px;
  left: 0%;
  width: 999px;
  height: 150px;
  border-bottom: 1px solid black;
}
div[class="option_modal_body"]{
  position: absolute;
  top: 180px;
  left: 0%;
  width: 998px;
  height: 450px;
  overflow-y: auto;
  border-bottom: 1px solid black;
}
div[class="option_modal_footer"]{
  position: absolute;
  top: 630px;
  left: 0%;
  border-end-start-radius: 25px;
  border-end-end-radius: 25px;
  width: 1000px;
  height: 70px;
}
div[class="option_modal_footer"] button{
  position: absolute;
  top: 25%;
  left: 48%;
  color: white;
  background: black;
  font-size: 18px;
  border-radius: 6px;
  font-weight: bold;
}

//서브이미지 모달 =========================================================================================================================
div[class="subimage_modal"]{
  position: fixed;
  top: 50%;
  left: 50%;
  border: 1px solid black;
  border-radius: 25px;
  background: white;
  transform: translate(-50%,-50%);
  width: 1000px;
  height: 700px;
  z-index: 2;
}
// 모달 닫기
#subimage_modal_close{
  position: absolute;
  top: 0%;
  left: 96.5%;
  background: url('../assets/img/close.png') center center / 100% no-repeat;
  width: 30px;
  height: 30px;
  z-index: 1;
}
#subimage_modal_close_bg{
  position: absolute;
  top: 0%;
  left: 0%;
  background:#999;
  border-bottom: 1px solid black;
  width: 999px;
  height: 30px;
  border-start-start-radius: 25px;
  border-start-end-radius: 25px;
}
div[class="subimage_modal_header"]{
  position: absolute;
  text-align: center;
  vertical-align: middle;
  top: 30px;
  left: 0%;
  width: 999px;
  height: 150px;
  border-bottom: 1px solid black;
}
div[class="subimage_modal_body"]{
  position: absolute;
  vertical-align: middle;
  text-align: center;
  top: 180px;
  left: 0%;
  width: 998px;
  height: 450px;
  overflow-y: auto;
  border-bottom: 1px solid black;
}
div[class="subimage_modal_body"] button{
  position: relative;
  top: 50px;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
}
div[class="subimage_modal_footer"]{
  position: absolute;
  top: 630px;
  left: 0%;
  border-end-start-radius: 25px;
  border-end-end-radius: 25px;
  width: 1000px;
  height: 70px;
}
div[class="subimage_modal_footer"] button{
  position: absolute;
  top: 25%;
  left: 48%;
  color: white;
  background: black;
  font-size: 18px;
  border-radius: 6px;
  font-weight: bold;
}

// 서브이미지 모달 관리 ===================================================================================================================
div[class="management_subimage_modal"]{
  position: fixed;
  top: 50%;
  left: 50%;
  border: 1px solid black;
  border-radius: 25px;
  background: white;
  transform: translate(-50%,-50%);
  width: 500px;
  height: 670px;
  z-index: 2;
}
div[class="management_subimage_modal_img"] {
  position: absolute;
  top: 3%;
  left: 10%;
  color: white;
  width: 400px;
  font-size: 18px;
  border-radius: 6px;
  font-weight: bold;
}
div[class="management_subimage_modal_img"] img {
  width: 400px;
  height: 500px;
}
// 모달 닫기
div[class="management_subimage_modal_footer"] button{
  position: absolute;
  bottom: 6%;
  left: 46%;
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
    text-align: center;
    padding: 0; margin: 0;
    border: none;
}


.container1{
    height: 110vh;
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

// 서브이미지 업로드
.room-file-upload-wrapper {

  border: 1px solid #dddddd;
  background-color: #f4f4f4;
  min-height: 500px;
  overflow-y:auto;
  font-size: 15px;
  color: #888888;
  display: flex;
  align-items: center;
  justify-content: center;
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
    left:10%;
    width: 207px;
    height: 240px;
    z-index: 10;
}

.file-close-button {
    position: absolute;
    /* align-items: center; */
    line-height: 18px;
    z-index: 99;
    font-size: 18px;
    right: -9px;
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
    position: relative;
    margin: 10px;
    padding-top: 20px;
    background-color: #888888;
    width: 190px;
    height: 130px;
    left:2%;
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

// 옵션 등록
.int-area{
    width: 550px;
    left: 15%;
    top: 0;
    position: relative;
    margin-top: 10px;
}
.int-area:first-child{
    margin-top: 0;
}
.int-area input{
    font-family: 'Noto Sans KR', sans-serif;
    width: 30%;
    padding: 20px 10px 10px;
    background-color: transparent;
    text-align: center;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 16px; color: black;
    outline: none;
    font-weight: bold;
}
.int-area label{
    position: absolute; left: -90px; top: 25px;
    font-size: 16px; color: black;
    font-weight: bold;
}

.int-area1{
    width: 550px;
    left: 45%;
    top: -87%;
    position: relative;
    margin-top: 10px;
}
.int-area1:first-child{
    margin-top: 0;
}
.int-area1 input{
    font-family: 'Noto Sans KR', sans-serif;
    width: 30%;
    padding: 20px 10px 10px;
    background-color: transparent;
    text-align: center;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 16px; color: black;
    font-weight: bold;
    outline: none;
}
.int-area1 label{
    position: absolute; left: -90px; top: 25px;
    font-size: 16px; color: black;
    font-weight: bold;
}

.int-area2{
    width: 400px;
    left: 70%;
    top: -160%;
    position: relative;
    margin-top: 20px;
}

// 페이지 네이션 ===============================================================================================
.ppagenation {text-align: center; padding: 150px 0;}
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

</style>