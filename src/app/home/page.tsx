import { Metadata } from "next";
import HomeClient from "./client";
export const metadata: Metadata = {
  title: "Home",
  description: "Hello world",
};

export default function Home() {
  return <HomeClient />;
}
