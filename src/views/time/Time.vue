<template>
  <div class="time" @click="active">{{ nowTimes.hou }} : {{ nowTimes.min }}</div>
</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      nowTimes: {
        // yy:0,
        // dd:"00",
        hou: "00",
        min: "00"
        // sec:"00"
      },
      mohu: false
    };
  },
  //每秒执行一次
  mounted() {
    setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
  methods: {
    active() {
      this.$emit("show-click");
      this.$store.commit('mohu', !this.mohu)
      this.mohu = !this.mohu
    },
    setNowTimes() {
      let myDate = new Date();
      // this.nowTimes.yy = myDate.getMonth()+1;
      // this.nowTimes.dd = String(myDate.getDate()<10?'0'+ myDate.getDate(): myDate.getDate()) ;
      this.nowTimes.hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      this.nowTimes.min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      // this.nowTimes.sec = String(myDate.getSeconds()<10?'0'+myDate.getSeconds():myDate.getSeconds());
    }
  }
};
</script>

<style scoped>
.time {
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 5;
  font-weight: bolder;
  /* 动画名称 */
  animation-name: sub;
  /* 持续时间 */
  animation-duration: .5s;
  /* 规定动画结束后状态保持结束位置 */
  animation-fill-mode: forwards;
}

.time:hover {
  cursor: pointer;
  user-select: none;
}
@keyframes add {
  /* 开始状态 */
  98% {
    font-size: 2rem;
  }
  /* 结束状态 */
  100% {
    font-size: 1.9rem;
  }
}

.time:hover {
  /* 动画名称 */
  animation-name: add;
  /* 持续时间 */
  animation-duration: .5s;
  /* 规定动画结束后状态保持结束位置 */
  animation-fill-mode: forwards;
  animation-direction: alternate;
}
@keyframes sub {
  /* 开始状态 */
  98% {
    font-size: 1.7rem;
  }
  /* 结束状态 */
  100% {
    font-size: 1.8rem;
  }
}
</style>