import axios from "axios";
const api = axios.create({
  responseType: "json"
})
export const AxiosFetcher = async (args: any) => {
  return await (
    await api({ url: args })
  ).data;
};
