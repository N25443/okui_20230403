<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { PropType, Ref } from 'vue';
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
      //入力する費用を格納する変数
      const cost: Ref<number> = ref(0);
      //プルダウンで選択されている費用の種類　1:食費　2:固定費
      const costKind: Ref<number> = ref(0);
      const inputDate: Ref<number> = ref(1);
      const onAddButtonClick = (): void => {
        // console.log('aaa');
        // console.log(costKind.value);
        // console.log(typeof costKind.value);
        // console.log(costKind.value === 1);
        if (costKind.value == 1) {
          props.houseHolds[inputDate.value - 1].foodCost = cost.value;
          props.onTabButtonClick('Table.vue');
        } else if (costKind.value == 2) {
          props.houseHolds[inputDate.value - 1].fixedCost = cost.value;
          props.onTabButtonClick('Table.vue');
        }
      };

      return { props, dateList, cost, onAddButtonClick, inputDate, costKind };
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
    <select v-model="costKind">
      <option value="0" disabled>選択してください</option>
      <option value="1">食費</option>
      <option value="2">固定費</option>
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
          v-on:click="onAddButtonClick()"
        >
          追加
        </button>
      </div>
    </div>
  </div>
</template>
