"use client";

import { AxiosFetcher } from "#/lib/fetcher";
import useSWR from "swr";

export default function HomeClient() {
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    AxiosFetcher
  );
  return <>{JSON.stringify(data)}</>;
}
