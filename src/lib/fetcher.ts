import axios from "axios";

export const AxiosFetcher = async (args: any) => {
  return await (
    await axios({ url: args })
  ).data;
};
