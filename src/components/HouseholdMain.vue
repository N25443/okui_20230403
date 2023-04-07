<script setup lang="ts">
  // import { defineComponent } from 'vue';
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  const formMessage = '入力';
  const tableMessage = '家計簿';
</script>

<template>
  <li v-for="(tab, index) in tabList" :key="index">
    <label for=""></label>
  </li>
  <div class="flex">
    <!--サイドバーとメインページを横並びにする-->
    <div class="w-48 bg-blue-200 text-blue-800 min-h-screen px-4 pt-16">
      <p class="text-xl font-bold border-b border-blue-800 mb-2">Menu</p>
      <p>入力</p>
      <p>家計簿</p>
    </div>
    <div class="w-80">
      <Form v-bind:formMessage="formMessage" />
    </div>
    <div class="w-80">
      <Table v-bind:tableMessage="tableMessage" />
    </div>
  </div>
</template>
