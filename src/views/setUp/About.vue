<template>
  <div class="about">
      <span>2020 懒惰</span>
      <span>|</span>
      <span @click="about">关于</span> 
      <div class="eject" v-show="isActive">
          <div class="content" v-for="item in date" :key="item.id">
              <div class="time">{{ item[0] }}</div>
              <div class="value">{{ item[1] }}</div>
          </div>
          <div class="close" @click="close">×</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            isActive: false,
            date: [
                ['2020.4.9', '上线'],
                ['2020.4.10', '改进:优化了点击输入框背景动画']
            ]
        }
    },
    methods: {
        about() {
            this.isActive = true
        },
        close() {
            this.isActive = false
        }
    }
}
</script>

<style scoped>
.about {
    position: fixed;
    bottom: 4%;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
    font-size: 0.7rem;
    z-index: 8;
    background-color: rgba(155, 155, 155, .2);
    border-radius: 25px;
}

.about span {
    padding: 0.5rem;
}

.about .eject {
    position: absolute;
    width: 25rem;
    height: 25rem;
    top: -30rem;
    left: -100%;
    background-color: rgba(250, 250, 250, .98);
    z-index: 8;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 3rem;
    color: #000;
}
.about .eject .content {
    padding-top: 1rem;
}
.about .eject .close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2rem;
}
</style>