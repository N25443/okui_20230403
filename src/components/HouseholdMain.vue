<script lang="ts">
  import { useTableStore } from '@/stores/table';
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref, reactive, defineComponent } from 'vue';
  export default defineComponent({
    components: { Form, Table },
    setup() {
      const tableStore = useTableStore();
      const formMessage = '入力フォーム';
      const tableMessage = '家計簿';
      // 表示するタブを識別する変数
      const activeTab = ref('Form.vue');
      // ボタン押下時のアクションをメソッド定義
      const changeTab = (tabName: string): void => {
        activeTab.value = tabName;
      };
      //テーブルの日付行押下時にタブをFormに切り替えてプルダウンの日付を変更する
      const inputDate = ref(1);
      const onDateButtonClick = (date: number): void => {
        changeTab('Form.vue');
        inputDate.value = date;
      };
      const setInputDate = (date: number): void => {
        inputDate.value = date;
      };
      const formDate = reactive({
        year: 2024,
        month: 4,
        date: 1,
      });
      const changeFormData = (date: number): void => {
        formDate.date = date;
      };

      return {
        tableStore,
        formMessage,
        tableMessage,
        activeTab,
        changeTab,
        onDateButtonClick,
        changeFormData,
        formDate,
        inputDate,
        setInputDate,
      };
    },
  });
</script>

<template>
  <div class="flex">
    <!--サイドバーとメインページを横並びにする-->
    <div class="fixed left-0 top-0 bg-blue-200 text-blue-800 min-h-screen px-10 pt-16">
      <p class="text-xl font-bold border-b border-blue-800 mb-2">Menu</p>
      <!-- タブ切替 -->
      <div>
        <div>
          <button class="underline hover:underline-offset-4" @click="changeTab('Form.vue')">Formタブ</button>
        </div>
        <div>
          <button class="underline hover:underline-offset-4" @click="changeTab('Table.vue')">Tableタブ</button>
        </div>
      </div>
    </div>
    <div>
      <div v-if="activeTab === 'Form.vue'">
        <Form :changeTab="changeTab" :formMessage="formMessage" :inputDate="inputDate" @setInputDate="setInputDate" />
      </div>
      <div v-if="activeTab === 'Table.vue'">
        <Table
          class="cursor-pointer"
          :tableMessage="tableMessage"
          :formDate="formDate"
          @onDateButtonClick="onDateButtonClick"
        />
      </div>
    </div>
  </div>
</template>
