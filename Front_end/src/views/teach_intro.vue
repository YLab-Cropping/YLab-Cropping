<template>
    <div>
        <!-- <el-menu :default-active="activeIndex" class="menu el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect" style="background-color:rgb(236, 245, 255)">
            <el-menu-item style='font-size: larger;' index="0" disabled>Ylab</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">标注任务介绍</el-menu-item>
            <el-sub-menu index="2">
                <template #title>标注类型</template>
                <el-menu-item index="2-1">sssssssss</el-menu-item>
                <el-menu-item index="2-2">it</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>

            </el-sub-menu>

 

            <el-menu-item style="margin-left: 1100px;" index="3">欢迎test</el-menu-item>
            <el-menu-item index="4">注销</el-menu-item>
        </el-menu> -->


        <div>
            <el-main>

                <el-row :gutter="20">
                    <el-col :span="5">
                        <div class="grid-content ep-bg-purple" />
                    </el-col>
                    <el-col :span="14">


                        <div style="text-align: center ; margin: 50px auto; font-weight:bolder; font-size: 22px"
                            class="grid-content ">

                            教学介绍
                        </div>

                        <el-card class="box-card" style="width:800px;margin:auto;margin-top: 40px;">
                            <div class="clearfix">
                                <span>注意事项</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div class="text item">
                                下来会教学在标注过程中的不同指标，
                                针对每一个指标进行讲解并提供测试，最后会有一次模拟标注，模拟标注的结果不计入正式标注，仅为检验您是否理解了标注任务。当通过了所有的测试，就会进入到正式的标注环节。

                            </div>
                            <div class="text item">
                                <font color=red size=3>初次测试，您必须完成所有的教学与测试，在您通过一次之后，</font>可以通过左上角的“标注教学”选择相关指标重新学习。
                            </div>

                        </el-card>
                        <div style="margin-top:30px ;text-align: center">
                            <el-button style="padding-left:40px ;padding-right:40px" type="primary" :disabled="disabled"
                                @click="study()">{{ content }}</el-button>
                        </div>
                    </el-col>

                    <el-col :span="5">
                        <div class="grid-content " />
                    </el-col>
                </el-row>



            </el-main>
        </div>



    </div>


</template>

<script>
import { computed } from '@vue/runtime-core';




export default {
    data() {
        return {
            disabled: true,
            interval: null,
            timer: null,
            i: 3,
            totalCount: 3,
            activeNames: ['1', '2', '3', '4'],
            flag: false,
            count:'',
            content: ""
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
      
        // computed: {
        //     btnText() {
        //         if (this.totalCount !== 0)
        //             return '`${this.totalCount}秒后可进行下一步`'
        //         else
        //             return "开始学习"
        //     }
        // },
        //         created() {
        //             console.log(this.totalCount)
        //             this.disabled = true
        //             this.totalCount = 10
        //             //60秒倒计时过后才能调用的事件
        // var _this=this;
        //             this.interval = setInterval(() => {
        //                 this.totalCount--
        //                 console.log("？？？")
        //                 if (this.totalCount === 0) {
        //                     window.clearInterval()
        //                     window.clearInterval(this.interval)
        //                     this.disabled = false


        //                     console.log("你怎么回事")

        //                 }
        //             }, 1000)
        //         },
        //销毁前清除定时器
        beforeDestroy() {
            window.clearInterval(this.timer)
            clearInterval(this.interval)
        },
        clickJump1() {
            const timejump = 10;
            if (!this.timer) {
                this.count = timejump;
                console.log("jjjjjjjj")
                
                
                
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= timejump) {
                        this.content = this.count +'秒后可学习'
                        this.count--;
                        console.log(this.count)
                       
                    } else {
                        this.disabled = false;
                        clearInterval(this.timer);
                        this.timer = null;
                        //跳转的页面写在此处
                        this.content = "点击学习"
                        console.log(this.content)
                    }
                }, 1000)
            }
        },

        // created() {
        //     this.clickJump()
        // },

        study() {
            this.$router.replace('/meiStudy');
        }


        // study() {


        //     this.disabled = true
        //     this.totalCount = 3
        //     //60秒倒计时过后才能调用的事件

        //     this.interval = setInterval(() => {
        //         this.totalCount--

        //         if (this.totalCount === 0) {
        //             window.clearInterval()
        //             window.clearInterval(this.interval)
        //             this.disabled = false

        //             this.flag = true


        //         }
        //     }, 1000)

        //     if (this.flag)
        //         this.$router.replace('/meiStudy');


        //     // this.$router.replace('/meiStudy');

        //     //   this.$refs[regForm].validate((valid) => {
        //     //     if (valid) {
        //     //       alert('submit!');

        //     //     } else {
        //     //       console.log('error submit!!');
        //     //       return false;
        //     //     }
        //     //   });

        //     // $("#but").addClass("disable");

        //     // 提交业务
        //     // $("#but").attr("disabled", true);
        //     // // 10秒后启用点击事件
        //     // setTimeout(function () {
        //     //     $("#but").removeAttr("disabled");
        //     //     $("#but").attr("disabled", true);
        //     //     $("#but").removeClass("disabled");
        //     //     this.$router.replace('/login');
        //     // }, 100);

        // }
    },
    created() {
            this.clickJump1()
        },
}



</script>

<style>
.text {
    text-indent: 2em;
    font-size: 15px;
    letter-spacing: 1.5px;
    line-height: 180%;

}

.el-collapse-item__content {
    font-size: 14px;
    text-indent: 2em;
}

.el-collapse-item__header {
    font-size: 15px;
    text-indent: 0.5em;
}

.title {
    width: 400px;
    margin: 20px auto;
    font-size: 80px;
    font: 1em sans-serif;

}

.menu {
    padding-left: 50px;
    padding-right: 80px;
}

/* .flex-grow {
    flex-grow :1;
} */


.qiu {
    align-items: center;
}
</style>