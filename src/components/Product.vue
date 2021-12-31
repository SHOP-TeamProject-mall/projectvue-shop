<template>
  <div class="container1">
    <div class="row mb-3">
      <div class="col-sm-6 col-lg-3 themed-grid-col">
        <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
          <a href="#" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"  @click="ChangMenu(1)">
            <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
            <span style="padding-right:20px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" style="color:teal;" class="bi bi-shop" viewBox="0 0 16 16">
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
              </svg>
            </span>
            <span class="fs-5 fw-semibold">Product category</span>
          </a>
          <ul class="list-unstyled ps-0">
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                남성
              </button>
              <div class="collapse" id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded" ref="side" @click="ChangMenu(1)">남성상의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(2)">남성하의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(3)">남성외투</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(4)">남성속옷</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                여성
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(5)">여성상의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(6)">여성하의</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(7)">여성외투</a></li>
                  <li><a href="#" class="link-dark rounded" @click="ChangMenu(8)">여성속옷</a></li>
                </ul>
              </div>
            </li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                악세서리
              </button>
              <div class="collapse" id="orders-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><a href="#" class="link-dark rounded">New</a></li>
                  <li><a href="#" class="link-dark rounded">Processed</a></li>
                  <li><a href="#" class="link-dark rounded">Shipped</a></li>
                  <li><a href="#" class="link-dark rounded">Returned</a></li>
                </ul>
              </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
              <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                기타기능
              </button>
              <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <input type="checkbox" id="wishlist">
                    <label for="wishlist">
                      찜목록
                    </label>
                    <div class="sidebar_wishlist">
                      <div style="padding:50px;">
                        <input type="checkbox" id="wishlist">
                        <label for="wishlist" style="position: absolute; top: 0%; left:-4%; width:50px; height:40px;">
                          <img src="../assets/img/close.png" style="width:30px; background:pink;" alt="">
                        </label>
                      </div>
                      <!-- 찜목록내용 여기에 작성하시면 됩니다. -->
                        <table class="table table-striped" style="border: 1px solid rgb(139, 126, 126)">
                          <thead>
                            <tr>
                                <th><input type="checkbox" v-model="allcheckbox" @click="allcheckbox1">전체선택</th>
                                <th colspan="2">상품정보</th>
                                <th class="w130">단가</th>
                                <th class="w130">수량</th>
                                <th class="w130">상품금액</th>
                                <th class="w100">주문</th>
                                <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in wishlist" v-bind:key="item" >
                              <td><input type="checkbox" v-model="chks" :value="item.PRODUCT_NO" /></td>
                              <td><img :src="`/HOST/wish/wishselect_image?no=${item.PRODUCT_NO}`" style="width:200px;height:100px" /></td><br />
                              <td>{{item.DELIVERYFEE}}</td>
                              <td>{{item.PRODUCT_BRAND}}</td>
                              <td>{{item.PRODUCT_CATEGORY}}</td>
                              <td>{{item.PRODUCT_DATE}}</td>
                              <td>{{item.PRODUCT_FABRIC}}</td>
                              <td>{{item.PRODUCT_NO}}</td>
                              <td>{{item.PRODUCT_PRICE}}</td>
                              <td>{{item.PRODUCT_QUANTITY}}</td>
                              <td>{{item.PRODUCT_TITLE}}</td>
                              <td style="width:200px;"><button @click="handlewishdelete(item.MEMBERWISH_NO
                              )">삭제하기</button><button>장바구니 담기</button></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                  </li>
                  <li>
                    <input type="checkbox" id="basket">
                    <label for="basket">
                      장바구니
                    </label>
                    <div class="sidebar_basket">
                      <div style="padding:50px;">
                        <input type="checkbox" id="basket">
                        <label for="basket" style="position: absolute; top: -1%; left:-1%; width:50px; height:40px;">
                          <img src="../assets/img/close.png" style="width:30px; background:pink;"  alt="">
                        </label>
                      </div>
                      <!-- 장바구니내용 여기에 작성하시면 됩니다. -->
                    </div>
                  </li>
                  <li>
                    <input type="checkbox" id="orderlist">
                    <label for="orderlist">
                      주문목록
                    </label>
                  </li>
                  <li><a href="#" class="link-dark rounded">Sign out</a></li>
                </ul>

              </div>
            </li>
          </ul>
        </div>
      </div>



                                                              <!-- MENU 번호 ( code 찾기 : menu===1/2/3/4/5/6/7/8 )
                                                                  메뉴1 : 남성상의  메뉴5 : 여성상의
                                                                  메뉴2 : 남성하의  메뉴6 : 여성하의
                                                                  메뉴3 : 남성외투  메뉴7 : 여성외투
                                                                  메뉴4 : 남성속옷  메뉴8 : 여성속옷  -->

      <div class="col-6 col-lg-9 themed-grid-col mt-5" v-if="menu===1">
        <div class="row" >
          <div class="col-2">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" @change="latestorder($event)">
              <option selected >보기</option>
              <option value="최신순">최신순</option>
              <option value="인기순">인기순</option>
              <option value="주문순">주문순</option>
            </select>
          </div>
          <div class="col-md-3">
          </div>
          <div class="col col-lg-7">
            <div class="input-group mb-3" style="width:300px; float:right;">
              <input type="text" class="form-control" placeholder="상품명 검색" aria-label="Recipient's username" aria-describedby="button-addon21" v-model="searchproduct" @keyup.enter="selectProduct">
              <button style="background-color:pink; border:1px solid pink;" type="button" id="button-addon21" @click="selectProduct(this.searchproduct)">검색</button>
            </div>
          </div>
        </div>
        <div class="row mb-3 mt-5">
          <div class="col-4 themed-grid-col" v-for="product in productitems" v-bind:key="product" style="margin-bottom:20px;">
            <input type="checkbox" id="menuicon" >
            <label for="menuicon" @click="selectoneProduct(product.productno)">
              <div class="col-4 themed-grid-col">
                <div class="card" style="width: 19rem;  border:0;">
                <img :src="`/HOST/product/select_productmain_image.json?productno=${product.productno}`" style="height:435px;" class="card-img-top" alt="...">
                  <div class="card-body">
                      <span style="color:red;">{{product.productsalecheck}}</span>
                      <span style="float:right; font-weight:bold;">{{product.producttitle}}</span>
                      <div style="text-decoration:line-through;">{{product.productprice}}won</div>
                      <div style="color:blue;">{{product.productfinalprice}}won</div>
                      <div>
                        <span> 리뷰 : 1 </span>
                        <span style="float:right;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="color:red;" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                          </svg>{{wishcount}}
                        </span>
                    </div>
                      <div style="background:red; float:right;"><span style="color:gold;">{{product.productdeliveryfeecheck}}</span><span style="color:white;">배송</span></div>
                  </div>
                </div>
              </div>
            </label>
            <!-- 사이드바 -->
            <div class="sidebar">
              <div style="padding:50px;">
                <input type="checkbox" id="menuicon">
                <label for="menuicon" style="position: absolute; top: 0%; right: 0%;">
                  <img src="../assets/img/close.png" style="width:30px; background:pink;" alt="">
                </label>
              </div>
              <!-- 이미지 모달 -->
              <input type="checkbox" id="popup">
              <label for="popup">
                <img :src="`/HOST/product/select_productmain_image.json?productno=${productitemsone.productno}`" alt="">
                <div style="color:black; margin-left:50px;">
                  <p >[이미지를 클릭하시면 상품의 이미지를 볼 수 있습니다]</p>
                </div>
              </label>
              <div>
                <div>
                  <label for="popup"></label>
                  <div class="section" >
                    <input type="radio" name="slide" id="slide01" checked >
                    <input type="radio" name="slide" id="slide02">
                    <input type="radio" name="slide" id="slide03">
                    <input type="radio" name="slide" id="slide04">
                    <input type="radio" name="slide" id="slide05">
                    <div class="slidewrap">
                      <ul class="slidelist" >
                        <li v-for="tmp in productsubimageidx" v-bind:key="tmp">
                          <a href="#" >
                            <label for="slide01" class="left"></label>
                            <img :src="`/HOST/product/select_productsub_image.json?productno=${productitemsone.productno}&productidx=${tmp}`" alt="">
                            <label for="slide05" class="right"></label>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                  <label for="popup">

                  </label>
              </div>

                  <h3 style="color:black; text-align:center;">{{productitemsone.producttitle}}</h3>
                  <h3 style="color:red; text-align:center;">{{productitemsone.productfinalprice}}원</h3>
              <hr style="border:1px solid black; width:80%; margin-left:10%;">

              <div class="container">
                <label  for="delivery_fee" style="position:relative; left:50px;">가격:</label><span id="delivery_fee" style="position:relative; left:50px;">{{productitemsone.productprice}}</span>
                <label  for="delivery_fee" style="position:relative; left:150px;">할인:</label><span id="delivery_fee" style="position:relative; left:150px;">{{productitemsone.productsale*100}} %</span>
                <label  for="delivery_fee " style="position:relative; left:250px;">배송비:</label><span id="delivery_fee" style="position:relative; left:250px;">{{productitemsone.productdeliveryfee}}원</span>
                <br>

                <div style="margin-top:30px;">
                  <input type="checkbox" id="select_option">
                  <label for="select_option"> -- 옵션선택 -- </label>
                  <div class="select_option_list" >
                    <div class="select_option_list_content" v-for="(option,idx) in productoptionitems" v-bind:key="option">
                      <a href="#" style="text-decoration:none; color:black;" @click="Order_option_quantity(idx)">
                        <img :src="`/HOST/productoption/select_productoption_image.json?productoptionno=${option.productoptionno}`" alt=""> 
                        <span id="select_option_list_content_name" >{{option.productoptionname}}</span> 
                        <span id="select_option_list_content_name" style="margin-left:30px;">{{option.productoptionsize}} - {{option.productoptioncolor}}</span> 
                        <span id="select_option_list_content_quantity" style="margin-right:0;"><input type="hidden" v-model="order_addprice">{{productitemsone.productfinalprice + option.productoptionadditionalamount}}</span> 
                      </a>
                    </div>

                    <hr style="margin:0; padding:0;">
                  </div>

                </div>

              <hr style="border:1px solid black; width:90%; margin-left:5%;">

                <div class="select_option_list1" style="width:99%; position:relative; border:none; left:25px; ">
                  <div class="select_option_list_content" v-for="(selectoption,idx) in list" v-bind:key="selectoption">
                    <a href="#" style="text-decoration:none; color:black;">
                          <img :src="`/HOST/productoption/select_productoption_image.json?productoptionno=${selectoption.no}`" alt=""> 
                          <span id="select_option_list_content_name" >{{selectoption.name}}</span> 
                          <span id="select_option_list_content_name" style="margin-left:30px;">{{selectoption.size}} - {{selectoption.color}}</span> 
                          <span id="select_option_list_content_quantity" ><button style="border:none; background:none;" @click="Order_option_quantity_cancel(idx)">x</button></span> 
                          <span id="select_option_list_content_quantity" >
                            
                            <input type="number" style="width:40px; border:none; display:block;"  v-model="optioncnt[idx]" @click="cnt">
                            <span class="qty-up" style="display:block;"></span>
                            <span class="qty-down" style="display:block;"></span>
                          </span> 
                          <span id="select_option_list_content_price" style="margin-right:30px;">{{optioncnt[idx] * (productitemsone.productfinalprice + selectoption.addprice)}}won</span> 
                    </a>
                     
                  </div>
                </div>
                  
                <div class="container" style="margin-top:10px;">
                  <label for="total_price" style="margin-left:40px; font-size:20px;"><strong>총구매가</strong></label>
                  <span id="total_price" style="margin-left:55%; font-size:20px; color:red;"><strong>{{this.order_totalprice}}원</strong></span>
                  <span style="margin-left:15px;">
                    <button class="product_order_btn" style="margin-top:20px;" @click="order">주문하기</button>
                    <button class="product_order_btn_shopping_basket" style="margin-top:20px; margin-left:15px;">장바구니</button>
                    <button class="product_order_btn_heart" style="margin-left:5px;" @click="handlewish">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                      찜
                    </button>
                  </span>
                </div>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>

      

    </div>



  </div>
</template>

<script>
  import axios from "axios";
  import { useStore } from "vuex";
  export default {
    async mounted(){
      const menu1 = Number(this.$route.query.menu);
      this.ChangMenu(menu1);
    //   this.store.subscribe( (mutation, state) => {
    //       if(mutation.type == "setMenu"){
    //         // this.$router.push({path:'/product'});
    //           const menu = Number(mutation.payload);
    //           console.log(state, " state ");
    //           this.ChangMenu(menu);
    //           // console.log(mutation.type, " type ");
    //           // console.log("Product.vue => ");
    //           // console.log(mutation.payload , " payload ")  // mutation에 전달된 값 
    //           // console.log(menu, " menu ");
    //           // this.$refs['side'][menu].click();

    //       }
    //   });
    },
    created() {
      this.handlewishcount()
      this.handlewishlist()
    },

    data(){
      return{
        menu                  : 1,
        aa                    : 9,
        productitems          : "",
        productcategoryname   : "",
        productitemsone       : "",
        productoptionitems    : "",
        productoptionquantity : "",
        productsubimageidx    : "",
        list                  : [],
        optioncnt             : [],
        searchproduct         : "",
        page                  : 1,
        latestorder_select    : "",
        token 	              : sessionStorage.getItem("TOKEN"),
        store                 : useStore(),
        order_addprice        : 0,
        order_totalprice      : 0,
        wishcount             : "",
        wishlist              : []
      }
    },

    methods:{
      cnt(){
        this.order_totalprice=0;
        for(let i=0; i<this.optioncnt.length; i++){
          let a = this.optioncnt[i]*(this.productitemsone.productfinalprice+this.list[i].addprice);

          this.order_totalprice += a;
          console.log(this.order_totalprice);
          

          
        }
      },
      order(){
        // console.log(this.list);
        // console.log(this.optioncnt);
        // console.log(this.productitemsone.productfinalprice);
        // console.log(this.optioncnt.length);

      },
      latestorder(e){
        if(e.target.value === "최신순"){
          this.latestorder_select = e.target.value;
          // console.log(this.latestorder_select);
          this.selectProduct();
        }
      },
      Order_option_quantity_cancel(idx){
        // console.log(idx);
        this.list.splice(idx,1);
        // console.log(this.list);
      },
      Order_option_quantity(idx){
        console.log(this.order_addprice);
        // console.log(idx);
        this.productoptionitems[idx];
        // console.log(this.productoptionquantity);
        const read_addprice = this.productoptionitems[idx].productoptionadditionalamount;
          this.optioncnt[idx] = 1;
          // console.log(this.list.length);
          if(this.list.length <= idx){
          this.list.push({ 
            no:this.productoptionitems[idx].productoptionno,
            name:this.productoptionitems[idx].productoptionname,
            size:this.productoptionitems[idx].productoptionsize,
            color:this.productoptionitems[idx].productoptioncolor, 
            addprice:read_addprice,
          })
          }

      },
      async ChangMenu(menu){
        // console.log("Hello", menu);
        if(menu === 1){
          this.menu = 1;
          this.productcategoryname = "남성상의"
          this.selectProduct();
          
        }
        else if(menu === 2){
          this.menu = 2;
          this.productcategoryname = "남성하의"
          this.selectProduct();
        }
        else if(menu === 3){
          this.menu = 3;
          this.productcategoryname = "남성외투"
          this.selectProduct();
        }
        else if(menu === 4){
          this.menu = 4;
          this.productcategoryname = "남성속옷"
          this.selectProduct();
        }
        else if(menu === 5){
          this.menu = 5;
          this.productcategoryname = "여성상의"
          this.selectProduct();
        }
        else if(menu === 6){
          this.menu = 6;
          this.productcategoryname = "여성하의"
          this.selectProduct();
        }
        else if(menu === 7){
          this.menu = 7;
          this.productcategoryname = "여성외투"
          this.selectProduct();
        }
        else if(menu === 8){
          this.menu = 8;
          this.productcategoryname = "여성속옷"
          this.selectProduct();
        }
      },
      async selectProduct(){
        // console.log(this.menu+"ddd");
        if(this.latestorder_select === "최신순"){
          var url = `/HOST/product/select_product_category_title.json?menu=${this.menu}&page=${this.page}&productcategory=${this.productcategoryname}&producttitle=`;
        }
        else{
          url = `/HOST/product/select_product_category_title.json?menu=${this.menu}&page=${this.page}&productcategory=${this.productcategoryname}&producttitle=${this.searchproduct}`;
        }
        const headers = { "Content-Type": "application/json" };
        const response = await axios.get(url, { headers });
        // console.log(response);
        if(response.status === 200){
          if(this.menu === 1){
            this.productitems = response.data.masculine;
            // console.log(this.ppages);
          }
          if(this.menu === 2){
            this.productitems = response.data.mensbottoms;
            console.log(this.productitems);
          }
          if(this.menu === 3){
            this.productitems = response.data.mensovercoat;
            console.log(this.productitems);
          }
          if(this.menu === 4){
            this.productitems = response.data.mensunderwear;
            console.log(this.productitems);
          }
          if(this.menu === 5){
            this.productitems = response.data.femaletop;
            console.log(this.productitems);
          }
          if(this.menu === 6){
            this.productitems = response.data.womensbottoms;
            console.log(this.productitems);
          }
          if(this.menu === 7){
            this.productitems = response.data.womensovercoat;
            console.log(this.productitems);
          }
          if(this.menu === 8){
            this.productitems = response.data.womensunderwear;
            console.log(this.productitems);
          }
          // console.log(this.productitems);

          
        }
      },
      async selectoneProduct(productno){
        console.log(productno);
        const url = `/HOST/product/selectone_product.json?productno=${productno}`;
        const headers = { "Content-Type": "application/json" };
        const response = await axios.get(url, { headers });
        // console.log(response);
        if(response.status === 200){
          this.productitemsone = response.data.list;
          this.productsubimageidx = response.data.list.productsubimageidx;
          // console.log(this.productsubimageidx);
          // console.log(this.productitemsone);
        }
        const url1 = `/HOST/productoption/select_productoption.json?productno=${response.data.list.productno}`;
        const headers1 = { "Content-Type": "application/json" };
        const response1 = await axios.get(url1, { headers1 });
        // console.log(response1);
        if(response1.status === 200){
          this.productoptionitems = response1.data.list;
          // console.log(this.productoptionitems);
        }
        
      },

      // 위시리스트(찜) 추가
      async handlewish(){
        const url = `/HOST/wish/insertwish.json?no=3402`
				const headers = { "Content-Type": "application/json",  "token" : this.token};
				const response = await axios.post(url, {}, {headers:headers});
        console.log(response.data);
        if (response.data.status == 200){
          // this.$emit("handlewishcount",this.handlewishcount);
        }
      },

      // 위시리스트(찜) 카운트 조회
      async handlewishcount(){
        const url = `/HOST/wish/wish_hit_select.json`
        const headers = { "Content-Type": "application/json" , "token" : this.token };
        const response = await axios.get(url, { headers:headers });
        console.log('handlewishcount => handlewishcount');
        console.log(response.data);
        if (response.data.status == 200){
          this.wishcount = response.data.wishcount;
        }
      },

      // 위시리스트 리스트 조회
      async handlewishlist(){
        const url = `/HOST/wish/selectwish.json`
        const headers = { "Content-Type": "application/json" , "token" : this.token };
        const response = await axios.get(url, { headers:headers });
        console.log('handlewishlist => handlewishlist');
        console.log(response.data);
        if (response.data.status == 200){
          this.wishlist = response.data.wishlist;
        }
      },

      // 위시리스트 삭제
      async handlewishdelete(no) {
        // console.log("no" + no);
        if(confirm("삭제할까요?")){
        const url = `/HOST/wish/wish_delete.json?no=`+ no;
        // console.log(no);
        const headers = { "Content-Type": "application/json"};
        const response =  await axios.delete(url, { headers: { headers }, data: { }});
          console.log('WishList.vue => handlewishdelete');
          console.log(response);
          // if(response.data.status === 200){
          // await this.handlewishlist();
          // }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/bootstrap';
.container1{
    height: 260vh;
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
// 사이드바
input[id="menuicon"] {display:none;}
input[id="menuicon"] + label {display: block; position: relative; cursor: pointer;}
div[class="sidebar"] {width: 600px; height: 100%; background: rgb(255, 255, 255);position:fixed; overflow-y: auto; top: 0;left: -600px;z-index: 1;transition: all .35s; border-right: 2px solid rgb(255, 0, 0);}
input[id="menuicon"]:checked + label + div {left: 0;}
// 장바구니 사이드바
input[id="basket"] {display:none;}
input[id="basket"] + label  {display: block; position: relative; cursor: pointer; width:72px; height:27px; margin-top: 0.125rem; margin-left: 1.25rem; padding: 0.1875rem 0.5rem;}
input[id="basket"] + label:hover {background:#20c997;}
div[class="sidebar_basket"] {width:100%; height: 300px; background: rgb(255, 255, 255);position:fixed; left: 0; bottom: -300px; overflow-x: auto;; z-index: 1; transition: all .35s; border-top: 2px solid rgb(255, 0, 0);}
input[id="basket"]:checked + label + div {bottom: 0;}
// 찜목록 사이드바
input[id="wishlist"] {display:none;}
input[id="wishlist"] + label  {display: block; position: relative; cursor: pointer; width:72px; height:27px; margin-top: 0.125rem; margin-left: 1.25rem; padding: 0.1875rem 0.5rem;}
input[id="wishlist"] + label:hover {background:#20c997;}
div[class="sidebar_wishlist"] {width:400px; height: 100%; background: rgb(255, 255, 255);position:fixed; overflow-y: auto; top: 0;right: -600px; z-index: 1; transition: all .35s; border-left: 2px solid rgb(255, 0, 0);}
input[id="wishlist"]:checked + label + div {right: 0;}
// 주문목록 버튼 style
input[id="orderlist"] {display:none;}
input[id="orderlist"] + label  {display: inline-flex; position: relative; cursor: pointer; width:72px; height:27px; margin-top: 0.125rem; margin-left: 1.25rem; padding: 0.1875rem 0.5rem;}
input[id="orderlist"] + label:hover {background:#20c997;}
// 슬라이드 이미지
.section input[id*="slide"]{
  display: none;
}
.section .slidewrap{
  max-width: 1200px;
  margin:0 auto;
  overflow: hidden;
}
.section .slidelist{
  white-space: nowrap;
  font-size: 0;
} 
.section .slidelist > li {
  display: inline-block;
  vertical-align: center;
  width: 100%;
  transition: all .5s;
}
.section .slidelist > li > a {
  display: block;
  position: relative;
}
.section .slidelist > li > a img{
  width:89%;
  height: 930px;
}
.section .slidelist label {
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  padding: 50px;
  cursor: pointer;
}
.section .slidelist .left{
  left: 30px;
  background: url('../assets/img/left_white.png') center center / 80% no-repeat;
}
.section .slidelist .right{
  right: 100px;
  background: url('../assets/img/right_white.png') center center / 80% no-repeat;
}
.section [id="slide01"]:checked ~ .slidewrap .slidelist > li {transform: translateX(0%);}
.section [id="slide02"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-100%)}
.section [id="slide03"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-200%);}
.section [id="slide04"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-300%);}
.section [id="slide05"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-400%);}
.section [id="slide06"]:checked ~ .slidewrap .slidelist > li {transform: translateX(-500%);}
// 모달 이미지
input[id*="popup"]{
  display: none;
}
input[id="popup"] + label {
  display: inline-block;
  color: #fff;
}
input[id="popup"] + label > img{
  width: 490px;
  height: 600px;
  margin-top: -15%;
  margin-left: 10%;
}
input[id="popup"] + label + div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
input[id="popup"] + label + div > div {
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 700px;
  height: 300px;
  z-index: 2;
}
// // close 버튼
// input[id="popup"] + label + div > div > label {
//   position: block;
//   margin-left:100%;
//   right: 0%;
//   transform: translate(40%, -40%);
//   padding: 20px;
//   background: url('../assets/img/close.png') center center no-repeat;
//   z-index: 1;
// }
input[id="popup"] + label + div > label {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .9);
  z-index: 1;
}
input[id*="popup"] + label + div{
  opacity: 0;visibility: hidden;transition: all 1s;
}
input[id*="popup"]:checked + label + div{
  opacity: 1;visibility: visible;
}
// 상품정보페이지
//선택 = 옵션
input[id="select_option"] {display:none;}
input[id="select_option"] + label {display: block; position: relative; cursor: pointer; border: 2px solid #999; width: 80%; left: 10%; text-align: center; font-size: 18px; font-weight: 600;}
div[class="select_option_list"] {width: 440px; height: 200px; background: rgb(255, 255, 255); margin-left: 8.5%;  position: block; overflow-y: auto; top: 69%;left: 13%;z-index: 1;transition: all .35s; border: 2px solid #999;}
input[id="select_option"]:checked + label + div {display: none;}
div[class="select_option_list_content"]{
  width: 98%;
  height: 52px;
  margin: 5px;
}
div[class="select_option_list_content"] img{
  width: 50px;
  height: 50px; 
}
div[class="select_option_list_content"] span[id="select_option_list_content_name"]{
  position: relative;
  left:10%;
  float:center;
  font-size: 16px;
  margin-top: 11px;
  font-weight: bold;
}
div[class="select_option_list_content"] span[id="select_option_list_content_quantity"]{
  position: relative;
  margin-top: 11px;
  float:right;
  font-size: 16px;
}
div[class="select_option_list_content"] span[id="select_option_list_content_price"]{
  position: relative;
  margin-top: 11px;
  float: right;
  margin-right: 0;
  font-size: 16px;
  color: blue;
  font-weight: bold;
}
// 주문버튼 ================================================
// 주문하기
.product_order_btn {
  font-size: 21px;
  padding: 15px 30px;
  border: 1px solid red;
  background-color:transparent ;
  color: red;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.product_order_btn:focus{
  outline: none;
}
.product_order_btn::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.product_order_btn:hover::before{
  transform: translateY(-100%);
}
.product_order_btn:hover{
  color: white;
}
//장바구니
.product_order_btn_shopping_basket {
  font-size: 21px;
  padding: 15px 30px;
  border: 1px solid rgb(0, 0, 0, .9);
  background-color:transparent ;
  color: rgb(0, 0, 0, .9);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.product_order_btn_shopping_basket:focus{
  outline: none;
}
.product_order_btn_shopping_basket::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, .9);
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.product_order_btn_shopping_basket:hover::before{
  transform: translateY(-100%);
}
.product_order_btn_shopping_basket:hover{
  color: white;
}
// 찜하기
.product_order_btn_heart {
  font-size: 21px;
  padding: 15px 30px;
  border: 1px solid red;
  background-color:transparent ;
  color: red;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
}
.product_order_btn_heart:focus{
  outline: none;
}
.product_order_btn_heart::before{
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  top: 100%;
  left: 0;
  transition: all 0.4s;
  z-index: -1;
}
.product_order_btn_heart:hover::before{
  transform: translateY(-100%);
}
.product_order_btn_heart:hover{
  color: white;
}
</style>