<template>
  <div class="sentence">
      <div class="hitokoto">{{ sentence }}</div>
      <div class="from">----------{{ sentenceFrom }}</div>
  </div>
</template>

<script>
export default {
    name: 'HomeSentence',
    props: {
        sentence: '',
        sentenceFrom: ''
    }
}
</script>

<style scoped>
.sentence {
    position: fixed;
    height: 4rem;
    width: 100%;
    top: 80%;
    z-index: 3;
    background-color: rgba(255, 255, 255, .1);
}

.sentence:hover {
    background-color: rgba(255, 255, 255, .9);
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