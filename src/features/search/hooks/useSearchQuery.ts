import { AxiosFetcher } from "#/lib/fetcher"
import useSWR from "swr"

export const useSearchQuery = (query: any) => {
    const { data, isLoading, error, } = useSWR("/api/v1/search?q=" + query, AxiosFetcher);
    return {
        data,
        isLoading,
        error
    }
}