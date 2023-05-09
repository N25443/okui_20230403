import axios, { type AxiosResponse } from 'axios';

export const getAddress = async (zipcode: string): Promise<AxiosResponse<any, any>> => {
  // APIを呼び出す
  const response = await axios.get('https://zipcloud.ibsnet.co.jp/api/search', {
    params: { zipcode },
  });
  return response;
};
