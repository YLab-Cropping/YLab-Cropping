<template>
  <div div class="logincontent">

    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ">

          <el-form :model="loginForm" style="margin-top:350px; " status-icon :rules="rules" ref="loginForm"
            label-width="100px" class="demo-ruleForm">
            <el-form-item prop="phone">

              <el-input v-model="loginForm.phone" style="width: 300px; padding-bottom: 15px;" placeholder="请输入您的手机号">
                <template #prefix>
                  <i class="iconfont icon-label"></i>
                </template>
              </el-input>
            </el-form-item>



            <el-form-item prop="checkPass">
              <el-input v-model="loginForm.checkPass" style="width: 300px;padding-bottom: 15px;" placeholder="请输入密码"
                show-password>
                <template #prefix>
                  <i class="iconfont icon-lock"></i>
                </template>
              </el-input>
            </el-form-item>


            <!-- <el-form-item>

              <el-button type="primary" class="pl" @click="submitForm('loginForm')">{{ count }}
              </el-button>

            </el-form-item> -->
          </el-form>




        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content "> ssssssssssssssss{{ count }}</div>
      </el-col>

    </el-row>

  </div>

</template>



<style>
.pl {

  width: 300px;
  padding-bottom: 15px;
}

.logincontent {


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

.el-row {
  margin-bottom: 20px;

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

<script >


export default {
  data() {


    return {
      totalCount:'',
      interval: null,
      count: '',
      loginForm: {
        phone: '',
        checkPass: ''
      },


      rules: {
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]


      },
      mounted() {
        console.log("考试了吗呜呜")
        this.study1()
        console.log("考试了吗")
      },
      methods: {
        beforeDestroy() {
          window.clearInterval(this.timer)
          clearInterval(this.interval)
        },

        study1() {
          console.log("在前面的")
          
          this.totalCount = 10
          //60秒倒计时过后才能调用的事件

          this.interval = setInterval(() => {
            this.totalCount--
             console.log("JJJJJJJJJJJJJJJ")
            if (this.totalCount === 0) {
              window.clearInterval()
              window.clearInterval(this.interval)
              this.disabled = false

              this.flag = true


            }
          }, 1000)


        },



        threeGo() {
          const TIME_COUNT = 3;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                //跳转的页面写在此处
                this.$router.replace('/register')
              }
            }, 1000)
          }
        },

        submitForm(loginForm) {
          this.$refs[loginForm].validate((valid) => {
            if (valid) {
              this.$axios.post('/user/login', {
                userName: this.loginForm.phone,
                password: this.loginForm.checkPass
              })
                .then(res => {
                  if (res.data.code === 200) {
                    this.$message({
                      type: "success",
                      message: "登录成功"
                    })
                    console.log(res.data.userName)
                    this.$router.replace('/')

                  } else {
                    this.$message({
                      type: "err",
                      message: "用户名或密码错误"
                    })
                  }
                })


            } else {
              console.log('error submit!!');
              return false;
            }
          })


          //   resetForm(loginForm){
          //   this.$refs[loginForm].resetFields();
          // }


        }
      }





    }



  }
}
</script>