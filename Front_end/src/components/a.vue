<template>

    <div class="navv">
        <div class="box">
            <h1>
                <!-- <img src="../assets/1.jpg"> -->
                <span style="padding-left:50px">YLab</span>
            </h1>

        </div>

        <div style="flex:1">
            <!-- <nav>

                <div class="el-menu-item" href="#">首页</div>
                <div class="el-menu-item" href="#">积分榜</div>
                <div class="el-menu-item" href="#">射手榜</div>
                <div class="el-menu-item" href="#">赛程</div>
                <div class="el-menu-item" href="#">球队</div>
            </nav>
         -->

            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">标注任务介绍</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>标注类型</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
        
            </el-menu>

        </div>
        <div style="width:200px;">
            <el-dropdown>
                <span class="el-dropdown-link">
                    用户信息
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>登出</el-dropdown-item>
                        <el-dropdown-item>标注情况查看</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
    <div>
        <el-dropdown>
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>

</template>

<script>
export default {

}
</script>

<style>

.navv{
    display :flex;
    color: rgb(90, 88, 88);
}
ul li {
    list-style: none;
    /* 清除列表原有样式 */
}

.menu {
    width: 600px;
    height: 60px;
    background-color: aquamarine;
}

.menu ul li {
    float: left;
    /* 使列表(一级菜单)横向 */
    margin-right: 50px;
    margin-top: 20px;
    /* 设置一级菜单内容的位置 */
    position: relative;
}

.menu ul li ul {
    width: 100px;
    height: 160px;
    margin-left: -50px;
    background-color: #7FFFD4;
    display: none;
    /* 设置初始为不显示 */
    position: absolute;
}

.menu ul li:hover ul {
    display: block;
    /* 当一级菜单的li获取hover后将二级菜单的ul显示出来 */

}

.w {
    width: 1200px;
    margin: auto;
}

li {
    list-style: none;
}

a {
    text-decroation: none;
}

.header {
    height: 42px;
    margin: 30px auto;
}

.logo {
    float: left;
    width: 198px;
    height: 42px;
}

nav {

    height: 50px;
    display: flex;
    /* align-items: center;
  justify-content: center; */
}

nav .el-menu-item {
    color: #FFFFFF;
    padding: 15px 30px;
    position: relative;
    text-align: center;
    border-bottom: transparent;
    display: flex;
    transition: 0.4s;
    font-size: larger;
    font-weight: bold;
}

nav .el-menu-item:hover {
    background-color: darkgray;
    border-bottom: solid 3px;
    border-bottom-color: brown;
    height: 50px;
}


nav .el-menu-item:hover {
    background-color: darkgray;
    border-bottom: solid 3px;
    border-bottom-color: brown;
    height: 50px;
}

nav .el-menu-item:hover {
    background-color: darkgray;
    border-bottom: solid 3px;
    border-bottom-color: brown;
    height: 50px;
}




/* .nav {
    float: left;
    margin-left: 60px;
}

.nav ul li {
    float: left;
    margin: 0 15px;
}

.nave ul li a {
    display: block;
    height: 42px;
    padding: 0 10px;
    line-height: 42px;
    color: black;
} */

/* .nave ul li a: hover{
        border-bottom: 2px solid #00a4ff;
    } */
.search {
    float: left;
    width: 412px;
    height: 42px;
    background-color: #00a4ff;
    margin-left: 50px;
}

.search input {
    float: left;
    width: 345px;
    height: 40px;
    border: 1px solid #00a4ff;
    border-right: 0;
    color: #bfbfbf;
    font-size: 14px;
    padding-left: 15px;
}

.search button {
    float: left;
    width: 50px;
    height: 42px;
    /* 去掉按钮默认边框 */
    border: 0;
    background: url(../assets/1.jpg);
}

.user {
    float: left;
}

/* .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: #292c2f;
    color: #ffffff;

    /*吸顶效果*/
/* position: sticky;
      position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
      top: 0px;           }         !*必须设一个值，否则不生效*!*/



.box {
    display: flex;
    align-items: center;
    width: 170px;

}

h1 {
    display: flex;
    align-items: center;
    font: normal 28px Cookie, Arial, Helvetica, sans-serif;
    padding: 0px 20px;
}

img {
    width: 40px;
    height: 40px;
}

nav {
    display: flex;
    align-items: center;
    margin: 0px 40px;
    font: 16px Arial, Helvetica, sans-serif;

}

nav a {
    padding: 0 15px;
    width: 32px;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    opacity: 0.9;
}

nav a:hover {
    opacity: 1;
}

.active {
    color: #608bd2;
    pointer-events: none;
    opacity: 1;
}

/*搜索框*/

.text {
    height: 22px;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 3px 16px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
}

.text:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

.button {
    width: 60px;
    height: 30px;
    font-size: 14px;
    margin-right: 35px;
    border: 1px solid #608bd2;
    background-color: #608bd2;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.contents {
    display: flex;
    justify-content: center;
}

.content {
    display: flex;
    width: 1400px;
    height: 1400px;
    /*background-color: #f0f2f3;*/
}
</style>