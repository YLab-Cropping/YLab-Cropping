<template>
    <div>
        <el-main>

            <el-row :gutter="20">
                <el-col :span="3">
                    <div class="grid-content ep-bg-purple" />
                </el-col>
                <el-col :span="18">

                    <el-steps :active="active" finish-status="success">
                        <span style="margin-right: 25px;"> 学习进度 </span>
                        <el-step title="美学分数说明"></el-step>
                        <el-step title="构图说明"></el-step>
                        <el-step title="裁剪说明"></el-step>
                    </el-steps>
                    <!-- <div style="margin-top:30px; text-align:  center;"> 美学分数说明</div> -->

                    <el-card class="box-card" style="width:900px;margin:auto;margin-top: 40px;">
                        <div class="clearfix">
                            <span>5分评分标准：</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div class="text item">
                            &nbsp; &nbsp;&nbsp;1.
                        </div>
                        <div class="text item">
                            &nbsp;&nbsp;&nbsp;2.
                        </div>
                        <div class="text item">
                            &nbsp;&nbsp;&nbsp;3.
                        </div>
                    </el-card>

                    <el-row>
                        <el-col :span="3">
                            <div class="grid-content ">

                                <el-button @click="before()">上一个</el-button>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="grid-content ">
                                <div class="demo-image__placeholder">
                                    <div class="block">
                                        <span class="demonstration">默认</span>
                                        <el-image :src="src"></el-image>
                                    </div>
                                    <div class="block">
                                        <span class="demonstration">自定义</span>
                                        <el-image :src="src">
                                            <!-- eslint-disable-next-line -->
                                            <div slot="placeholder" class="image-slot">
                                                加载中<span class="dot">...</span>
                                            </div>
                                        </el-image>
                                    </div>
                                </div>

                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="grid-content ">
                                <div class="demo-image__placeholder">
                                    <div class="block">
                                        <span class="demonstration">默认</span>
                                        <el-image :src="src"></el-image>
                                    </div>
                                    <div class="block">
                                        <span class="demonstration">自定义</span>
                                        <el-image :src="src">
                                            <!-- eslint-disable-next-line -->
                                            <div slot="placeholder" class="image-slot">
                                                加载中<span class="dot">...</span>
                                            </div>
                                        </el-image>
                                    </div>
                                </div>

           

                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content ">
 



                                <el-button @click="test()">开始测试</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>





                <el-col :span="3">
                    <div class="grid-content " />
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
            active: 0,
            
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      
        };
    },

    methods: {
        study_meixue() {
            if (this.active > 2) this.active = 0;
            this.$router.replace('/goutushuomin')
            active = 1
        }
    }

}




</script>
    
<style>

</style>
  
    