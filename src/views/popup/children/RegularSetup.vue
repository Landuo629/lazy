<template>
  <div class="regular">
    <Popup>
      <h2 slot="header">常规设置</h2>
      <div class="content">
          <!-- 搜索相关 -->
        <h3>搜索</h3>
        <div class="search">
          <div class="catalog">
            <span class="option">自动清空搜索栏</span>
            <span class="switch">
              <div class="button" @click="search" :class="{color:isActive}">
                <span class="circular" :class="{left:isActive}"></span>
              </div>
            </span>
          </div>
          <div class="catalog">
            <span class="option">在新标签页显示搜索结果</span>
            <span class="switch">
              <div class="button" @click="search" :class="{color:isActive}">
                <span class="circular" :class="{left:isActive}"></span>
              </div>
            </span>
          </div>
        </div>
            <!-- 初始化相关 -->
        <h3>初始化</h3>
        <div class="search">
          <div class="catalog">
            <span class="option">起始页加载时自动聚焦到搜索栏</span>
            <span class="switch">
              <div class="button" @click="search" :class="{color:isActive}">
                <span class="circular" :class="{left:isActive}"></span>
              </div>
            </span>
          </div>
        </div>
            <!-- 通用 -->
        <h3>通用</h3>
        <div class="search">
          <div class="catalog">
            <span class="option">一言功能</span>
            <span class="switch">
              <div class="button" @click="sentenceClick" :class="{color:sentence}">
                <span class="circular" :class="{left:sentence}"></span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from "components/content/Popup"

export default {
  name: "RegularSetup",
  components: {
    Popup
  },
  data() {
    return {
      isActive: false,
      sentence: false
    };
  },
  methods: {
    search() {
      this.isActive = !this.isActive
    },
    sentenceClick() {
      this.sentence = !this.sentence
      this.$store.commit('isActive2', !this.sentence)
    }
  }
};
</script>

<style scoped>
h3 {
    margin-left: .5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: .2rem;
}
.catalog {
    padding: .2rem;
}
.search {
  background-color: #ccc;
  border-radius: 8px;
  padding: .5rem;
  font-size: 1rem;
}
.switch {
  position: absolute;
  right: 1.8rem;
  padding: 0.2rem 1.2rem;
  border-radius: 20px;
}

.button {
  position: absolute;
  top: -.1rem;
  width: 2.5rem;
  height: 1.3rem;
  background-color: #008484;
  border-radius: 10px;
}
.color {
  background-color: #777;
}

.circular {
  position: absolute;
  top: 0.12rem;
  right: 0.2rem;
  background-color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 10px;
  transition: right ease 0.4s;
}

.left {
  right: 1.3rem;
}
</style>