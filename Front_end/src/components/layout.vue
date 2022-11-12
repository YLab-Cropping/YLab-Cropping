<template>

  <div class="common-layout">

    <el-menu  router :default-active="this.$route.path" class="el-menu-demo" mode="horizontal"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"  style="padding-left:50px" @select="handleSelect">
            <el-menu-item style='font-size: larger;' index="0" class="ylab" >YLab</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="/taskIntro">标注任务介绍</el-menu-item>
            <el-sub-menu index="2">
                <template #title>标注类型</template>
                <el-menu-item index="/fengjing">风景标注</el-menu-item>
                <el-menu-item index="/">静物标注</el-menu-item>
                <el-menu-item index="/">裁剪标注</el-menu-item>
            </el-sub-menu>
            <el-menu-item  index="/crop">crop</el-menu-item>

            <el-menu-item style="margin-left: 1050px;" index="/login">登录</el-menu-item>
            <el-menu-item index="/register">注册</el-menu-item>
            <el-menu-item  index="4">注销</el-menu-item>
        </el-menu>

    <!-- <div id="header" style="flex:1">

      <el-menu router :default-active="this.$route.path" class="el-menu-demo" mode="horizontal"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect"
        style="padding-left:50px">


        <el-menu-item class="ylab">ylab</el-menu-item>
        <el-menu-item index="/renwushuomin">标注说明</el-menu-item>

        <el-menu-item index="/fenjing">风景标注</el-menu-item>

        <el-menu-item index="/jinwu">静物标注 </el-menu-item>
        
        <el-menu-item index="/register">zhuce</el-menu-item>

        <el-menu-item index="/login">deng,lu </el-menu-item>
        <el-menu-item index="/teaIntro">/teaIntro </el-menu-item>
        <el-menu-item index="/a">kkk,aaa </el-menu-item>
        <el-menu-item index="/b">bbbbbba </el-menu-item>
        <el-menu-item index="/meiStu">meistu </el-menu-item>
        <el-menu-item index="">/ </el-menu-item>
        <el-menu-item index="/"></el-menu-item>
        <el-menu-item index="/"></el-menu-item>


      </el-menu>


    </div> -->
  </div>




  <router-view />
</template>

<script>
export default {


  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style>
.ylab {
  display: flex;
  align-items: center;

  font-size: 30px;

  padding: 25px 0px, 0px 25px;
  margin-left: 50px;
  list-style: none;
  cursor: pointer;
  position: relative;
  transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration), color var(--el-transition-duration);
  box-sizing: border-box;

}
</style>

