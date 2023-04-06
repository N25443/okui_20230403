<script lang="ts">
  import { defineComponent } from 'vue';
  import { defineComponent } from '@/components/HouseholdMain.vue';
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
    <span> {{ props.formMessage }} </span>
    <input type="text" class="border-2 rounded-md border-blue-500 border-l-teal-400" />
  </div>
</template>
