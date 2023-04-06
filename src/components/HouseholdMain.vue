<script lang="ts">
  import { defineComponent } from 'vue';
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  export default defineComponent({
    props: {
      msg: {
        type: String,
      },
    },
    setup(props) {
      return { props };
    },
  });
  const formMessage = '家計簿に追加';
  const formTable = '家計簿';
</script>

<template>
  <div class="flex">
    <!--サイドバーとメインページを横並びにする-->
    <div class="w-48 bg-blue-200 text-blue-800 min-h-screen px-4 pt-16">
      <p class="text-xl font-bold border-b border-blue-800 mb-2">Menu</p>
      <p>hoge</p>
      <p>fuga</p>
      <p>piyo</p>
    </div>
    <div>
      aaa
      <Form formMessage="Form" />
      <Table tableMessage="Table" />
    </div>
  </div>
</template>
