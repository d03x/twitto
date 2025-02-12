import { AxiosFetcher } from "#/lib/fetcher";
import useSWR from "swr";

export function useTodo() {
  const {data,isLoading,error} = useSWR("https://jsonplaceholder.typicode.com/todos", AxiosFetcher);
  return {
    data,
    isLoading,
    error
  };
}
