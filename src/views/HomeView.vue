<script>
export default {
  data() {
    return {
      show: 'all',
      textValue: '',
      selectedTab: '',
      data: [],
    };
  },
  mounted() {
    // 抓取local資料
    if (localStorage.getItem('todoList')) {
      this.data = JSON.parse(localStorage.getItem('todoList'))
    }
  },
  computed: {
    filterUserData() {
      if (this.show === 'all') {
        return this.data;
      } else if (this.show === 'complete') {
        return this.data.filter(item => item.checkbox);
      } else {
        return this.data.filter(item => !item.checkbox);
      }
    },
  },

  methods: {
    // give all
    giveShow(name) {
      if (name == 'all') {
        this.show = 'all';
      } else if (name == 'complete') {
        this.show = 'complete';
      } else {
        this.show = 'incomplete';
      };
    },
    // 新增資料
    add() {
      const lastItem = this.data.at(-1) ?? 0;
      if (this.textValue == '') {
        alert('請輸入備忘錄事項');
      } else {
        const obj = {
          id: lastItem + 1,
          checkbox: false,
          content: this.textValue,
        }
        this.data.push(obj);
      };
      this.textValue = '';
    },
    // 編輯資料
    edit(index) {
      this.data[index].content = prompt('要改啥');
    },
    // 刪除資料
    deleteData(index) {
      this.data.splice(index, 1);
      // filter 也可使用
    },
    // 儲存至local
    saveLocal() {
      if (this.data.length === 0) {
        localStorage.removeItem('todoList');
      } else {
        // 製作成JSON格式，以利儲存至localStorage
        const arrData = JSON.stringify(this.data);
        // localStorage存入數據
        localStorage.setItem('todoList', arrData);
      }
    },
  },
};
</script>

<template>
  <div class=" w-full h-screen flex justify-center items-center">
    <div class="w-[75%] h-[90%] flex bg-slate-400 flex-col p-5 rounded">
      <div class="w-full flex">
        <input type="text" id="" class="w-[75%] rounded p-1 text-black" placeholder="請輸入內容" v-model="textValue">
        <div class="ml-5 leading-8 bg-slate-700 p-2 rounded cursor-pointer" type="button" @click="add">新增</div>
      </div>
      <div class="w-full flex gap-3 mt-8">
        <div class="bg-gray-600 p-2 rounded cursor-pointer" :class="{ 'active': show == 'all' }" @click="giveShow('all')">
          全部</div>
        <div class="bg-gray-600 p-2 rounded cursor-pointer" :class="{ 'active': show == 'complete' }"
          @click="giveShow('complete')">已執行</div>
        <div class="bg-gray-600 p-2 rounded cursor-pointer" :class="{ 'active': show == 'incomplete' }"
          @click="giveShow('incomplete')">未執行</div>
      </div>
      <div class="w-full h-[70%]">
        <div class="flex justify-around mt-5 mb-2">
          <div class="w-1/3">執行</div>
          <div class="w-1/3">事項</div>
          <div class="w-1/3">功能</div>
        </div>
        <div class="data-show">
          <div class="flex justify-around mb-2" v-for="(item, index) in filterUserData" :key="data.id">
            <div class="w-1/3">
              <input type="checkbox" v-model="item.checkbox">
            </div>
            <div class="m1 w-1/3">{{ item.content }}</div>
            <div class="btn-box w-1/3 m1 flex gap-2">
              <button class="bg-gray-600 p-2 rounded" @click="edit(index)">編輯
              </button>
              <button class="bg-gray-600 p-2 rounded" @click="deleteData(index)">刪除</button>
            </div>
          </div>
        </div>
        <button class="bg-gray-600 p-2 rounded mt-5 ms-auto" type="button" @click="saveLocal">save to local</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-white text-black;
}
</style>