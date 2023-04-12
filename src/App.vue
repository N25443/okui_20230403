<script setup lang="ts">
  import HouseholdMain from '@/components/HouseholdMain.vue';
  // 以下参考のためおいておく
  // import { ref } from 'vue';
  // const countTest1 = ref(2);
  // const setCountTest1 = (newValue: number): number => (countTest1.value = newValue);
</script>

<template>
  <div>
    <div class="fixed top-0 left-40 text-5xl text-bold bg-blue-500">家計簿アプリ</div>
    <div>
      <HouseholdMain msg="HouseholdMain" />
    </div>
  </div>
</template>
<style scoped></style>
