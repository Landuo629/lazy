<template>
  <div class="about">
      <div class="aboutr">
      <span>2020 懒惰</span>
      <span>|</span>
      <span @click="about">关于</span> 
      </div>
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
                ['2020.4.10', '改进:优化了点击输入框背景动画'],
                ['2020.4.12', '新增:网易云音乐外链播放器'],
                ['2020.4.26', '新增：切换背景图片、常规设置']
            ]
        }
    },
    methods: {
        about() {
            this.isActive = !this.isActive
        },
        close() {
            this.isActive = false
        }
    }
}
</script>

<style scoped>
.about {
    color: #fff;
    font-size: 0.7rem;
    user-select: none;
}
.aboutr {
    position: fixed;
    bottom: 4%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 8;
    border-radius: 25px;
    cursor: pointer;
}

.about span {
    padding: 0.5rem;
}

.about .eject {
    position: fixed;
    width: 25rem;
    height: 25rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    cursor: pointer;
}
</style>