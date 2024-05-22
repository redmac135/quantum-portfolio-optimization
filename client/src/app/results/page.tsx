"use client";


import { type Results } from "../types";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Results() {
  const [results, setResults] = useLocalStorage<Results>("results", null);

  return results ? <main></main> : "";
}
