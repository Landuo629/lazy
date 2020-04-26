<template>
  <div class="background" ref="dom" :class="{mohu: mohu}" @click.capture="smogN" :style="images" >
  </div>
</template>

<script>

export default {
  name: "Background",
  data() {
    return {
      Search: 'Search',
      bingUrl: null
    }
  },
  mounted() {
    // const that = this
    // getbiying()
    // .then(res => {
    //   // console.log(res)
    //   // console.log(res.data.bing.url)
    //   that.bingUrl = res.data.bing.url
    // })
    // .catch()
  
  },
  computed: {
    mohu() { 
      return this.$store.state.mohu
    },
    images() {
      return this.$store.state.images
    }
  },
  methods: {
    //点击遮罩层
    smogN() {
      this.$store.commit("mohu", false)
      this.$store.commit("isActive", false)
      //子组件发送数据
      this.bus.$emit("Search", this.Search) 
      this.$emit("show-click")
    }
  }
}
</script>

<style scoped>

.background {
  /* no-repeat 背景图片取消重复 */
  /* cover 自动等比例拉伸图片 */
  /* 必应每日背景 */
  /* background: url(https://api.xygeng.cn/Bing/) no-repeat top center;
  background-size: cover;
  background-attachment: fixed; */
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: transform ease 0.3s;
  /* 设置亮度值，范围：0-1 */
  filter: brightness(0.9);
}
.mohu {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  /* background: inherit; */
  /* 背景模糊加亮度 */
  filter: blur(7px) brightness(0.9);
  z-index: 2;
  transform: scale(1.1, 1.1);
}
</style>