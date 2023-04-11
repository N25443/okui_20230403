<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },

    setup(props) {
      type HouseHolds = {
        day: string;
        genre: string;
        content: string;
        money: number;
        way: string;
        table6?: number;
        table7?: number;
        table8?: number;
        table9?: number;
        table10?: number;
      };
      return { props, houseHolds };
    },
  });
  const houseHolds = [
    {
      day: '4/10',
      genre: '食費',
      content: 'スーパー',
      money: '2500',
      way: 'PayPay',
      table6: '0',
      table7: '0',
      table8: '2',
      table9: '0',
      table10: '0',
    },
    {
      day: '4/11',
      genre: '交通費',
      content: '飛行機',
      money: '2500',
      way: 'PayPay',
      table6: '3',
      table7: '0',
      table8: '0',
      table9: '0',
      table10: '0',
    },
    {
      day: '4/12',
      genre: '食費',
      content: 'スーパー',
      money: '2500',
      way: '現金',
      table6: '0',
      table7: '0',
      table8: '7',
      table9: '0',
      table10: '0',
    },
    {
      day: '4/13',
      genre: '食費',
      content: '外食',
      money: '2500',
      way: 'PayPay',
      table6: '0',
      table7: '6',
      table8: '0',
      table9: '0',
      table10: '10',
    },
  ];
</script>

<template>
  <span> {{ props.tableMessage }} </span>
  <table class="table-auto border-2">
    <tr class="bg-blue-900 text-indigo-100">
      <th>日付　　</th>
      <th>ジャンル 　　　</th>
      <th>内容　　　　　　</th>
      <th>金額(円)　　</th>
      <th>支払方法　　</th>
      <th>table6　</th>
      <th>table7　</th>
      <th>table8　</th>
      <th>table9　</th>
      <th>table10　</th>
    </tr>

    <tr v-for="houseHold in houseHolds" :key="houseHold.day">
      <td>{{ houseHold.day }}</td>
      <td>{{ houseHold.genre }}</td>
      <td>{{ houseHold.content }}</td>
      <td>{{ houseHold.money }}</td>
      <td>{{ houseHold.way }}</td>
      <td>{{ houseHold.table6 }}</td>
      <td>{{ houseHold.table7 }}</td>
      <td>{{ houseHold.table8 }}</td>
      <td>{{ houseHold.table9 }}</td>
      <td>{{ houseHold.table10 }}</td>
    </tr>
  </table>
</template>
