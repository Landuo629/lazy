<template>
  <div class="memo" >
      <!-- 输入框 -->
      <header class="header">
        <textarea
          type="text"
          v-model="inputValue"
          @keyup.enter="add"
          autocomplete="off"
          class="new-todo"
        />
        <span @click='add'>＋</span>
      </header>
      <!-- 列表区域 -->
      <section class="main">
        <ul class="todo-list">
          <li class="todo" v-for="(item,index) in list" :key="item.id" @click="display(item)">
            <div class="view">
              <span class="destroy" @click="romove(index)">X</span>
              <span class="index">{{ index+1 }}.</span>
              <label>{{ item }}</label>
            </div>
          </li>
        </ul>
      </section>
      <!-- 统计和清空 -->
      <!-- <footer class="footer">
        <span class="todo-count" v-if="list.length!=0">
          <strong>{{ list.length }}</strong> items left
        </span>
        <button class="clear-completed" @click="sub" v-if="list.length!=0">Clear</button>
      </footer> -->
  </div>
</template>

<script>
export default {
  name: "ProdileMemo",
  data() {
    return {
      //  总数据
      list: [],
      //  输入的内容
      inputValue: ""
    };
  },
  methods: {
    add() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    romove: function(index) {
      //console.log("删除");
      //console.log(index);
      this.list.splice(index, 1);
    },
    sub() {
      this.list = [];
    },
    move(e) {
      this.$refs.move.style.left = e.clientX + 'px'
      console.log(this.$refs.move.style.left)
      console.log(e.clientX)
    },
    display(item) {
      this.inputValue = item
    }
  }
};
</script>

<style scoped>
.memo {
    position: fixed;
    top: 25%;
    left: 30%;
}

.memo .header textarea {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  outline: none;
  border: none;
  width: 20rem;
  height: 8rem;
}

.memo .header span {
  position: absolute;
  top: 0.2rem;
  padding: 3.2rem 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

.memo .main {
  position: absolute;
  left: 22rem;
  top: 0;
}

.memo .main .todo-list .todo{
  background-color: rgba(255, 255, 255, 0.8);
  width: 8rem;
  height: 1.2rem;
  overflow: hidden;
  border: rgba(0, 0, 0, 0.2) solid 1px;
}

.memo .main .todo-list .view .destroy {
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  right: -1rem;
}
</style>