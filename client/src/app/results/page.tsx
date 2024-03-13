"use client";

import Image from "next/image";
import { useContext } from "react";
import { resultsContext } from "../resultsContext";

export default function Results() {
  const { results, setResults } = useContext(resultsContext);

  return results ? <main></main> : "";
}
