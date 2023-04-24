import { defineStore } from 'pinia';
import { DAY_OF_WEEKS } from '@/components/Const';
import type { rowType } from '@/components/Type';
export const useTableStore = defineStore({
  id: 'table',
  state: () => ({
    //カレンダーに表示giする内容の配列
    houseHolds: [...Array(30)].map((_, i) => ({
      date: i + 1,
      day: DAY_OF_WEEKS[i % 7].name,
      foodCost: null,
      fixedCost: null,
    })) as rowType[],
  }),
  getters: {},
  actions: {
    setNewFoodCost(foodCost: number) {
      this.state.foodCost = foodCost;
    },
    setNewFixedCost(fixedCost: number) {
      this.state.fixedCost = fixedCost;
    },
    updateHouseHolds(houseHolds: rowType[]) {
      this.houseHolds = houseHolds;
    },
    initCosts() {
      this.state.foodCost = null;
      this.state.fixedCost = null;
    },
  },
});
