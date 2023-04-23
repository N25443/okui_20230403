import { storeToRefs } from 'pinia';
import { defineStore } from 'pinia';
export const useTableStore = defineStore({
  id: 'table',
  state: () => ({
    counter: 1,
    members: ['taro', 'hanako'],
  }),
  getters: {
    getDoubleCounter: (state) => state.counter * 2,
    getInitialMembers: (state) => state.members.filter((elm) => ['taro', 'hanako'].includes(elm)),
  },
  actions: {
    setCounter(newCounter: number) {
      this.counter = newCounter;
    },
    setNewMembers(member: string) {
      this.members = [...this.members, member];
    },
    updateMembers(members: string[]) {
      this.members = members;
    },
    deleteMember(member: string) {
      this.members = this.members.filter((elm) => elm !== member);
    },
    initMembers() {
      this.members = ['taro', 'hanako'];
    },
  },
});
