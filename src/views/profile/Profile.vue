<template>
  <div class="profile">
      <HomeBackground></HomeBackground>
      <profileLink v-show="false"></profileLink>
      <ProfileFiexdLink></ProfileFiexdLink>
      <ProdileMemo></ProdileMemo>
  </div>
</template>

<script>
import HomeBackground from 'views/home/homeChildren/HomeBackground'
import ProfileLink from 'views/profile/profileChildren/ProfileLink'
import ProdileMemo from 'views/profile/profileChildren/ProdileMemo'
import ProfileFiexdLink from 'views/profile/profileChildren/ProfileFiexdLink'

export default {
    name: 'Profile',
    components: {
      HomeBackground,
      ProfileLink,
      ProdileMemo,
      ProfileFiexdLink
    }
}
</script>

<style>

</style>