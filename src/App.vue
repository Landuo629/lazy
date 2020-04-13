<template>
  <div id="app">
    <home v-show="isActive" ref="home"></home>
    <Time @show-click="active" ref="mohu"></Time>
    <Profile v-show="!isActive"></Profile>
    <setUp @confirm-click='confirm'></setUp>
    <About></About>
    <Background @show-click="correct"></Background>
    <Music></Music>
  </div>
</template>

<script>
import Background from 'views/setUp/Background'
import Home from 'views/home/Home'
import Time from 'views/time/Time'
import Profile from 'views/profile/Profile'
import SetUp from 'views/setUp/SetUp'
import About from 'views/setUp/About'
import Music from 'views/setUp/Music'

export default {
  name: 'App',
  components: {
    Home,
    Time,
    Profile,
    SetUp,
    About,
    Background,
    Music
  },
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    active() {
      this.isActive = !this.isActive
    },
    correct() {
      this.isActive = true
      this.$refs.mohu.mohu = false
    },
    confirm(item) {
      this.$refs.home.type = item
    }
}
}
</script>

<style scoped>
@import 'assets/css/base.css';
@import '//at.alicdn.com/t/font_1716900_b253lb2vcsf.css';
</style>
