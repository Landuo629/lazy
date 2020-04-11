<template>
  <div class="sentence" @mouseover="display" @mouseout="hide">
    <div class="hitokoto">{{ sentence }}</div>
    <div class="from" v-show="isActive">----------{{ sentenceFrom }}</div>
  </div>
</template>

<script>
export default {
  name: "HomeSentence",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    sentence: "",
    sentenceFrom: ""
  },
  methods: {
    display() {
      this.isActive = true;
    },
    hide() {
      this.isActive = false;
    }
  }
};
</script>

<style scoped>
.sentence {
  position: fixed;
  height: 4rem;
  width: 100%;
  top: 80%;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: small;
  color: #fff;
  transition: background-color ease 1.2s;
  overflow: hidden;
}

.sentence:hover {
  background-color: rgba(255, 255, 255, 0.9);
  color: #000;
}

.hitokoto {
  text-align: center;
  line-height: 3rem;
}

.from {
  position: absolute;
  right: 25%;
  bottom: 0.5rem;
}
</style>