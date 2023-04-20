<script lang="ts">
  import type { dayOfWeekType } from './Type.vue';
  //カレンダー曜日とデザインの設定
  export const DAY_OF_WEEKS: dayOfWeekType[] = [
    {
      id: 1,
      name: '月',
      color: 'bg-gray-100',
    },
    {
      id: 2,
      name: '火',
      color: 'bg-gray-100',
    },
    {
      id: 3,
      name: '水',
      color: 'bg-gray-100',
    },
    {
      id: 4,
      name: '木',
      color: 'bg-gray-100',
    },
    {
      id: 5,
      name: '金',
      color: 'bg-gray-100',
    },
    {
      id: 6,
      name: '土',
      color: 'bg-blue-500 bg-opacity-50',
    },
    {
      id: 7,
      name: '日',
      color: 'bg-red-500 bg-opacity-50',
    },
  ];
</script>
