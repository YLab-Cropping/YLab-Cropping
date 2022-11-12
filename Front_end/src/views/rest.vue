<template>
  <el-button :disabled=disabled @click="clickJump()">提交</el-button>
</template>
<script>
export default {
  data() {
    return {
      count: "",//倒计时
      disabled:''
    }
  },


  methods: {


    //几秒后进入跳转页面
    clickJump() {
      const timejump = 10;
      if (!this.timer) {
        this.count = timejump;
       
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--;
            console.log(this.count)
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            this.$router.push({ path: '/register' });
          }
        }, 1000)
      }
    },
  },
  created() {
    this.clickJump()
  },
}
</script>
