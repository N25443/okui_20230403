<script setup lang="ts">
  import HouseholdMain from '@/components/HouseholdMain.vue';
  import { ref } from 'vue';
  // 以下参考のためおいておく
  // const countTest1 = ref(2);
  // const setCountTest1 = (newValue: number): number => (countTest1.value = newValue);
</script>

<template>
  <div>
    <HouseholdMain msg="HouseholdMain" />
  </div>
</template>
<style scoped></style>
