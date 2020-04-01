<template>
  <div class="memo">
    <!-- 主体区域 -->
    <section id="todoapp">
      <!-- 输入框 -->
      <header class="header">
        <input
          v-model="inputValue"
          @keyup.enter="add"
          autofocus="autofocus"
          autocomplete="off"
          placeholder="请输入任务"
          class="new-todo"
        />
        <span @click='add'>Y</span>
      </header>
      <!-- 列表区域 -->
      <section class="main">
        <ul class="todo-list">
          <li class="todo" v-for="(item,index) in list" :key="item.id">
            <div class="view">
              <span class="index">{{ index+1 }}.</span>
              <label>{{ item }}</label>
              <button class="destroy" @click="romove(index)">X</button>
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
    </section>
  </div>
</template>

<script>
export default {
  name: "ProdileMemo",
  data() {
    return {
      //  总数据
      list: ["吃饭饭", "睡觉觉", "写代码"],
      //  输入的内容
      inputValue: ""
    };
  },
  methods: {
    add: function() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    romove: function(index) {
      //console.log("删除");
      //console.log(index);
      this.list.splice(index, 1);
    },
    sub: function() {
      this.list = [];
    }
  }
};
</script>

<style scoped>
.memo {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
}
.memo .header input{
    padding: 0.2rem;
}

.memo .main .todo-list .todo {
    background-color: #fff;
    border-bottom: 1px solid #888;
}

.memo .main .todo-list .todo .view button{
    position: absolute;
    right: 0;
    font-size: 0.2rem;
}

</style>