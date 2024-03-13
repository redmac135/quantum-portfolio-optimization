"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { useContext } from "react";
import { resultsContext } from "../resultsContext";

export default function Preferences() {
  const [isLoading, setIsLoading] = useState(false);
  const { results, setResults } = useContext(resultsContext);

  type Submission = {
    risk: 1 | 2 | 3 | 4 | 5;
    esg: 1 | 2 | 3 | 4 | 5;
    principle: number;
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      // TODO: send data to backend
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      // TODO: redirect to results page
      redirect;
    }
  }

  return <main></main>;
}
