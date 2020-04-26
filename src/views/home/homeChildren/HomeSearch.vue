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
        v-model="Search"
        @click="smog(true)"
        @input="association"
        autocomplete="off"
        maxlength="30"
        :class="{'smog': isActive}"
        ref="search"
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
      associationalword: [],
      i : -1,
      Search: 'Search'
    };
  },
  computed: {
    isActive() {
      return this.$store.state.isActive 
    }
  },
  mounted() {
      const that = this
      //子组件接收数据
      this.bus.$on("Search", function(data) {
          that.Search = data
      }) 
  },
  methods: {
    //点击input
    smog(item) {
      // this.isActive = true
      this.$store.commit('isActive', true)
      this.$emit("button-click", item)
      this.$store.commit('mohu', true)
      this.Search === 'Search' ? this.Search = '' : null
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
      console.log('上');
    },
    //联想词使用鼠标↓键
    lower() {
      console.log('下');
    }
  }
};
</script>

<style scoped>
.home-search form {
  position: fixed;
  top: 26%;
  left: 50%;
  z-index: 3;
  font-size: small;
}
.home-search form input {
  position: absolute;
  transform: translate(-50%, -100%);
  width: 200px;
  height: 1rem;
  border-radius: 100px;
  background-color: rgba(255,255,255,.25);
  text-align: center;
  outline: none;
  border: none;
  padding: 1rem 0.5rem;
  transition: width ease .5s;
  color: #000;
  box-shadow: rgba(0,0,0,.2) 0 0 10px;
  backdrop-filter: blur(10px);
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
  background-color: rgba(255, 255, 255, 0.3); 
  padding: 0.2rem 1rem;
}
.home-search form ul li a {
  color: rgba(255,255,255,.8);
  font-size: small;
  display:inline-block;
  width: 400px;
}
.home-search form ul li:first-child {
  border-radius: 10px 10px 0 0;
  padding-top: 0.5rem;
}

.home-search form ul li:last-child {
  border-radius: 0 0 10px 10px ;
  padding-bottom: 0.5rem;
}

.home-search form ul li:hover {
  background-color: #ddd;
}
</style>