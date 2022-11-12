<template>



  <div>






    <el-row>



      <el-col :span="12">
        <div style="margin: 20px 20px 20px 20px;" class="grid-content ">


          <el-image :src="src"></el-image>
          <div style="padding: 5px;">

            <div class="bottom clearfix">

              <el-button type="primary">裁剪</el-button>
            </div>
          </div>



        </div>
      </el-col>


      <el-col :span="12">

        <el-form ref="form" :model="form.item">
          <el-table :data="data">
            
            <el-table-column label="biaohzun">
              <!-- eslint-disable-next-line -->
              <template slot-scope="scope">
                
                <!-- <el-select v-if="editNum == scope.$index" v-model="scope.row.carNumber">
                  <el-option v-for="item in carNumbers" :label="item.label" :value="item.value" :key="item.value">
                  </el-option>
                </el-select> -->
              </template>
            </el-table-column>

            <el-table-column label="fenshu">
              <!-- eslint-disable-next-line -->
              <template slot-scope="scope">
                <el-input v-if="editNum == scope.$index" v-model="scope.row.toll" clearble />
              </template>
            </el-table-column>

          </el-table>
          <el-button @click="submit()">提交</el-button>
        </el-form>





        <!-- <el-form :label-position="labelPosition" :rules="rules" ref="ruleForm" style="text-align: center;"
          label-width="130px" class="demo-ruleForm">


          <el-form-item label="1.图片类" prop="resource">
            <el-radio-group>
              <el-radio label="风景"></el-radio>
              <el-radio label="人像"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="2.美学分数" prop="resource">
            <el-radio-group>
              <el-radio label="1"></el-radio>
              <el-radio label="2"></el-radio>
              <el-radio label="3"></el-radio>
              <el-radio label="4"></el-radio>
              <el-radio label="5"></el-radio>

            </el-radio-group>
          </el-form-item>
          <el-form-item label="3.构图类型" prop="resource">
            <el-radio-group>
              <el-radio label="三分构图"></el-radio>
              <el-radio label="曲线构图"></el-radio>
              <el-radio label="中心构图"></el-radio>
              <br>
              <el-radio label="横线构图"></el-radio>
              <el-radio label="对称构图"></el-radio>
              <el-radio label="对角线构图"></el-radio>
              <el-radio label="框式构图"></el-radio>
              <el-radio label="三角形构图"></el-radio>
              <el-radio label="横线构图构图"></el-radio>
              <el-radio label="斜线构图"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="4.构图判断难度" prop="resource">
            <el-radio-group>
              <el-radio label="1"></el-radio>
              <el-radio label="2"></el-radio>
              <el-radio label="3"></el-radio>
              <el-radio label="4"></el-radio>
              <el-radio label="5"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="5.是否可以重新构" prop="resource">
            <el-radio-group>
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>

            </el-radio-group>
          </el-form-item>


        </el-form> -->
      </el-col>


    </el-row>

    <div style="margin-top: 20px;"></div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="4">
        <div styleclass="grid-content ">
          <el-button @click="resetForm('ruleForm')">上一张</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ">
          <el-button @click="resetForm('ruleForm')">下一张</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content "></div>
      </el-col>

    </el-row>

  </div>

</template>
    
  
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  margin-left: 250px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
<script >
import layout from '@/components/layout.vue'
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
export default {
  components: { layout },

  data() {
    return {
      form: {
          name: '',
          id: '',
          item: [],
          removeIdList:[],
        },

      currentDate: new Date(),
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',

      },



      jingwuForm: {
        image_id: '',
        aesthetics_score: '',
        aesthetics_score: '',
        color_score: '',
        composition_score: '',
        texture_score: '',
        composition_type: '',
        judgement: '',
        recompose: '',
        element_type: '',
        flower_color: '',
        insect_color: '',
        positon: '',
        sky: '',

      },

    }
  },

  methods: {


    register(jingwuForm) {
      this.$refs[jingwuForm].validate((valid) => {
        if (valid) {
          this.$axios.post('/images/still/addStillMarkedImages', {
            image_id: this.jingwuForm.image_id,
            aesthetics_score: this.jingwuForm.aesthetics_score,
            aesthetics_score: this.jingwuForm.aesthetics_score,
            color_score: this.jingwuForm.color_score,
            composition_score: this.jingwuForm.composition_score,

            texture_score: this.jingwuForm.texture_score,
            composition_type: this.jingwuForm.composition_type,


            judgement: this.jingwuForm.judgement,
            recompose: this.jingwuForm.recompose,

            element_type: this.jingwuForm.element_type,
            flower_color: this.jingwuForm.flower_color,

            insect_color: this.jingwuForm.insect_color,
            positon: this.jingwuForm.positon,

            sky: this.jingwuForm.sky,


          })
            .then(res => {
              if (res.data.code === 200) {
                this.$message({
                  type: "success",
                  message: "提交成功"
                })
                console.log(res.data.userName)


              }


              else {
                this.$message({
                  type: "err",
                  jingwuForm: "提交失败"
                })
              }
            })

        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },

    resetForm(jingwuForm) {
      this.$refs[jingwuForm].resetFields();
    }
  }
}
</script>
  
  