"use client";
//import and user notifcaiton
import { useTodo } from "#/hooks/useTodo";
export default function HomeClient() {
  const { data } = useTodo();
  return <>{JSON.stringify(data)}</>;
}
