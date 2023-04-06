<script setup lang="ts">
  import HouseholdMain from '@/components/HouseholdMain.vue';
  // 以下参考のためおいておく
  // import { ref } from 'vue';
  // const countTest1 = ref(2);
  // const setCountTest1 = (newValue: number): number => (countTest1.value = newValue);
</script>

<template>
  <div>
    <div class="text-5xl text-bold bg-blue-500">家計簿アプリ</div>
    <div>
      <HouseholdMain msg="HouseholdMain" />
    </div>
  </div>
</template>
<style scoped></style>
