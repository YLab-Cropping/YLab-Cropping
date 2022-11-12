<template>

    <div>

        <el-row>
            <el-col :span="4">
                <div class="grid-content ">
                    <div style="padding-left: 40px;padding-top: 35px; background-color:rgb(239,239,239); height:90vh;"
                        class="block">
                        <el-timeline>
                            <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
                                :type="activity.type" :color="activity.color" :size="activity.size"
                                :timestamp="activity.timestamp">
                                {{ activity.content }}
                            </el-timeline-item>
                        </el-timeline>
                    </div>


                </div>
            </el-col>
            <el-col :span="20">
                <!-- <div style=class="grid-content ">
                    <el-card class="box-card">
                        <div class="clearfix">
                            <span>美学分数为五分的图片特征：</span>
                            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
                        </div>
                        <div class="text item">
                            1、光影
                        </div>
                        <div class="text item">
                            2、细节
                        </div>
                    </el-card>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <h3 class="medium">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>

                </div> -->
                <el-row>
                    <el-col :span="3">
                        <div class="grid-content "></div>
                    </el-col>

                    <el-col :span="16">




                        <div style=" margin: 50px auto; font-weight:bolder; font-size: 22px" class="grid-content ">


                            <span style=" font-size: medium; ">美学分数教学：</span>


                            <div class="demo-collapse" style="margin-top: 5px;">
                                <el-collapse v-model="activeNames" @change="handleChange">
                                    <el-collapse-item title="1、光影" name="1">
                                        <div>
                                            图片具有艺术性的影调，曝光恰当

                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item title="2、色彩" name="2">
                                        <div>
                                            保障色彩正常还原的同时，
                                        </div>
                                        <div>



                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item title="3、主体" name="3">
                                        <div>

                                        </div>
                                        <div>




                                        </div>
                                        <div>

                                        </div>
                                    </el-collapse-item>
                                    <el-collapse-item title="4、质感" name="4">
                                        <div>

                                        </div>
                                        <div>
                                            如果在您标注结束之后，

                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>


                            <el-carousel :interval="4000" type="card" height="250px" style="margin-top: 30px;">
                                <el-carousel-item v-for="item in 6" :key="item">
                                    <h3 class="medium">{{ item }}</h3>
                                </el-carousel-item>
                            </el-carousel>
                            <span style=" font-size: medium; ">如果您掌握了美学分数评估，请点击右侧按钮做个测试吧！</span>
                        </div>



                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content ">



                            <div class="btn" v-on:click=qiu()>


                            </div>
                        </div>
                    </el-col>
                </el-row>



            </el-col>

        </el-row>
    </div>





</template>

<script>
export default {
    data() {

        return {
            activities: [{
                content: '美学分数教学',
                timestamp: '2018-04-12 20:46',
                size: 'large',
                type: 'primary',
                icon: 'el-icon-more'
            }, {
                content: '美学分数测试',
                timestamp: '2018-04-03 20:46',
                color: '#0bbd87'
            }, {
                content: '构图分数教学',
                timestamp: '2018-04-03 20:46',
                size: 'large'
            }, {
                content: '构图分数测试',
                timestamp: '2018-04-03 20:46'
            }],
            activeNames: ['1', '2'],
            i: 1

        };
    },


    methods: {
        handleChange(val) {
            console.log(val);
        },
        qiu() {
            this.$router.replace('/meiTest')


        }

    }
}
</script>

<style>
.btn {

    width: 35px;
    height: 35px;
    margin-left: 100px;
    margin-top: 55vh;

    border-top: 35px solid white;
    border-left: 35px solid rgb(83, 172, 245);
    border-bottom: 35px solid white;
    border-right: 35px solid white;
}




.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-collapse-item__content {
    font-size: 12px;
    text-indent: 2em;
    font-weight: normal;

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