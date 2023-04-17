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
      type rowType = {
        day: string;
        genre: string;
        content: string;
        money: string;
        way: string;
        row6?: string;
        row7?: string;
        row8?: string;
        row9?: string;
        row10?: string;
      };
      const houseHolds: rowType[] = [
        {
          day: '4/10',
          genre: '食費',
          content: 'スーパー',
          money: '2500',
          way: 'PayPay',
          row6: '0',
          row7: '0',
          row8: '2',
          row9: '0',
          row10: '0',
        },
        {
          day: '4/11',
          genre: '交通費',
          content: '飛行機',
          money: '2500',
          way: 'PayPay',
          row6: '3',
          row7: '0',
          row8: '0',
          row9: '0',
          row10: '0',
        },
        {
          day: '4/12',
          genre: '食費',
          content: 'スーパー',
          money: '2500',
          way: '現金',
          row6: '0',
          row7: '0',
          row8: '7',
          row9: '0',
          row10: '0',
        },
        {
          day: '4/13',
          genre: '食費',
          content: '外食',
          money: '2500',
          way: 'PayPay',
          row6: '0',
          row7: '6',
          row8: '0',
          row9: '0',
          row10: '10',
        },
      ];
      return { props, houseHolds };
    },
  });
</script>

<template>
  <span> {{ props.tableMessage }} </span>
  <table class="table-auto border-2">
    <tr class="bg-blue-900 text-indigo-100">
      <th>日付</th>
      <th>ジャンル</th>
      <th>内容</th>
      <th>金額(円)</th>
      <th>支払方法</th>
      <th>row6</th>
      <th>row7</th>
      <th>row8</th>
      <th>row9</th>
      <th>row10</th>
    </tr>

    <tr v-for="houseHold in houseHolds" :key="houseHold.day">
      <td>{{ houseHold.day }}</td>
      <td>{{ houseHold.genre }}</td>
      <td>{{ houseHold.content }}</td>
      <td>{{ houseHold.money }}</td>
      <td>{{ houseHold.way }}</td>
      <td>{{ houseHold.row6 }}</td>
      <td>{{ houseHold.row7 }}</td>
      <td>{{ houseHold.row8 }}</td>
      <td>{{ houseHold.row9 }}</td>
      <td>{{ houseHold.row10 }}</td>
    </tr>
  </table>
</template>
