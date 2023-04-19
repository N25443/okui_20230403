<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref, reactive, defineComponent } from 'vue';
  import type { rowType } from '@/components/Type.vue';
  export default defineComponent({
    components: { Form, Table },
    setup(props) {
      const formMessage = '入力フォーム';
      const tableMessage = '家計簿';
      // 表示するタブを識別する変数
      const activeTab = ref('Form.vue');
      // ボタン押下時のアクションをメソッド定義
      const onTabButtonClick = (tabName: string): void => {
        activeTab.value = tabName;
      };
      //テーブルの日付行押下時にタブをFormに切り替えてプルダウンの日付を変更する
      const inputDate = ref(1);
      const onDateButtonClick = (date: number): void => {
        onTabButtonClick('Form.vue');
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
      const houseHolds: rowType[] = reactive([
        { date: 1, day: '土', foodCost: null, fixedCost: null },
        { date: 2, day: '日', foodCost: null, fixedCost: null },
        { date: 3, day: '月', foodCost: null, fixedCost: null },
        { date: 4, day: '火', foodCost: null, fixedCost: null },
        { date: 5, day: '水', foodCost: null, fixedCost: null },
        { date: 6, day: '木', foodCost: null, fixedCost: null },
        { date: 7, day: '金', foodCost: null, fixedCost: null },
        { date: 8, day: '土', foodCost: null, fixedCost: null },
        { date: 9, day: '日', foodCost: null, fixedCost: null },
        { date: 10, day: '月', foodCost: null, fixedCost: null },
        { date: 11, day: '火', foodCost: null, fixedCost: null },
        { date: 12, day: '水', foodCost: null, fixedCost: null },
        { date: 13, day: '木', foodCost: null, fixedCost: null },
        { date: 14, day: '金', foodCost: null, fixedCost: null },
        { date: 15, day: '土', foodCost: null, fixedCost: null },
        { date: 16, day: '日', foodCost: null, fixedCost: null },
        { date: 17, day: '月', foodCost: null, fixedCost: null },
        { date: 18, day: '火', foodCost: null, fixedCost: null },
        { date: 19, day: '水', foodCost: null, fixedCost: null },
        { date: 20, day: '木', foodCost: null, fixedCost: null },
        { date: 21, day: '金', foodCost: null, fixedCost: null },
        { date: 22, day: '土', foodCost: null, fixedCost: null },
        { date: 22, day: '日', foodCost: null, fixedCost: null },
        { date: 23, day: '月', foodCost: null, fixedCost: null },
        { date: 24, day: '火', foodCost: null, fixedCost: null },
        { date: 25, day: '水', foodCost: null, fixedCost: null },
        { date: 26, day: '木', foodCost: null, fixedCost: null },
        { date: 27, day: '金', foodCost: null, fixedCost: null },
        { date: 28, day: '土', foodCost: null, fixedCost: null },
        { date: 29, day: '日', foodCost: null, fixedCost: null },
        { date: 30, day: '月', foodCost: null, fixedCost: null },
        { date: 31, day: '火', foodCost: null, fixedCost: null },
      ]);
      return {
        props,
        formMessage,
        tableMessage,
        activeTab,
        onTabButtonClick,
        houseHolds,
        onDateButtonClick,
        changeFormData,
        formDate,
        inputDate,
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
          <button class="underline hover:underline-offset-4" @click="onTabButtonClick('Form.vue')">Formタブ</button>
        </div>
        <div>
          <button class="underline hover:underline-offset-4" @click="onTabButtonClick('Table.vue')">Tableタブ</button>
        </div>
      </div>
    </div>
    <div>
      <div v-if="activeTab === 'Form.vue'">
        <Form
          :onTabButtonClick="onTabButtonClick"
          :houseHolds="houseHolds"
          :formMessage="formMessage"
          :inputDate="inputDate"
        />
      </div>
      <div v-if="activeTab === 'Table.vue'">
        <Table
          v-model:houseHolds="houseHolds"
          v-bind:tableMessage="tableMessage"
          v-bind:formDate="formDate"
          @onDateButtonClick="onDateButtonClick"
        />
      </div>
    </div>
  </div>
</template>
