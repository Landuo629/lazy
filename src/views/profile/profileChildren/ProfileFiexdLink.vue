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
        ['图标库', 'https://www.iconfont.cn/'],
        ['W3school', 'https://www.w3school.com.cn/'],
        ['百度翻译', 'https://fanyi.baidu.com/?aldtype=16047#auto/zh'],
        ['网易云音乐', 'https://music.163.com/'],
        ['淘宝', 'https://www.taobao.com/'],
        ['京东', 'https://www.jd.com/'],
        ['贴吧', 'https://tieba.baidu.com/'],
        ['腾讯视频', 'https://v.qq.com/']
      ]
    };
  }
};
</script>

<style scoped>
.link {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 36rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 5;
}

.link .item {
  overflow: hidden;
  height: 1.2rem;
  font-size: 0.8rem;
  width: 6rem;
  text-align: center;
  border-radius: 10px;
  padding: 0.1rem 0;
  color: #fff;
}
.link .item a{
  color: inherit;
  display:inline-block;
  width: 6rem;
  height: 1.2rem;
}
.link .item:hover {
  background-color: rgba(255, 255, 255, 0.6);
  color: #008484;
}

</style>