<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },
    houseHolds: {
      type: {
        day: String,
        genre: String,
        content: String,
        money: Number,
        way: String,
        table6: Number,
        table7: Number,
        table8: Number,
        table9: Number,
        table10: Number,
      },
    },
    setup(props) {
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
      table8: '0',
      table9: '0',
      table10: '0',
    },
    {
      day: '4/11',
      genre: '食費',
      content: 'スーパー',
      money: '2500',
      way: 'PayPay',
      table6: '0',
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
      way: 'PayPay',
      table6: '0',
      table7: '0',
      table8: '0',
      table9: '0',
      table10: '0',
    },
    {
      day: '4/13',
      genre: '食費',
      content: 'スーパー',
      money: '2500',
      way: 'PayPay',
      table6: '0',
      table7: '0',
      table8: '0',
      table9: '0',
      table10: '0',
    },
  ];
</script>

<template>
  <div>
    <span> {{ props.tableMessage }} </span>
    <table class="table-auto border-2">
      <tr class="bg-blue-900 text-indigo-100">
        <th>日付　　</th>
        <th>ジャンル 　　　</th>
        <th>内容　　　　　　</th>
        <th>金額(円)　　</th>
        <th>支払方法　　</th>
      </tr>
      <tr>
        <td>4/5</td>
        <td>食費</td>
        <td>スーパー</td>
        <td>2500</td>
        <td>PayPay</td>
      </tr>
    </table>
  </div>
</template>
