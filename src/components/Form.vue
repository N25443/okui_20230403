<script lang="ts">
  import { defineComponent, ref, type Ref } from 'vue';
  import type { PropType } from 'vue';
  import type { rowType } from '@/components/Type.vue';
  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
      houseHolds: {
        type: Array as PropType<rowType[]>,
        required: true,
      },
      onTabButtonClick: {
        type: Function as PropType<(tabName: string) => void>,
        required: true,
      },
    },
    setup(props) {
      //日付を1から31まで並べる
      const dateListInit = [...Array(31)].map((_, i) => i + 1);
      //日付をリアクティブな変数として定義
      const dateList = ref(dateListInit);
      //
      const cost = ref();
      const inputDate = ref(1);
      const onAddButtonClick = (cost: number, houseHolds: Array<rowType>, inputDate: number): void => {
        houseHolds[inputDate - 1].foodCost = cost;
        props.onTabButtonClick('Table.vue');
      };
      return { props, dateList, cost, onAddButtonClick, inputDate };
    },
  });
</script>

<template>
  <div>
    <span> {{ props.formMessage }} </span>
    <br />
    <label>年月日</label>
    <select>
      <option value="year">2023</option>
    </select>
    <select>
      <option value="month">4</option>
    </select>
    <select v-model="inputDate">
      <option v-for="date in dateList" v-bind:key="date">{{ date }}</option>
    </select>
    <select>
      <option value="foodCost">食費</option>
      <option value="fixedCost">固定費</option>
    </select>
    <div class="relative">
      <input
        type="text"
        placeholder="金額を入力"
        v-model="cost"
        class="block w-full h-10 rounded-md border-gray-300 bg-gray-100 pl-7 pr-12"
      />
      <div class="absolute inset-y-0 right-1 flex my-2">
        <button
          class="justify-center rounded-md border border-transparent bg-blue-400 px-4 py-1 text-sm font-bold text-white"
          v-on:click="onAddButtonClick(cost, houseHolds, inputDate)"
        >
          追加
        </button>
      </div>
    </div>
  </div>
</template>
