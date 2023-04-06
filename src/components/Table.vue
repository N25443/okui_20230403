<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      msg: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return { props };
    },
  });
</script>

<template>
  <div>
    <span>
      <table class="table-auto border-2">
        <tr class="bg-gray-200">
          <th>ジャンル 　　　　</th>
          <th>内容　　　　　　</th>
          <th>金額(円)　　</th>
          <th>支払方法　　</th>
        </tr>
        <tr>
          <td>食費</td>
          <td>スーパー</td>
          <td>2500</td>
          <td>PayPay</td>
        </tr>
      </table>
    </span>
  </div>
</template>
