<template>
  <div class="home-search">
    <form
      action="http://www.baidu.com/baidu"
      @keyup.38="upper"
      @keyup.40="lower"
    >
      <input
        type="text"
        name="word"
        size="40"
        placeholder="input"
        @click="smog(true)"
        @input="association"
        autocomplete="off"
        maxlength="30"
         :class="{'smog': isActive}"
      />
      <!-- name只能为word，否则会跳转到百度原页面 -->
      <!-- <input type="submit" value="百度一下" /> -->
      <ul v-show="isActive">
        <li v-for="item in associationalword" :key="item.id">
          <a :href="'https://www.baidu.com/baidu?word=' + item.q">{{ item.q }}</a>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { ajax } from "network/home.js";

export default {
  name: "HomeSearch",
  data() {
    return {
      lazy: "lazy",
      isActive: false,
      associationalword: [],
      i : -1
    };
  },
  methods: {
    //点击from
    smog(item) {
      this.isActive = true
      this.$emit("button-click", item)
    },
    //获取联想词
    association(e) {
      ajax(e.target.value)
        .then(res => {
          //console.log(res.g)
          this.associationalword = res.g
        })
        .catch();
    },
    //联想词使用鼠标↑键
    upper() {
      console.log(1);
    },
    //联想词使用鼠标↓键
    lower() {
      console.log(2);
      this.associationalword[this.i++]
    }
  }
};
</script>

<style scoped>
.home-search form {
  position: fixed;
  top: 22%;
  left: 50%;
  z-index: 3;
}
.home-search form input {
  position: absolute;
  transform: translate(-50%, -100%);
  width: 200px;
  height: 2rem;
  border-radius: 400px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  outline: none;
  border: none;
}
.home-search form input:hover {
  width: 400px;
}
.home-search form .smog {
  width: 400px;
  background-color: rgba(255, 255, 255, 0.9);
}

.home-search form ul {
  width: 400px;
  margin-left: -200px;
}
.home-search form ul li {
  padding: 0.1rem 0;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
}

.home-search form ul li:hover {
  background-color: #ddd;
}
</style>