<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },

    setup(props) {
      type HouseHolds = {
        date: number;
        day: string;
        foodCost: number | null;
        fixedCost: number | null;
      };
      return { props, houseHolds };
    },
  });
  const tableClass: string[] = ['', '火', '水', '木', '金', '土', '日'];
  // const d: Day = new Day();
  // const i = d.getFullYear() % 7;
  // alert(tableClass[i]);
  // テーブルをリアクティブなオブジェクトで定義
  const houseHolds = reactive([
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
</script>

<template>
  <span> {{ props.tableMessage }} </span>
  <!-- テーブルを表示 -->
  <table class="table-auto border-2">
    <tr class="bg-blue-900 text-indigo-100">
      <th>日付　</th>
      <th>曜日　</th>
      <th>食費　　　</th>
      <th>固定費　　</th>
    </tr>
    <tr v-for="houseHold in houseHolds" :key="houseHold.date" v-bind="tableClass[i]">
      <td>{{ houseHold.date }}</td>
      <td>{{ houseHold.day }}</td>
      <td>{{ houseHold.foodCost }}</td>
      <td>{{ houseHold.fixedCost }}</td>
    </tr>
  </table>
</template>
