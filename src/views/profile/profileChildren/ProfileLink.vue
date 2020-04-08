<template>
  <div class="link">
      <div class="item">
          <ul>
              <a href=""><li></li></a>
          </ul>
      </div>
      <div class="add" @click="add">+</div>
  </div>
</template>

<script>
export default {
    name: 'ProfileLink',
    data() {
        return {
            item: []
        }
    },
    methods: {
        add() {
            
        }
    }
}
</script>

<style scoped>
    .link {
        position: fixed;
        top: 16%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 36rem;
        background-color: thistle;
    }
    /* .item {
        padding: 0.2rem;
        width: 2rem;
        height: 2rem;
        border: 0.1rem solid #000;
    } */
    .add {
        font-size: 2rem;
        width: 3.5rem;
        height: 3.5rem;
        border: 0.1rem solid #000;
        text-align: center;
        line-height: 3.5rem;
        box-sizing: border-box;
    }
</style>