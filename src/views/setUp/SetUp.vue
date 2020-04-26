<template>
  <div class="setup">
    <div class="iconfont iconshezhi button"  @click="setup"></div>
    <div class="display" v-show="isActive">
      <div class="header">
        <!-- <div>背景图片</div> -->
        <div>句子类型</div>
      </div>
      <div class="background"></div>
      <div class="sentence">
        <form action="sentence" ref="form">
          <li v-for="item in sentence" :key="item.id">
            {{ item }}
            <input type="checkbox" />
          </li>
          <li @click="confirm()">
            <input type="button" value="提交"/>
          </li>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetUp",
  data() {
    return {
      isActive: false,
      sentence: [
        "动画",
        "漫画",
        "游戏",
        "文学",
        "原创",
        "来自网络",
        "其他",
        "影视",
        "诗词",
        "网易云",
        "哲学",
        "抖机灵"
      ]
      //item: ''
    };
  },
  methods: {
    //设置显示与隐藏
    setup() {
      this.isActive = !this.isActive;
    },
    //提交后返回对应的参数及隐藏
    confirm() {
      const oUl = this.$refs.form;
      const length = this.$refs.form.children.length;
       const a = oUl[0].checked ? "c=a" : "";
       const b = oUl[1].checked ? "c=b" : "";
       const c = oUl[2].checked ? "c=c" : "";
       const d = oUl[3].checked ? "c=d" : "";
       const e = oUl[4].checked ? "c=e" : "";
       const f = oUl[5].checked ? "c=f" : "";
       const g = oUl[6].checked ? "c=g" : "";
       const h = oUl[7].checked ? "c=h" : "";
       const i = oUl[8].checked ? "c=i" : "";
       const j = oUl[9].checked ? "c=j" : "";
       const k = oUl[10].checked ? "c=k" : "";
       const l = oUl[11].checked ? "c=l" : "";
       const item = a + "&" + 
                    b + '&' + 
                    c + '&' + 
                    d + '&' + 
                    e + '&' + 
                    g + '&' + 
                    h + '&' + 
                    i + '&' + 
                    j + '&' + 
                    k + '&' + 
                    l;
      this.$emit("confirm-click", item);
      console.log(item);
      this.isActive = false
    }
  }
};
</script>

<style scoped>
.setup {
  position: fixed;
  right: 3rem;
  top: 0.7rem;
  user-select: none;
}
.setup .button {
  font-size: 1.5rem;
  transition: all .5s;
}
.setup .button:hover {
  transform: rotate(60deg);
}
.setup .display {
  position: absolute;
  left: -8rem;
  width: 10rem;
  height: 15rem;
  font-size: 0.8rem;
  text-align: center;
  background-color: rgba(222, 222, 222, 0.8);
}

.setup .header {
  height: 2rem;
  display: flex;
}

.setup .header div {
  flex: 1;
  line-height: 2rem;
}
</style>