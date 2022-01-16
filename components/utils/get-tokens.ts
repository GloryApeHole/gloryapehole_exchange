// ONLY SERVER SIDE
import axios from 'axios';

interface AxiosData {
  data: {};
}
export default async function getTokens() {
  const tokenListEndpoint: string = process.env.TOKENS_LIST || '';
  try {
    const { data }: AxiosData = await axios.get(tokenListEndpoint);
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
