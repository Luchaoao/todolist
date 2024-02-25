<script setup>

</script>

<template>
  <main>
    <div class="bg-blue-400 w-full h-screen">
        <div class="content">
            <div class="add">
                <input type="text" id="" class="add-text" placeholder="請輸入內容">
                <div class="add-Todo" type="button">新增</div>
            </div>
            <div class="complete-list">
                <div class="all" data-search="all">全部</div>
                <div class="complete" data-search="complete">已執行</div>
                <div class="incomplete" data-search="incomplete">未執行</div>
            </div>
            <table class="todo">
                <thead>
                    <tr>
                        <th>執行</th>
                        <th>事項</th>
                        <th>功能</th>
                    </tr>
                </thead>
                <tbody class="data-show"></tbody>
            </table>
            <div class="enter-to-local" type="button">save local</div>
        </div>
    </div>

  </main>
</template>
