<template>
    <div id="Home" @click.capture ="smogN">
      <home-background ref="background"></home-background>
      <home-search @button-click="smogY" ref="search" ></home-search>
      <home-sentence :sentence='sentence' :sentenceFrom='sentenceFrom' v-show="isActive"></home-sentence>
      <home-weather v-show="false"></home-weather>
    </div>
</template>

<script>
import HomeSearch from 'views/home/homeChildren/HomeSearch'
import HomeBackground from 'views/home/homeChildren/HomeBackground'
import HomeSentence from 'views/home/homeChildren/HomeSentence'
import HomeWeather from 'views/home/homeChildren/HomeWeather.vue'

import {getsentence} from 'network/home.js'

export default {
    name: 'Home',
    data () {
      return {
        isActive: false,
        sentence: '',
        sentenceFrom: '',
        type: 'c=d&c=c'
      }
    },
    components: {
      HomeSearch,
      HomeBackground,
      HomeSentence,
      HomeWeather
    },
    methods: {
      //点击遮罩层
      smogN() {
        this.$refs.search.isActive = false
        this.$refs.background.mohu = false
        this.isActive = false
      },
      //点击input
      smogY(item) {
        this.isActive = item
        this.$refs.background.mohu = true
        this.getsentence(this.type)
      },
      //网络请求相关方法
      //随机句子
      getsentence(type) {
        //console.log(type)
        getsentence(type)
        .then(res => {
          //console.log(res)
          this.sentence = res.data.hitokoto
          this.sentenceFrom = res.data.from
          
        })
        .catch();
      }
    }
}
</script>

<style scoped>

</style>