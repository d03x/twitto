"use client";
//import and user notifcaiton
import { useTodo } from "#/hooks/useTodo";
//ini adalah home
export default function HomeClient() {
  const { data } = useTodo();
  return (
    <>
      <div>Explore Topic</div>
    </>
  );
}
