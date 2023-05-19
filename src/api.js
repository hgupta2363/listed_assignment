import axios, { AxiosInstance } from 'axios';
const axoisInstance = axios.create({
  baseURL: 'https://mocki.io/v1/fd2fc267-f58c-497b-8490-6bd1185c60f7',
  timeout: 2000,
});
export const fetchDashboardData = async () => {
  const res = await axoisInstance.get();
  return res;
};
