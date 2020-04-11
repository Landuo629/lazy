<template>
  <div class="background" ref="dom" :class="{mohu: mohu}" @click.capture="smogN">
    <div class="toggle-button iconfont iconqiehuanbeijingtu" @click="switchPictures"></div>
  </div>
</template>

<script>
export default {
  name: "Background",
  data() {
    return {
      imges: [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpeg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg"
      ],
      i: 0,
      Search: 'Search'
    };
  },
  computed: {
    mohu() {
      return this.$store.state.mohu;
    }
  },
  methods: {
    switchPictures() {
      (this.$refs.dom.style =
        "background: url(" +
        require("assets/img/" + this.imges[this.i]) +
        ") no-repeat top center;background-size: cover;background-attachment: fixed"),
        this.i < this.imges.length - 1 ? this.i++ : (this.i = 0);
    },
    //点击遮罩层
    smogN() {
      this.$store.commit("mohu", false);
      this.$store.commit("isActive", false);
       //子组件发送数据
      this.bus.$emit("Search", this.Search);
    }
  }
};
</script>

<style scoped>
.background {
  /* no-repeat 背景图片取消重复 */
  /* cover 自动等比例拉伸图片 */
  /* 必应每日背景 */
  background: url(https://open.saintic.com/api/bingPic/) no-repeat top center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: transform ease 0.5s;
}

.toggle-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  color: #008484;
  transition: all 0.5s;
  font-size: 1.1rem;
}

.toggle-button:hover {
  color: red;
  transform: rotate(180deg) scale(1.5);
}

.mohu {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  /* background: inherit; */
  filter: blur(7px);
  z-index: 2;
  transform: scale(1.1, 1.1);
}
</style>