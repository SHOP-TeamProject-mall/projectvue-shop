<template>
    <div class="container">
        <section class="Login-form" style="margin-top:-150px;">
            <h1>LOGIN</h1>
            <div class="int-area">
                <input type="text" name="id" id="id" autocomplete="off" required v-model="memberid">
                <label for="id">USER NAME</label>
            </div>
            <div class="int-area">
                <input type="password" name="pw" id="pw"  autocomplete="off" required v-model="memberpw">
                <label for="id">PASSWORD</label>
            </div>
            <div class="btn-area">
                <button type="submit" @click="handlelogin">로그인</button>
            </div>
            <div class="caption">
                <a href="#" >Forgot Password?</a>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return {
				memberid : "a1",
				memberpw : "a",
				token 	 : sessionStorage.getItem("TOKEN"),
            }
        },

        methods : {
            async handlelogin(){
                if(this.memberid.length === 0){
                    return alert("아이디를 입력하세요.")
                }
                if(this.memberpw.length === 0){
                    return alert("비밀번호를 입력하세요.")
                }
                const url = "/HOST/member/memberlogin.json" ;
                const body = { memberid: this.memberid, memberpw: this.memberpw };
                const headers = { "Content-Type": "application/json" };
                const response = await axios.post( url , body, { headers });
                console.log(response.data);

                if (response.data.status == 200){
                    sessionStorage.setItem("TOKEN", response.data.token);
                    // alert("로그인 성공");
                    this.$router.push({ path: "/home" });
                    this.$emit('changeLogged');
                } else if(response.data.status === 0) {
                    alert("개인 회원이 아닙니다.");
                } else if (response.data.status === -1) {
                    alert("존재 하지 않는 회원입니다.");
                }
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
    position: relative;
    z-index: 2;
}
.Login-form h1{
    font-size: 32px; color: #999;
    text-align: center;
    margin-bottom: 60px;
}
.int-area{
    width: 400px;
    position: relative;
    margin-top: 20px;
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