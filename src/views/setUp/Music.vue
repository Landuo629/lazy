<template>
  <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="330"
      height="86"
      src="//music.163.com/outchain/player?type=2&id=476114873&auto=1&height=66"
    ></iframe>
</template>

<script>
export default {
  name: "Music"
};
</script>

<style scoped>
iframe {
  position: fixed;
  top: 7rem;
  right: -16rem;
  /* transition: 变化的属性 花费时间 运动曲线 何时开始; */
  transition: right ease 0.5s;
}

iframe:hover {
  right: -0.3rem;
}
</style>