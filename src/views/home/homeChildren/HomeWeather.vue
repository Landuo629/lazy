<template>
  <div class="weather">
    <div class="true">
      <span>{{ city }}</span>
      <span>{{ tem }}</span>
      <span>{{ wea }}</span>
    </div>
    <div class="false">
        
    </div>
  </div>
</template>

<script>
import { getweather } from "network/home.js";

export default {
  name: "HomeWeather",
  data() {
    return {
      city: "",
      tem: "",
      wea: ""
    };
  },
  created() {
    this.getweather();
  },
  methods: {
    getweather() {
      getweather("安吉")
        .then(res => {
          console.log(res);
          this.city = res.data.city;
          this.tem = res.data.data[0].tem;
          this.wea = res.data.data[0].wea;
        })
        .catch();
    }
  }
};
</script>

<style scoped>
.weather {
  font-size: 0.8rem;
}

.weather span {
  padding: 0.1rem;
}
</style>