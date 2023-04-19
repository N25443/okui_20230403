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
      const tableClass: string[] = props.houseHolds.map(function (houseHold) {
        if (houseHold.day === '土') {
          return 'bg-blue-500 bg-opacity-50';
        } else if (houseHold.day === '日') {
          return 'bg-red-500 bg-opacity-50';
        } else {
          return '';
        }
      });

      return { props, tableClass };
    },
  });
</script>

<template>
  <div class="mt-20">
    <span class="rounded-md border bg-blue-400 px-4 text-sm font-bold text-black"> {{ props.tableMessage }} </span>
    <!-- テーブルを表示 -->
    <table class="md:w-auto mb-20 table-auto border-2 border-gray-400 border-separate">
      <tr class="bg-blue-900 text-indigo-100 sticky top-0 z-10">
        <th>日付</th>
        <th>曜日</th>
        <th>食費</th>
        <th>固定費</th>
      </tr>

      <tr
        @click="$emit('onDateButtonClick', houseHold.date)"
        v-for="(houseHold, index) in houseHolds"
        :key="houseHold.date"
        :class="tableClass[index]"
      >
        <td>{{ houseHold.date }}</td>
        <td>{{ houseHold.day }}</td>
        <td>{{ houseHold.foodCost }}</td>
        <td>{{ houseHold.fixedCost }}</td>
      </tr>
    </table>
  </div>
</template>
