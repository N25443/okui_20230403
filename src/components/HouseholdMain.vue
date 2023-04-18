<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { ref, reactive, defineComponent } from 'vue';
  import type { rowType } from '@/components/Type.vue';
  export default defineComponent({
    components: { Form, Table },
    props: {
      tableMessage: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      // テーブルをリアクティブなオブジェクトで定義
      // const tableClass: string[] = ['', '火', '水', '木', '金', '土', '日'];
      // const d: Day = new Day();
      // const i = d.getFullYear() % 7;
      // alert(tableClass[i]);
      const formMessage = '入力フォーム(金額は半角で入力してください)';
      const tableMessage = '家計簿';
      // 表示するタブを識別する変数
      const activeTab = ref('Form.vue');
      // ボタン押下時のアクションをメソッド定義
      const onTabButtonClick = (tabName: string): void => {
        activeTab.value = tabName;
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
      return { props, formMessage, tableMessage, activeTab, onTabButtonClick, houseHolds };
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
        <Form :onTabButtonClick="onTabButtonClick" :houseHolds="houseHolds" v-bind:formMessage="formMessage" />
      </div>
      <div v-if="activeTab === 'Table.vue'">
        <Table v-model:houseHolds="houseHolds" v-bind:tableMessage="tableMessage" />
      </div>
    </div>
  </div>
</template>
