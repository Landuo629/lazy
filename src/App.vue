<template>
  <div id="app">
    <home v-show="isActive" ref="home"></home>
    <Time @show-click="active"></Time>
    <Profile v-show="!isActive"></Profile>
    <setUp @confirm-click='confirm'></setUp>
  </div>
</template>

<script>
import Home from 'views/home/Home'
import Time from 'views/time/Time'
import Profile from 'views/profile/Profile'
import SetUp from 'views/setUp/SetUp'

export default {
  name: 'App',
  components: {
    Home,
    Time,
    Profile,
    SetUp
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
