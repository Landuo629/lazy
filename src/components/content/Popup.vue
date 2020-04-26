<template>
  <div class="popup" ref="popup" v-show="ejectClose">
      <div class="close" @mouseover="onmouseover" @mouseout="onmouseout" @click="close">×</div>
      <div class="header">
          <slot name='header'></slot>
      </div>
      <slot class="content"></slot>
  </div>
</template>

<script>
export default {
    name: 'Popup',
    computed: {
        ejectClose() {
            return this.$store.state.ejectClose
        }
    },
    methods: {
        onmouseover() {
            this.$refs.popup.style = 'transform: rotate3d(1,1,0,15deg) translate(-50%, -50%); transition: all  ease .5s;'
        },
        onmouseout() {
            this.$refs.popup.style = 'transform: translate(-50%, -50%); transition: all  ease .5s;'
        },
        close() {
            this.$store.commit("ejectClose", false)
            this.$store.commit("regular", false)
            this.$store.commit("background", false)
        }
    }
}
</script>

<style scoped>
.popup {
    position: fixed;
    width: 35rem;
    height: 32.5rem;
    top: 50%;
    left: 50%;
    background-color: #fff;
    border-radius: 20px;
    z-index: 10;
    transform: translate(-50%, -50%);
}

.popup .close {
    position: absolute;
    right: 1.2rem;
    top: .6rem;
    font-size: 2rem;
    cursor: pointer;
}

.popup .close:hover {
    color: #008484;
    cursor: pointer;
}

.popup .header {
    position: relative;
    left: 5rem;
    top: 2rem;
    font-size: 20px;
}

.popup .content {
    position: relative;
    top: 3rem;
    left: 5rem;
    width: 25rem;
    right: 25rem;
}
</style>