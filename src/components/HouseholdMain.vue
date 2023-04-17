<script setup lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref } from 'vue';
  const formMessage = '入力';
  const tableMessage = '家計簿';
  // 表示するタブを識別する変数
  const activeTab = ref('Form.vue');
  // ボタン押下時のアクションをメソッド定義
  const onButtonClick = (tabName: string): void => {
    activeTab.value = tabName;
  };
</script>

<template>
  <div class="flex">
    <!--サイドバーとメインページを横並びにする-->
    <div class="fixed left-0 top-0 bg-blue-200 text-blue-800 min-h-screen px-10 pt-16">
      <p class="text-xl font-bold border-b border-blue-800 mb-2">Menu</p>
      <p>入力</p>
      <p>家計簿</p>
    </div>
    <!-- タブ切替 -->
    <button @click="onButtonClick('Form.vue')">Formタブ</button>
    <button @click="onButtonClick('Table.vue')">Tableタブ</button>

    <div v-if="activeTab === 'Form.vue'">
      <Form v-bind:formMessage="formMessage" />
    </div>
    <div v-if="activeTab === 'Table.vue'">
      <Table v-bind:tableMessage="tableMessage" />
    </div>
  </div>
</template>
