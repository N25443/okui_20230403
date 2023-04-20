<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref, reactive, defineComponent } from 'vue';
  import type { rowType, dayOfWeekType } from '@/components/Type.vue';
  export default defineComponent({
    components: { Form, Table },
    setup() {
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
      //曜日とデザインの設定
      const DAY_OF_WEEKS: dayOfWeekType[] = [
        {
          id: 1,
          name: '月',
          color: 'bg-gray-100',
        },
        {
          id: 2,
          name: '火',
          color: 'bg-gray-100',
        },
        {
          id: 3,
          name: '水',
          color: 'bg-gray-100',
        },
        {
          id: 4,
          name: '木',
          color: 'bg-gray-100',
        },
        {
          id: 5,
          name: '金',
          color: 'bg-gray-100',
        },
        {
          id: 6,
          name: '土',
          color: 'bg-blue-500 bg-opacity-50',
        },
        {
          id: 7,
          name: '日',
          color: 'bg-red-500 bg-opacity-50',
        },
      ];
      //カレンダーに表示する内容の配列
      const houseHolds: rowType[] = [...Array(30)].map((_, i) => ({
        date: i + 1,
        day: DAY_OF_WEEKS[i % 7].name,
        foodCost: null,
        fixedCost: null,
      }));

      return {
        formMessage,
        tableMessage,
        activeTab,
        changeTab,
        houseHolds,
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
        <Form
          :changeTab="changeTab"
          :houseHolds="houseHolds"
          :formMessage="formMessage"
          :inputDate="inputDate"
          @setInputDate="setInputDate"
        />
      </div>
      <div v-if="activeTab === 'Table.vue'">
        <Table
          class="cursor-pointer"
          v-model:houseHolds="houseHolds"
          v-bind:tableMessage="tableMessage"
          v-bind:formDate="formDate"
          @onDateButtonClick="onDateButtonClick"
        />
      </div>
    </div>
  </div>
</template>
