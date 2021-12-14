<template>
    <div class="container" style="margin-top:50px;">
        <h3>회원가입</h3>

        <div class="row">
            <div class="col">col</div>
            <div class="col">
                <div>아이디</div>
                <div>암호</div>
                <div>이름</div>
                <div>연락처</div>
                <div>주소</div>
            </div>
            <div class="col">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
            </div>
            <div class="col">col</div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container{
    text-align: center;
}
h3{
    text-align: center;
}
ul{
    text-align: center;
    margin-left: 10%;
}
.border_class{font-size: 30px;height: 700px; width: 80%; border: 2px solid rgb(122, 116, 116); text-align: center; margin-top: 50px;}

</style>