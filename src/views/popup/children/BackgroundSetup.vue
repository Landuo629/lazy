<template>
  <div class="background">
      <Popup class="popup">
          <h3>背景壁纸设置</h3>
          <h4>系统壁纸</h4>
          <img v-bind:src="require(`assets/img/${item}`)"
           v-for="(item, index) in imges" :key="item.id"
            @click="background(index)">
           <h4>必应壁纸</h4>
           <img :src="biying" @click="biyingClick(biying)">
      </Popup>
  </div>
</template>

<script>
import Popup from "components/content/Popup"

import {getbiying} from 'network/home.js'
export default {
    name: 'BackgroundSetup',
    components: {
     Popup
  },
  data() {
      return {
           imges: [
            "0.jpg",
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg"
      ],
      biying: null
  }
  },
  mounted() {
      //必应
      getbiying()
    .then(res => {
      // console.log(res)
      // console.log(res.data.bing.url)
      this.biying = res.data.bing.url
    })
    .catch()
  },
  methods: {
      //系统背景壁纸
      background(index) {
          this.$store.commit("images", "background: url(" +
        require("assets/img/" + this.imges[index]) + ") center top / cover no-repeat fixed")
      },
      //必应壁纸
      biyingClick(biying) {
           this.$store.commit("images", "background: url(" + biying + ") center top / cover no-repeat fixed")
      }
  }
}
</script>

<style scoped>
.popup {
    padding: 0 2rem;
}
img {
    display: inline-block;
    width: 8rem;
    height: 5rem;
    margin: .3rem;
    cursor: pointer;
    transition: all ease 0.4s;
}
img:hover {
    transform:scale(1.2, 1.2);
}
h3 {
    margin-left: .5rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    padding: .2rem;
}
h4 {
    margin-left: .5rem;
    font-size: 1rem;
    margin-top: 1rem;
    padding: .2rem;
}
</style>