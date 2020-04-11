<template>
  <div class="profile">
      <profileLink v-show="false"></profileLink>
      <ProfileFiexdLink></ProfileFiexdLink>
      <ProdileMemo></ProdileMemo>
  </div>
</template>

<script>
import ProfileLink from 'views/profile/profileChildren/ProfileLink'
import ProdileMemo from 'views/profile/profileChildren/ProdileMemo'
import ProfileFiexdLink from 'views/profile/profileChildren/ProfileFiexdLink'

export default {
    name: 'Profile',
    components: {
      ProfileLink,
      ProdileMemo,
      ProfileFiexdLink
    }
}
</script>

<style>

</style>