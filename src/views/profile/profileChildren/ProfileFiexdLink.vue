<template>
  <div class="link">
    <div class="item" v-for="item in link" :key="item.id"><a :href="item[1]" >{{ item[0] }}</a></div>
  </div>
</template>

<script>
export default {
  name: "ProfileFiexdLink",
  data() {
    return {
      link: [
        ['哔哩哔哩', 'https://www.bilibili.com/'],
        ['博客园', 'https://www.cnblogs.com/'],
        ['百度', 'https://www.baidu.com/'],
        ['GitHub', 'https://github.com/'],
        ['阿里巴巴矢量图标库', 'https://www.iconfont.cn/'],
        ['W3school', 'https://www.w3school.com.cn/'],
        ['百度翻译', 'https://fanyi.baidu.com/?aldtype=16047#auto/zh']
      ]
    };
  }
};
</script>

<style scoped>
.link {
  position: fixed;
  top: 16%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 36rem;
  display: flex;
  justify-content: space-around;
}

.link .item {
  overflow: hidden;
  height: 1rem;
  font-size: 0.8rem;
}

.link .item:hover {
  font-size: 1.2rem;
  height: 1.2rem;
}
</style>