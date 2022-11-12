<template>

  <el-main>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content " />
      </el-col>
      <el-col :span="12">

        <el-steps :active="active" finish-status="success">
          <span style="margin-right: 25px;"> 学习进度 </span>
          <el-step title="美学分数说明"></el-step>
          <el-step title="构图说明"></el-step>
          <el-step title="裁剪说明"></el-step>
        </el-steps>
        <div style="margin-top:30px; text-align:  center;"> 构图说明</div>

        <el-card class="box-card" style="width:800px;margin:auto;margin-top: 40px;">
          <div class="clearfix">
            <span>注意事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="text item">
            &nbsp; &nbsp;&nbsp;1.共有1-5分的示例图片，每个分数段有4张示例图。
          </div>
          <div class="text item">
            &nbsp;&nbsp;&nbsp;2.点击上一个/下一个按钮切换。
          </div>
          <div class="text item">
            &nbsp;&nbsp;&nbsp;3.全部看完即可点击查看构图说明
          </div>
        </el-card>


      </el-col>

      <el-col :span="6">
        <div class="grid-content " />
      </el-col>
    </el-row>


    <el-row :gutter="20">
      <el-col :span="11">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ">

          <el-button type="primary" round style="margin-top:25px;" @click="study_goutu">开始学习</el-button>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content "></div>
      </el-col>
    </el-row>

  </el-main>
  <router-view />
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
      active: 1
    };
  },

  methods: {
    study_goutu() {
      if (this.active > 2) this.active = 0;
      this.$router.replace('/caijianshuomin')
      active = 2
    }
  }
}
</script>
