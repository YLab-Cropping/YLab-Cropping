<template>

  <div stylr="height:500px width:500px">
    <ImgCutter ref="imgCutterModal" label="选择本地图片" fileType="jpeg" :crossOrigin="true" crossOriginHeader="*" rate=""
      toolBgc="none" :isModal="false" :showChooseBtn="true" :lockScroll="true" :boxWidth="687" :boxHeight="458"
      :cutWidth="0" :cutHeight="0" :sizeChange="true" :moveAble="true" :imgMove="false" :originalGraph="false"
      WatermarkText="vue-img-cutter" WatermarkTextFont="12px Sans-serif" WatermarkTextColor="#00ff00"
      :WatermarkTextX="0.95" :WatermarkTextY="0.95" :smallToUpload="true" :saveCutPosition="true" :scaleAble="true"
      :previewMode="true" :quality="1" :toolBoxOverflow="true"  @cutDown="cutDown">
     
    </ImgCutter>
  </div>



</template>
<script>
import 'vue-cropper/dist/index.css'
import ImgCutter from 'vue-img-cutter';
//组件中使用
import { VueCropper } from "vue-cropper";
export default {
  data() {
    return {
      option: {
        img: require("../assets/1.jpg"),
        size: 1,
        full: false,
        outputType: "png",
        canMove: false,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 160,
        autoCropHeight: 150,
        centerBox: true,
        high: true,
        max: 99999,
        fixed: true,
        fixedNumber: [1, 2],
      },


    }
  },
  methods:{forIe9:() => {
   this.$refs.imgCutterModal.handleOpen({
       name:png,
       src:"http://imgurl.com/1.png",
   });
}},
  components: { ImgCutter }
}
</script>
  