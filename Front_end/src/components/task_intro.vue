<template>
    <div>



        <el-row>
            <el-col :span="4">
                <div class="grid-content "></div>
            </el-col>


            <el-col :span="16">
                <div class="grid-content ">
                    <div style="text-align: center ; margin: 50px auto; font-weight:bolder; font-size: 22px"
                        class="grid-content ">

                        标注任务介绍
                    </div>
                    <span style="padding-left:10px ; font-size: medium;">本次图像美学标注共分为以下四个步骤：</span>


                    <div class="demo-collapse" style="margin-top: 10px;">
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item title="步骤1 : 个人信息采集" name="1">
                                <div>
                                    您必须先注册账号，将网站要求的个人信息填写完毕，才能进入正式标注过程。
                                </div>
                                <div>


                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="步骤2 : 图像标注说明与资格" name="2">
                                <div>

                                </div>
                                <div>
                                    当您填写完个人信息之后，会进入到我们的图片标注说明与资格测试阶段。<font color=red size=3>若您是初次参加，
                                        则必须完成全部教学并通过所有测试才可以进入正式标注阶段。</font>

                                    后续若您想复习任务内容，
                                    可以通过左上角的“图像标注说明”再次学习。(若您因故未完成第一次资格测试，可以联系工作人员进行第二次测试。)


                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="步骤3 : 图像标注" name="3">
                                <div>

                                </div>
                                <div>
                                    正式标注过程中，每张图片需要您欣赏一定时间之后才可以进行标注，所有的信息标注之后才可以进入下一张图片的标注，
                                    每次标注的数量固定，完成所有标注即结束本次标注。



                                </div>
                                <div>

                                </div>
                            </el-collapse-item>
                            <el-collapse-item title="步骤4 : 标注值自查" name="4">
                                <div>

                                </div>
                                <div>
                                    如果在您标注结束之后，想要检验自己的标注情况，可以点击右上角导航栏中的“数据标注”-> “我的标注”
                                    查看您所有的标注情况，当您对某条数据不确定时，可以重新标注。

                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
                <div style="margin-top:20px ;text-align: center">
                    <el-button id="but" style="padding-left:80px ;padding-right:80px" size="large" type="primary"
                        @click="intro()">Primary</el-button>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content "></div>
            </el-col>


        </el-row>




    </div>


</template>

<script>





export default {
    data() {
        return {
            activeNames: ['1', '2', '3', '4'],
            num: 1
        };
    },

    mounted() {   //页面初始化方法
        // if (this.num == 1)
        //     this.$router.replace('/login');


    },


    methods: {

        handleChange(val) {
            console.log(val);
        }

        ,
        intro() {
            this.$router.replace('/teaIntro');
            // this.$router.replace('/rest');

            //   this.$refs[regForm].validate((valid) => {
            //     if (valid) {
            //       alert('submit!');

            //     } else {
            //       console.log('error submit!!');
            //       return false;
            //     }
            //   });

            // $("#but").addClass("disable");

            // // 提交业务
            // $("#but").attr("disabled", true);
            // // 10秒后启用点击事件
            // setTimeout(function () {
            //     $("#but").removeAttr("disabled");
            //     $("#but").attr("disabled", true);
            //     $("#but").removeClass("disabled");
            //     this.$router.replace('/login');
            // }, 100);

        }

    }


}
</script>

<style>
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