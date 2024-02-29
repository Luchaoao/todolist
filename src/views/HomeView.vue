<script>
export default {
  data() {
		return {
			selectedTab:'',
      arr:[],
		};
	},
  methods: {
		// 篩選使用者資料
		filterUserData() {
			if (!this.selectedTab) {
				return this.arr;
			}
			return this.arr.filter(arr => arr.checkbox === this.selectedTab);
		},
	},
};
</script>

<template>
  <div class=" w-full h-screen flex justify-center items-center">
    <div class="w-[75%] h-[90%] flex bg-slate-400 flex-col p-5 rounded">
      <div class="w-full flex">
        <input type="text" id="" class="w-[75%] rounded p-1" placeholder="請輸入內容">
        <div class="ml-5 leading-8 bg-slate-700 p-2 rounded" type="button">新增</div>
      </div>
      <div class="w-full flex gap-3 mt-8">
        <div class="bg-gray-600 p-2 rounded" @click="selectedTab = ''">全部</div>
        <div class="bg-gray-600 p-2 rounded" @click="selectedTab = 'complete'">已執行</div>
        <div class="bg-gray-600 p-2 rounded" @click="selectedTab = 'incomplete'">未執行</div>
      </div>
      <div class="w-full h-[70%]">
        <div class="flex justify-around mt-5 mb-2">
          <div class="m1 w-1/3">執行</div>
          <div class="m1 w-1/3">事項</div>
          <div class="ma w-1/3">功能</div>
        </div>
        <div class="data-show">
          <div class="flex justify-around">
            <div class="w-1/3">
              <input type="checkbox">
            </div>
            <div class="m1 w-1/3">第一筆</div>
            <div class="btn-box w-1/3 m1 flex gap-2">
              <button class="bg-gray-600 p-2 rounded">編輯</button>
              <button class="bg-gray-600 p-2 rounded">刪除</button>
            </div>
          </div>
        </div>
        <button class="bg-gray-600 p-2 rounded mt-5 ms-auto" type="button">存進local</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>