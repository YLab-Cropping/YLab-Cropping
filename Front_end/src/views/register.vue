<template>
  <div class="content">


    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ">

          <div>
            <h1 style="color:red ; margin-top: 120px;">请如实填写，否则影响后续酬劳发放</h1>
          </div>

          <el-form :model="regForm" style="margin-top:60px; " status-icon :rules="rules" ref="ruleForm"
            label-width="100px" class="demo-ruleForm">
            <el-form-item prop="phone">

              <el-input v-model="regForm.phone" style="width: 300px; padding-bottom: 10px;" placeholder="请输入您的手机号">
                <template #prefix>
                  <i class="iconfont icon-mail"></i>
                </template>
              </el-input>
            </el-form-item>



            <el-form-item prop="password">


              <el-input style="width: 300px;padding-bottom: 10px;" placeholder="请输入密码" v-model="regForm.password" show-password>
                <template #prefix>
                  <i class="iconfont icon-lock"></i>
                </template>


              </el-input>
            </el-form-item>

            <el-form-item prop="checkPass">

              <el-input style="width: 300px;padding-bottom: 10px;" placeholder="请确认密码" v-model="regForm.checkPass" show-password>
                <template #prefix>
                  <i class="iconfont icon-lock_fill"></i>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="major">

              <el-input style="width: 300px; padding-bottom: 10px;"  v-model="regForm.major" placeholder="专业信息：软件工程/......">
                <template #prefix>
                  <i class="iconfont icon-prompt"></i>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="age">

              <el-input style="width: 300px; padding-bottom: 10px;" v-model="regForm.age" placeholder="年龄">
                <template #prefix>
                  <i class="iconfont icon-mail"></i>
                </template>
              </el-input>
            </el-form-item>




            <el-form-item prop="sex">


              <el-select placeholder="性别" style="width: 300px; padding-bottom: 10px;"  v-model="regForm.sex">
                <template #prefix>
                  <i class="iconfont icon-people"></i>
                </template>
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>


              </el-select>
            </el-form-item>





            <el-form-item prop="exp">

              <el-select placeholder="摄影经验" style="width: 300px; padding-bottom: 10px;" v-model="regForm.exp">
                <template #prefix>
                  <i class="iconfont icon-people"></i>
                </template>
                <el-option label="1、无摄影经验" value="1"></el-option>
                <el-option label="2、偶尔拍照" value="2"></el-option>
                <el-option label="3、平时经常摄影，有一定审美" value="3"></el-option>
                <el-option label="4、对摄影有一点见解" value="4"></el-option>
                <el-option label="5、专业摄影师" value="5"></el-option>

              </el-select>
            </el-form-item>



            <el-form-item>
              <el-button type="primary" class="pl" @click="register('regForm')">注册
              </el-button>

            </el-form-item>

            <div class="tips">
              <span>已有账号</span>

            </div>
          </el-form>




        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content "></div>
      </el-col>

    </el-row>
  </div>


</template>
  
  
  
  
<style>
.tips {
  margin-left: 120px;
  color: rgb(18, 14, 240);
  font-size: 13px;
}

.el-row {
  margin-bottom: 5px;

}

.content {


  position: absolute;
  /* 不可缺少 */
  /* overflow: hidden; */
  /* overflow: auto; */
  z-index: -1;


  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  /* background: url("../assets/2.jpg"); */
  /*图片路径*/
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
<script>


export default {




  data() {
    return {
      regForm: {
        sex:'',
        major:'',
        exp:'',
        password:'',
        checkPass:'',
        phone:'',
        age:''

      }
    }
  },


  methods: {
    register(regForm) {
      this.$refs[regForm].validate((valid) => {
        if (valid) {
          this.$axios.post('/user/reg', {
            username: this.regForm.phone,
            password_1: this.regForm.checkPass,
            password_2:this.regForm.password,
            age: this.regForm.age,
            gender: this.regForm.sex,

            department: this.regForm.major,
            experience: this.regForm.exp,

      
          })
            .then(res => {
              if (res.data.code === 200) {
                this.$message({
                  type: "success",
                  message: "注册成功"
                })
                console.log(res.data.userName)
                this.$router.replace('/login')

              } 
              
              
              else {
                this.$message({
                  type: "err",
                  message: "注册失败"
                })
              }
            })

        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },

    resetForm(regForm) {
      this.$refs[regForm].resetFields();
    }
  }
}
</script>
  