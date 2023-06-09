<script lang="ts">
  import { usePostalCodeStore } from '@/stores/postalCode';
  import { useTableStore } from '@/stores/table';
  import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
  import type { PropType, Ref } from 'vue';
  export default defineComponent({
    props: {
      formMessage: {
        type: String,
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
      const zipcode = ref('530-6034');
      const tableStore = useTableStore();
      const onAllResetButtonClick = (): void => {
        tableStore.initAllCosts();
        props.changeTab('Table.vue');
      };

      const postalCodeStore = usePostalCodeStore();
      const postalCodeStoreAddressRef = toRefs(postalCodeStore);
      
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
        if (costKind.value === 0) {
          return;
        }
        //子から親コンポーネントへイベントを通知する
        /*HouseholdMain.vueのset up内の変数inputDateを引数としてForm.vueに受け渡す方法がわからなかったので、
        代わりにメソッドsetInputDateをemitで子から親にイベントの発生タイミングを通知（メソッドはHouseholdsMain.vueに定義）*/
        context.emit('setInputDate', inputDate);
        if (costKind.value === 1) {
          tableStore.setFoodCost(inputDate.value - 1, cost.value);
        } else if (costKind.value === 2) {
          tableStore.setFixedCost(inputDate.value - 1, cost.value);
        }
        props.changeTab('Table.vue');
      };
      return {
        props,
        dateList,
        cost,
        onAddButtonClick,
        costKind,
        inputDate,
        onAllResetButtonClick,
        zipcode,
        postalCodeStoreAddressRef,
        postalCodeStore,
      };
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
    <div class="py-10 px-20 pr-2">
      <button @click="onAllResetButtonClick()" class="block w-60 h-8 rounded-md border-red-900 bg-red-500 text-white">
        家計簿をリセットする!!
      </button>
    </div>
    <div>
      <input
        type="text"
        class="block w-full h-10 rounded-md border-gray-300 bg-gray-100 pl-7 pr-12"
        v-model="zipcode"
      />
      <button
        class="rounded-md border border-transparent bg-blue-400 px-4 text-sm font-bold text-white"
        @click="() => postalCodeStore.setAddress(zipcode)"
      >
        決定
      </button>
      <br />
      結果：<input type="text" class="textline bg-sky-200" :value="postalCodeStore.address.results[0].address1" />
      <br />

      大元でtoRefし、中身を取得<br />
      {{ postalCodeStoreAddressRef.address.value.results[0] }}
    </div>
  </div>
</template>
