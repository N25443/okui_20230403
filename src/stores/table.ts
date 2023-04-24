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
    setNewFoodCost(foodCost: number) {
      // eslint-disable-next-line no-console
      console.log('setNewFoodCost');
      this.state.houseHolds.foodCost = foodCost;
    },
    setNewFixedCost(fixedCost: number) {
      // eslint-disable-next-line no-console
      console.log('setNewFixedCost');
      this.state.fixedCost = fixedCost;
    },
    updateHouseHolds(houseHolds: rowType[]) {
      this.houseHolds = houseHolds;
    },
    initCosts() {
      // eslint-disable-next-line no-console
      console.log('initCosts');
      this.state.foodCost = null;
      this.state.fixedCost = null;
    },
  },
});
