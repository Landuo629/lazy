<template>
  <div class="profile">
      <HomeBackground></HomeBackground>
      <profileLink v-show="false"></profileLink>
      <ProdileMemo></ProdileMemo>
  </div>
</template>

<script>
import HomeBackground from 'views/home/homeChildren/HomeBackground'
import ProfileLink from 'views/profile/profileChildren/ProfileLink'
import ProdileMemo from 'views/profile/profileChildren/ProdileMemo'

export default {
    name: 'Profile',
    components: {
      HomeBackground,
      ProfileLink,
      ProdileMemo
    }
}
</script>

<style>

</style>