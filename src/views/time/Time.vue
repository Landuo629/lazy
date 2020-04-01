<template>
  <div class="time" @click="active">
      {{ nowTimes.hou }} : {{ nowTimes.min }}
  </div>
</template>

<script>
export default {
    name: 'Time',
    data(){
        return{
            nowTimes:{
                // yy:0,
                // dd:"00",
                hou:"00",
                min:"00",
                // sec:"00"
            },
        }
    },
    //每秒执行一次
    mounted(){
        setInterval( ()=>{
            this.setNowTimes();
        },1000)
    },
    methods:{
        active() {
            this.$emit("show-click")
        },
        setNowTimes(){
            let myDate = new Date();
            // this.nowTimes.yy = myDate.getMonth()+1;
            // this.nowTimes.dd = String(myDate.getDate()<10?'0'+ myDate.getDate(): myDate.getDate()) ;
            this.nowTimes.hou = String(myDate.getHours()<10?"0"+myDate.getHours():myDate.getHours());
            this.nowTimes.min = String(myDate.getMinutes()<10?'0'+myDate.getMinutes():myDate.getMinutes());
            // this.nowTimes.sec = String(myDate.getSeconds()<10?'0'+myDate.getSeconds():myDate.getSeconds());
        }
    }
}
</script>

<style scoped>
.time {
    position: fixed;
    top: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 2rem;
    color: #004848;
}

.time:hover {
    font-size: 1.8rem;
    border-bottom: 0.2rem solid #494949;
}
</style>