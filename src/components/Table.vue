<script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';
  import type { rowType } from '@/components/Type.vue';
  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
      houseHolds: {
        type: Array as PropType<rowType[]>,
        required: true,
      },
    },
    setup(props) {
      // テーブルをリアクティブなオブジェクトで定義
      // const tableClass: string[] = ['', '火', '水', '木', '金', '土', '日'];
      // const d: Day = new Day();
      // const i = d.getFullYear() % 7;
      // alert(tableClass[i]);
      return { props };
    },
  });
</script>

<template>
  <span> {{ props.tableMessage }} </span>
  <!-- テーブルを表示 -->
  <table class="table-auto border-2">
    <tr class="bg-blue-900 text-indigo-100">
      <th>日付</th>
      <th>曜日</th>
      <th>食費</th>
      <th>固定費</th>
    </tr>
    <tr v-for="houseHold in houseHolds" :key="houseHold.date">
      <td>{{ houseHold.date }}</td>
      <td>{{ houseHold.day }}</td>
      <td>{{ houseHold.foodCost }}</td>
      <td>{{ houseHold.fixedCost }}</td>
    </tr>
  </table>
</template>
