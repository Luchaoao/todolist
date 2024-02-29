<script>

export default {
    data() {
        return {
            Text: '',
            todoText: [],
            check: null,
            editSwitch: false,
            editMsg: '',
        };
    },
    mounted() {
        if (localStorage.getItem('msg')) {
            this.todoText = JSON.parse(localStorage.getItem('msg'))
        }
    },
    methods: {
        pushText() {
            let myId = 0;
            if (this.todoText.length !== 0) {
                myId = this.todoText[this.todoText.length - 1].id;
            }
            if (this.Text.trim() !== "") {
                const newText = {
                    id: myId + 1,
                    edit: false,
                    msg: this.Text,
                    editSwitch: false,
                    editMsg: '',
                }
                this.todoText.push(newText);
                console.log(this.todoText);
            } else {
                alert('是不會打字逆');
            }
            this.Text = '';
        },

        deleteText(index) {
            this.todoText.splice(index, 1);
        },
        savelocal() {
            localStorage.setItem('msg', JSON.stringify(this.todoText));
        },

        // 彈跳視窗
        // editText(id) {
        //   this.todoText.map((item) => {
        //     if (item.id === id) {
        //       const content = prompt('請修改文字',item.msg);
        //         if (content !== null && content !== "") {
        //         item.msg = content;
        //         }
        //     }
        //   });
        // },

        // 輸入框模式
        editmsg(item) {
            item.editSwitch = !item.editSwitch;
            if (item.editMsg !== '') {
                item.msg = item.editMsg;
            } else {
                item.editMsg = item.msg
            }
        },

        filterText() {
            if (this.check === null) {
                return this.todoText
            } else {
                return this.todoText.filter(item => item.edit == this.check)
            }
        },
    },
};



</script>
<template>
    <div class="todolist-body w-full h-screen bg-gray-200">
        <div class="nav w-full h-[60px]  bg-teal-500"></div>
        <div class="add w-full h-[80px] flex justify-center items-center gap-2">
            <input v-model="Text" type="text" placeholder="請輸入你的代辦事項" class="add-text w-2/4 h-3/4 " />
            <button class="add-Todo add-btn" type="button" @click="pushText()">新增</button>
        </div>
        <div>
            <div class="search-btn gap-5 w-full h-[80px] flex items-center border-b-4">
                <div class="all state-text" type="button" data-search="all" @click="check = null"
                    :class="{ 'active': check == null }">全部</div>
                <div class="is-todo state-text" type="button" data-search="isTodo" @click="check = true"
                    :class="{ 'active': check == true }">已執行</div>
                <div class="not-todo state-text" type="button" data-search="notTodo" @click="check = false"
                    :class="{ 'active': check == false }">未執行</div>
            </div>
        </div>
        <div class="title-div w-full h-[60px] bg-teal-500 flex justify-between items-center">
            <div class="div title-text">狀態</div>
            <div class="div title-text">訊息</div>
            <div class="div title-text">功能</div>
        </div>
        <table class="todo w-full h-[60px]">
            <thead class="w-full h-full flex flex-col">
                <tr class="w-full h-full flex  justify-between items-center bg-teal-500"
                    v-for="(item, index) in filterText()" :key="item.id">
                    <th class="lg:w-[200px] xl:w-[400px] h-full flex justify-center items-center">
                        <input type="checkbox" v-model="item.edit">
                    </th>
                    <th class="lg:w-[200px] xl:w-[400px] h-full flex justify-center items-center">
                    <td v-if="item.editSwitch === false" class="text-white">{{ item.msg }}</td>
                    <input v-else v-model="item.editMsg" type="text">
                    </th>
                    <th class="lg:w-[200px] xl:w-[400px] h-full flex justify-center items-center gap-5">
                        <button @click="editmsg(item)" class="text-white">編輯</button>
                        <button @click="deleteText(index)" class="text-white">刪除</button>
                    </th>
                </tr>
            </thead>
            <tbody class="data-show"></tbody>
        </table>
        <button class="sava-local w-[100px] h-[50px]  bg-teal-400 text-white rounded-md" type="button"
            @click="savelocal()">儲存進Local</button>
    </div>
</template>

<style scoped>
.active {
    @apply bg-white text-black;
}

.state-text {
    @apply w-[100px] h-[60px] border-2 flex items-center justify-center text-white bg-teal-500 rounded-lg text-xl font-serif font-black;
}

.title-text {
    @apply w-[400px] flex justify-center items-center text-xl font-serif font-black text-white
}

.add-btn {
    @apply w-[100px] h-[50px] bg-teal-500 border-4 text-white text-xl font-serif font-black
}</style>