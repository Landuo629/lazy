<template>
  <div class="eject">
    <div class="setup">
      <div class="iconfont iconshezhi button" @click="setup"></div>
      <ul class="display" v-show="isActive">
        <li @click="controlRegular">常规设置</li>
        <li @click="controlBackground">背景图片偏好</li>
        <li>捐助我</li>
        <li>反馈</li>
      </ul>
    </div>
    <regular-setup v-show="regular"/>
    <background-setup v-show="background"/>
  </div>
</template>

<script>
import RegularSetup from "./children/RegularSetup"
import BackgroundSetup from "./children/BackgroundSetup"

export default {
  name: "Eject",
  components: {
    RegularSetup,
    BackgroundSetup
  },
  data() {
    return {
      isActive: false,
      // regular: true
    }
  },
    computed: {
      regular() {
        return this.$store.state.regular
      },
      background() {
        return this.$store.state.background
      }
  },
  methods: {
    setup() {
      this.isActive = !this.isActive;
    },
    controlRegular() {
      // this.regular = true
      this.$store.commit("regular", true)
      this.$store.commit("ejectClose", true)
      this.isActive = false
    },
    controlBackground() {
      this.$store.commit("background", true)
      this.$store.commit("ejectClose", true)
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
}
.setup .button {
  font-size: 1.5rem;
  transition: all 0.5s;
  user-select: none;
  color: #fff;
  cursor: pointer;
}

.button:hover {
  transform: rotate(60deg);
}

.setup .display {
  position: absolute;
  right: 0;
  width: 8rem;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 10px;
  padding: .5rem;
}

.setup .display li {
  padding: .2rem 0;
  cursor: pointer;
  user-select: none;
}

.setup .display li:hover {
  background-color: rgba(200, 200, 200, .8);
  border-radius: 10px;
  padding: .2rem;
}
</style>