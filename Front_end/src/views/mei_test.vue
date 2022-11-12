<template>

    <div>

        <el-row>
            <el-col :span="4">
                <div class="grid-content ">
                    <div style="padding-left: 30px;padding-top: 35px; background-color:rgb(239,239,239); height:90vh;"
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
                <div style="padding-left:50px;padding-top: 30px;  font-weight: 890;  font-size:20px;">
                    学习了美学分数评估，现在做个测试吧！请给出下面四张图的美学分数：</div>

                <el-row>
                    <el-col :span="2">
                        <div class="grid-content ">


                        </div>
                    </el-col>
                    <el-col :span="9">
                        <div class="grid-content ">

                            <div class="demo-image__placeholder">
                                <div>
                                    <div class="image block">
                                        <span class="demonstration"></span>
                                        <el-image :src="src"></el-image>
                                    </div>
                                    <div style="padding-left:70px">

                                        <el-radio v-model="radio1" label="1">1</el-radio>
                                        <el-radio v-model="radio1" label="2">2</el-radio>
                                        <el-radio v-model="radio1" label="3">3</el-radio>
                                        <el-radio v-model="radio1" label="4">4</el-radio>
                                        <el-radio v-model="radio1" label="5">5</el-radio>
                                    </div>
                                </div>

                                <div>
                                    <div class="image block">
                                        <span class="demonstration"></span>
                                        <el-image :src="src">
                                            <div class="image-slot">
                                                Loading<span class="dot">...</span>
                                            </div>
                                        </el-image>
                                    </div>
                                    <div style="padding-left:70px">

                                        <el-radio v-model="radio2" label="1">1</el-radio>
                                        <el-radio v-model="radio2" label="2">2</el-radio>
                                        <el-radio v-model="radio2" label="3">3</el-radio>
                                        <el-radio v-model="radio2" label="4">4</el-radio>
                                        <el-radio v-model="radio2" label="5">5</el-radio>
                                    </div>


                                </div>



                            </div>

                        </div>
                    </el-col>
                    <el-col :span="9">
                        <div class="grid-content ">
                            <div class="grid-content ">

                                <div class="demo-image__placeholder">
                                    <div>
                                        <div class="image block">
                                            <span class="demonstration"></span>
                                            <el-image :src="src"></el-image>
                                        </div>
                                        <div style="padding-left:70px">

                                            <el-radio v-model="radio3" label="1">1</el-radio>
                                            <el-radio v-model="radio3" label="2">2</el-radio>
                                            <el-radio v-model="radio3" label="3">3</el-radio>
                                            <el-radio v-model="radio3" label="4">4</el-radio>
                                            <el-radio v-model="radio3" label="5">5</el-radio>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="image block">
                                            <span class="demonstration"></span>
                                            <el-image :src="src">
                                                <div class="image-slot">
                                                    Loading<span class="dot">...</span>
                                                </div>
                                            </el-image>
                                        </div>
                                        <div style="padding-left:70px">

                                            <el-radio v-model="radio4" label="1">1</el-radio>
                                            <el-radio v-model="radio4" label="2">2</el-radio>
                                            <el-radio v-model="radio4" label="3">3</el-radio>
                                            <el-radio v-model="radio4" label="4">4</el-radio>
                                            <el-radio v-model="radio4" label="5">5</el-radio>
                                        </div>


                                    </div>



                                </div>

                            </div>
                        </div>
                    </el-col>

                    <el-col :span="2">
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
            radio1:'1',
            radio2:'1',
            radio3:'1',
            radio4:'1',

            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

        };
    },


    methods: {
        handleChange(val) {
            console.log(val);
        },
        qiu() {
            this.$router.replace('/login')


        }

    }
}
</script>

<style>
.image {
    width: 400px;
    padding: 10px;
    padding-top:35px;

}

.btn {

    width: 35px;
    height: 35px;
    margin-left: 100px;
    margin-top: 45vh;

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