<template>
  <div class="main">
    <el-main>
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content " />
        </el-col>
        <el-col :span="11">

          <el-steps :active="active" finish-status="success">

          </el-steps>
          <div style="margin-top:30px; text-align:  center;margin-bottom: 25px;">任务说明</div>
          <div style="font-size: x-small;text-indent: 4em;"> 首先进行三阶段的学习：美学分数、构图说明和裁剪说明的学习。学习完成后可进行测试</div>

          <el-card class="box-card1" style=" border-radius:15px; width:700px;margin:auto;margin-top: 20px;">
            <div class="clearfix">
              <span>美学分数</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">
              &nbsp; &nbsp;&nbsp;1.共有1-5分的示例图片，每个分数段有4张示例图。
            </div>

          </el-card>
          <el-card class="box-card2" style="border-radius:15px; width:700px;margin:auto;margin-top: 20px;">
            <div class="clearfix">
              <span>构图说明</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">
              &nbsp; &nbsp;&nbsp;1.共有1-5分的示例图片，每个分数段有4张示例图。
            </div>

          </el-card>
          <el-card class="box-card3" style="border-radius:15px; width:700px;margin:auto;margin-top: 20px;">
            <div class="clearfix">
              <span>裁剪说明</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div class="text item">
              &nbsp; &nbsp;&nbsp;1.共有1-5分的示例图片，每个分数段有4张示例图。
            </div>

          </el-card>
        </el-col>

        <el-col :span="8">
          <div class="grid-content " />
        </el-col>
      </el-row>


      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content "></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content ">

            <el-button type="primary" round style="margin-top:25px;" @click="study">开始学习</el-button>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content "></div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;

}
</style>
  
<script>


export default {
  data() {
    return {
      active: 0
    };
  },



  methods: {
    study() {

      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      this.$router.replace('/meixuefenshu')
      active = 1
    }
  }

}


</script>
  
<style>

</style>