import { defineStore } from 'pinia';
import { getAddress } from '@/repository/postalCode';
type ApiResult = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

type ApiResponse = {
  message: string;
  results: ApiResult[];
  status: string;
};

export const usePostalCodeStore = defineStore({
  id: 'postalCode',
  state: () => ({
    address: {
      message: '',
      results: [
        { address1: '', address2: '', address3: '', kana1: '', kana2: '', kana3: '', prefcode: '', zipcode: '' },
      ],
      status: '',
    } as ApiResponse,
  }),
  actions: {
    async setAddress(postalCode: string) {
      const response = await getAddress(postalCode);
      this.address = response.data;
    },
  },
});
