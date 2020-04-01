<template>
  <div class="input-m">
    <div class="search">
      <input type="text" placeholder="placeholder" v-model="content" @keyup="input" />
    </div>
    <ul class="associate-list" v-show="associateWords&&showList" @mouseout="selectedLi(0)">
      <li class="associate-item">{{inputContent}}</li>
      <li
        class="associate-item"
        v-for="(item,index) of associateWords"
        :key="index"
        @mouseover="selectedLi(index+1)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AssociationalWord",
  data () {
      return {
        content: '',//双向绑定的数据，input输入框中的内容，用户选择联想词列表时同步变化
        inputContent: '',//保存用户通过键盘输入的内容，不与用户选择的联想词列表同步变化
        focusIndex: 0,//用户选择的联想词<li>列表的下标
        associateWords: [],//联想词列表数组
        showList: true//是否显示联想词列表由此变量和associateWords的长度共同控制
      }
  },
  methods: {
    //js操作
    input(e) {
      //keyup事件的event
      e = e || window.event;
      this.showList = true;
      // 按“↑” 键
      if (e.keyCode === 38) {
        this.focusIndex--;
        this.selectedLi();
      } else if (e.keyCode === 40) {
        // 按“↓”,数组下标从0开始,list的[0]项内容为用户输入内容，不显示，从[1]项开始显示
        this.focusIndex++;
        this.selectedLi();
      } else if (e.keyCode === 13) {
        // 按“Enter”调用搜索函数
        this.doSomething(); //----向后台发送搜索请求
        this.associateWords = [];
      } else {
        // 用户继续输入时，将inputContent置空----非常重要的一步
        this.inputContent = "";
        this.focusIndex = 0;
        // 搜索联想内容
        this.getAssociateWords(); //----向后台请求相关联想词列表
        this.clearSelected();
      }
    },
    //与样式相关的js操作
    selectedLi(hoverIndex) {
      // 当inputContent内容为空时，记录下搜索框中用户输入的内容，作为associate-item的第一项
      if (this.inputContent === "") {
        this.inputContent = this.content;
      }
      let associateList = document.getElementsByClassName("associate-item");
      // 移除已添加的.selected样式
      for (var i = 0; i < associateList.length; i++) {
        associateList[i].classList.remove("selected");
      }
      if (hoverIndex !== undefined) {
        this.focusIndex = hoverIndex;
      }
      // 一直按向下键超出联想内容li长度时，应回到联想内容第一个
      this.focusIndex =
        (this.focusIndex + associateList.length) % associateList.length;
      // 为选中的li添加.selected样式
      let selectedOne = associateList[this.focusIndex];
      this.content = selectedOne.textContent;
      selectedOne.classList.add("selected");
    },
    clearSelected() {
      let associateList = document.getElementsByClassName("associate-item");
      // 移除已添加的.selected样式
      for (var i = 1; i < associateList.length; i++) {
        associateList[i].classList.remove("selected");
      }
    },
    //为除了input框以外的页面部分添加监听事件，点击input以外的部分时，隐藏联想词列表
//     document.body.addEventListener('click', e => {      
//     if (e.target.nodeName === 'INPUT') {        
//         this.showList = true      
//     } else {        
//         this.showList = false      
//     }    
// })
    //向后台服务器请求联想词列表
    getAssociateWords () {      
    let self = this      
    axios.get('XX/data.json').then(function (res) {        
         self.associateWords = result.slice(0, 5) 
    })    
}
  }
};
</script>

<style>
</style>