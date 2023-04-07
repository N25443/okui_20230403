<script lang="ts">
  import { defineComponent } from 'vue';
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  export default defineComponent({
    components: { Form, Table },
    props: {
      msg: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return { props, formMessage, tableMessage };
    },
  });
  const formMessage = '入力';
  const tableMessage = '家計簿';
</script>

<template>
  <li v-for="(tab, index) in tabList" :key="index">
    <label for=""></label>
  </li>
  <div class="flex">
    <!--サイドバーとメインページを横並びにする-->
    <div class="fixed left-0 top-0 bg-blue-200 text-blue-800 min-h-screen px-10 pt-16">
      <p class="text-xl font-bold border-b border-blue-800 mb-2">Menu</p>
      <p>入力</p>
      <p>家計簿</p>
    </div>
    <div class="fixed left-40 top-14">
      <Form v-bind:formMessage="formMessage" />
    </div>
    <div class="fixed left-40 top-40">
      <Table v-bind:tableMessage="tableMessage" />
    </div>
  </div>
</template>
