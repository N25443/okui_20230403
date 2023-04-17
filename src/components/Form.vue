<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const dateListInit = [...Array(31)].map((_, i) => i + 1);
      const dateList = ref(dateListInit);
      const setCostType = '';
      const costTypeRef = ref(setCostType);
      return { props, dateList, costTypeRef };
    },
  });
</script>

<template>
  <div>
    <span> {{ props.formMessage }} </span>
    <br />
    <label>年月日</label>
    <select>
      <option value="year">2023</option>
    </select>
    <select>
      <option value="month">4</option>
    </select>
    <select>
      <option value="date" v-for="date in dateList" v-bind:key="date">{{ date }}</option>
    </select>
    <select>
      <option value="foodCost">食費</option>
      <option value="fixedCost">固定費</option>
    </select>
    <br />
    <input type="text" class="border-2 rounded-md border-blue-500 border-l-teal-400" />
  </div>
</template>
