import { defineStore } from 'pinia';
import { DAY_OF_WEEKS } from '@/components/Const';
import type { rowType } from '@/components/Type';
export const useTableStore = defineStore({
  id: 'tableStore',
  state: () => ({
    //カレンダーに表示する内容の配列
    houseHolds: [...Array(30)].map((_, i) => ({
      date: i + 1,
      day: DAY_OF_WEEKS[i % 7].name,
      foodCost: null,
      fixedCost: null,
    })) as rowType[],
  }),
  getters: {},
  actions: {
    setFoodCost(i: number, foodCost: number) {
      this.houseHolds[i].foodCost = foodCost;
    },
    setFixedCost(i: number, fixedCost: number) {
      this.houseHolds[i].fixedCost = fixedCost;
    },
    initAllCosts() {
      this.houseHolds = this.houseHolds.map((houseHold: rowType) => ({
        ...houseHold,
        foodCost: null,
        fixedCost: null,
      }));
    },
  },
});
