<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      formMessage: {
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
    <br />
    <input type="text" class="border-2 rounded-md border-blue-500 border-l-teal-400" />
  </div>
</template>
