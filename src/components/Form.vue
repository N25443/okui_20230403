<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { PropType, Ref } from 'vue';
  import type { rowType } from '@/components/Type';
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
      changeTab: {
        type: Function as PropType<(tabName: string) => void>,
        required: true,
      },
      inputDate: {
        type: Number,
        required: true,
      },
    },
    setup(props, context) {
      //日付を1から30まで配列にいれる
      const dateList = [...Array(30)].map((_, i) => i + 1);
      //入力する費用を格納する変数
      const cost: Ref<number> = ref(0);
      //プルダウンで選択されている費用の種類　1:食費　2:固定費
      const costKind: Ref<number> = ref(0);
      //Formタブでプルダウンで入力した日
      const inputDate: Ref<number> = ref(props.inputDate);
      //追加ボタンを押下時にテーブルタブに遷移し、該当日に金額が入る
      const onAddButtonClick = (): void => {
        //子から親コンポーネントへイベントを通知する
        /*HouseholdMain.vueのset up内の変数inputDateを引数としてForm.vueに受け渡す方法がわからなかったので、
        代わりにメソッドsetInputDateをemitで子から親にイベントの発生タイミングを通知（メソッドはHouseholdsMain.vueに定義）*/
        context.emit('setInputDate', inputDate);
        if (costKind.value === 1) {
          props.houseHolds[inputDate.value - 1].foodCost = cost.value;
        } else if (costKind.value === 2) {
          props.houseHolds[inputDate.value - 1].fixedCost = cost.value;
        }
        props.changeTab('Table.vue');
      };

      return { props, dateList, cost, onAddButtonClick, costKind, inputDate };
    },
  });
</script>

<template>
  <div>
    <span class="rounded-md border bg-blue-400 px-4 text-sm font-bold text-black">
      {{ props.formMessage }}
    </span>
    <p>
      <label>日付と費用の種類を選択（金額は半角で入力してください）</label>
    </p>
    <select class="border rounded-md">
      <option value="year">2023</option>
    </select>
    <select class="border rounded-md">
      <option value="month">4</option>
    </select>
    <select class="border rounded-md" v-model="inputDate">
      <option v-for="date in dateList" v-bind:key="date">{{ date }}</option>
    </select>
    <select v-model.number="costKind" class="rounded-md bg-red-100">
      <option value="0" disabled>選択してください</option>
      <option value="1">食費</option>
      <option value="2">固定費</option>
    </select>
    <div class="relative">
      <input
        type="number"
        placeholder="金額を入力"
        v-model.number="cost"
        class="block w-full h-10 rounded-md border-gray-300 bg-gray-100 pl-7 pr-12"
      />
      <div class="absolute inset-y-0 right-1 flex my-2">
        <button
          class="rounded-md border border-transparent bg-blue-400 px-4 text-sm font-bold text-white"
          v-on:click="onAddButtonClick()"
        >
          追加
        </button>
      </div>
    </div>
  </div>
</template>
