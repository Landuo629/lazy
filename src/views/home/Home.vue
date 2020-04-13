<template>
    <div id="Home" @click.capture ="smogN">
      <!-- <home-background ref="background"></home-background> -->
      <home-search @button-click="smogY" ref="search"></home-search>
      <home-sentence :sentence='sentence' :sentenceFrom='sentenceFrom' v-show="isActive"></home-sentence>
      <home-weather v-show="false"></home-weather>
    </div>
</template>

<script>
import HomeSearch from 'views/home/homeChildren/HomeSearch'
import HomeSentence from 'views/home/homeChildren/HomeSentence'
import HomeWeather from 'views/home/homeChildren/HomeWeather'

import {getsentence} from 'network/home.js'

export default {
    name: 'Home',
    data () {
      return {
        sentence: '',
        sentenceFrom: '',
        type: 'c=d&c=c'
      }
    },
    components: {
      HomeSearch,
      HomeSentence,
      HomeWeather
    },
    computed: {
      isActive: {
        get() {
          return this.$store.state.isActive
        },
        // 不设置set报错
        set(val) {

        }
    }
    },
    created() {
      // 传入一言句子类型
      this.getsentence(this.type)
    },
    methods: {
      //点击遮罩层
      smogN() {
        //this.$refs.search.isActive = false
        //this.$refs.search.Search = 'Search'
        //this.$refs.background.mohu = false
        this.isActive = false   
      },
      //点击input
      smogY(item) {
        this.isActive = item
        // this.$refs.background.mohu = true
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