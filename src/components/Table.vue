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
      type rawType = {
        day: string;
        genre: string;
        content: string;
        money: string;
        way: string;
        raw6?: string;
        raw7?: string;
        raw8?: string;
        raw9?: string;
        raw10?: string;
      };
      const houseHolds: rawType[] = [
        {
          day: '4/10',
          genre: '食費',
          content: 'スーパー',
          money: '2500',
          way: 'PayPay',
          raw6: '0',
          raw7: '0',
          raw8: '2',
          raw9: '0',
          raw10: '0',
        },
        {
          day: '4/11',
          genre: '交通費',
          content: '飛行機',
          money: '2500',
          way: 'PayPay',
          raw6: '3',
          raw7: '0',
          raw8: '0',
          raw9: '0',
          raw10: '0',
        },
        {
          day: '4/12',
          genre: '食費',
          content: 'スーパー',
          money: '2500',
          way: '現金',
          raw6: '0',
          raw7: '0',
          raw8: '7',
          raw9: '0',
          raw10: '0',
        },
        {
          day: '4/13',
          genre: '食費',
          content: '外食',
          money: '2500',
          way: 'PayPay',
          raw6: '0',
          raw7: '6',
          raw8: '0',
          raw9: '0',
          raw10: '10',
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
      <th>raw6</th>
      <th>raw7</th>
      <th>raw8</th>
      <th>raw9</th>
      <th>raw10</th>
    </tr>

    <tr v-for="houseHold in houseHolds" :key="houseHold.day">
      <td>{{ houseHold.day }}</td>
      <td>{{ houseHold.genre }}</td>
      <td>{{ houseHold.content }}</td>
      <td>{{ houseHold.money }}</td>
      <td>{{ houseHold.way }}</td>
      <td>{{ houseHold.raw6 }}</td>
      <td>{{ houseHold.raw7 }}</td>
      <td>{{ houseHold.raw8 }}</td>
      <td>{{ houseHold.raw9 }}</td>
      <td>{{ houseHold.raw10 }}</td>
    </tr>
  </table>
</template>
