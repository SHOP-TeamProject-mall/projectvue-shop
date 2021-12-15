<template>
    <div class="container">
        <section class="Login-form" style="margin-top:-80px;">
            <h1>JOIN</h1>
            <div class="file-area">
                <input type="file" id="file" accept="">
                <label for="file">
                    <div><img src="../assets/img/user_image1.png" alt="" style="color:blue; width:120px; border-radius: 60px;"></div>
                </label>
                <p>이미지를 클릭해 사진을 등록하세요</p>
            </div>
            <div class="int-area">
                <input type="text" name="id" id="id" autocomplete="off" required v-model="memberid">
                <label for="id">USER ID</label>
            </div>
            <div class="int-area">
                <input type="password" name="pw" id="pw"  autocomplete="off" required v-model="memberpw">
                <label for="id">PASSWORD</label>
            </div>
            <div class="int-area">
                <input type="password" name="pw_check" id="pw_check"  autocomplete="off" required v-model="memberpw_check">
                <label for="pw_check">PASSWORD CHECK</label>
            </div>
            <div class="int-area">
                <input type="text" name="user_name" id="user_name" autocomplete="off" required v-model="membername">
                <label for="user_name">USER NAME</label>
            </div>
            <div class="int-area">
                <input type="text" name="user_email" id="user_name" autocomplete="off" required v-model="memberemail">
                <label for="user_name">USER EMAIL</label>
            </div>
            <div class="int-area">
                <input type="text" name="user_phone" id="user_phone" autocomplete="off" required v-model="memberphone">
                <label for="user_phone">USER PHONE</label>
            </div>
            <div class="int-area">
                <input type="text" name="user_address" id="user_address" autocomplete="off" required v-model="memberaddress">
                <label for="user_address">USER ADDRESS</label>
            </div>
            <div class="btn-area">
                <button type="submit" @click="handlejoin">회원가입</button>
            </div>
            <div class="caption">
                <input type="checkbox"><a href="#" style="margin-left:10px;">이용약관에 동의합니다 (약관 보기)</a>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return {
                memberid      : "a1",
                memberpw      : "a" ,
                membername      : "규",
                memberemail   : "a@a,com",
                memberaddress : "부산시 해운대구",
                memberphone   : "010-0000-0000"
                }
            },

        methods : {
            // 회원가입
           async handlejoin(){
               if (this.memberid.length === 0) {
					return alert("아이디를 입력하세요");
				}
				if (this.memberpw.length === 0) {
					return alert("비밀번호를 입력하세요");
				}
                if (this.membername.length === 0) {
					return alert("비밀번호를 입력하세요");
				}
				if (this.memberemail.length === 0) {
					return alert("이메일을 입력하세요");
				}
				if (this.memberaddress === 0){
					return alert("주소를 입력하세요");
				}
				if (this.memberphone.length === 0) {
					return alert("연락처를 입력하세요");
				}

                const headers = { "Content-Type": "application/json" };
                const url = `/HOST/member/memberjoin.json`;
                const body = {
                    memberid      : this.memberid,
                    memberpw      : this.memberpw,
                    membername      : this.membername,
                    memberemail   : this.memberemail,
                    memberaddress : this.memberaddress,
                    memberphone   : this.memberphone,
                };
                
                const response = await axios.post(url, body, headers);
                console.log(response);
                alert("회원가입이 완료되었습니다.");
                this.$router.push({ path: "/Login" });
            }
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Roboto+Mono:ital,wght@0,300;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Noto+Sans+KR:wght@900&family=Roboto+Mono:ital,wght@0,300;1,700&display=swap');

*{margin:0; padding: 0; box-sizing: border-box;}
.container{
    font-family: 'Bakbak One', cursive;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110vh;
    background: url("../assets/img/login_background.png") no-repeat center;
    background-size: cover;
}
.container::before{
    content: "";
    position: absolute; z-index: 1;
    top: 0; right: 100%; bottom: 0; left: 0;
    background-color: rgba(0, 0, 0,.7);
}
.Login-form{
    margin-top: 50px;
    position: relative;
    z-index: 2;
}
.Login-form h1{
    font-size: 32px; color: #999;
    text-align: center;
    margin-bottom: 60px;
}
input[type="file"]{
    display: none;
}
input[type="file"] + label{
    color: rgb(81, 81, 246);
    width: 190px;
    // background-color: #f5af09;
    position: relative;
    margin: auto;
    margin-top: -40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-family: 'Noto Sans KR', sans-serif;
    color: rgb(214, 7, 7);
    position: relative;
    margin-top: 5px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.int-area{
    width: 400px;
    position: relative;
    margin-top: 5px;
}
.int-area:first-child{
    margin-top: 0;
}
.int-area input{
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    padding: 20px 10px 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #999;
    font-size: 20px; color: rgb(0, 0, 0);
    outline: none;
}
.int-area label{
    position: absolute; left: 10px; top: 15px;
    font-size: 25px; color: #999;
}
.int-area input:focus + label,
.int-area input:valid + label {
    
    top:0px;
    font-size: 18px; color: rgb(180, 12, 12);
}
.btn-area{
    margin-top: 30px;
}
// .btn-area button{
//     width: 100%; height: 50px;
//     background: #166cea;
//     color: #fff;
//     font-size: 20px;
//     border: none;
    
//     cursor: pointer;
// }
.caption{
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 20px;
    text-align: center;
    margin-bottom:20px;
}
.caption a {
    font-size: 15px; color: #999;
}

.btn-area button {
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%; height: 60px;
  font-size: 21px;
  padding: 15px 30px;
  border: 3px solid pink;
  border-radius: 25px;
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

</style>