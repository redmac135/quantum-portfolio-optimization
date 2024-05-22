"use client";
import styles from "./page.module.css"
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { type Results } from "../types";

export default function Preferences() {
  const ESG_MAX = 5;
  const RISK_MAX = 5;

  const [risk, setRisk] = useState(3);
  const [esg, setEsg] = useState(3);

  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useLocalStorage<Results>("results", null);

  type Submission = {
    risk: 1 | 2 | 3 | 4 | 5;
    esg: 1 | 2 | 3 | 4 | 5;
    principle: number;
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    
    const request: Submission = {
        risk: e.currentTarget.risk.value,
        esg: e.currentTarget.esg.value,
        principle: Number(e.currentTarget.principle.value)
    }

    // TODO ping backend

    // setResults() to result
    // redirect to /results


    // try {
    //   const formData = new FormData(e.currentTarget);
    //   // TODO: send data to backend
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setIsLoading(false);
    //   // TODO: redirect to results page
    //   redirect;
    // }
  }

  return (
    <div id={styles["page"]}>
        <div id={styles["background-image"]}>
            <Image
                src="/preferencesBackground.png"
                priority={true}
                fill={true}
                style={{objectFit: 'cover'}}
                alt="background-image"
            />
        </div>
        <div id={styles["alignment"]}>
            <div id={styles["container"]}>
                <div className={styles["bubble"]}>
                    <h1>Portfolio Preference Dashboard</h1>
                </div>
                {isLoading ? 
                <div className={styles["loading"]}>
                    <h1>Loading...</h1>
                </div>
                : 
                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <div className={styles["input"]}>
                        <h2>Risk Tolerance</h2>
                        <div className={styles["slider"]}>
                            <input type="range" name="risk" min={1} max={RISK_MAX} value={risk} onChange={(e) => setRisk(Number(e.target.value))}/>
                            <div className={styles["slider-numbers"]}>
                                {Array.from(Array(RISK_MAX).keys()).map((val) => (
                                    <p key={val} className={(risk === val + 1) ? styles["slider-number-focus"] : styles["slider-number-blur"]}>{val + 1}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles["slider-text"]}>
                            <p>Very Low</p>
                            <p className={styles["slider-text-bold"]}>Very High</p>
                        </div>
                    </div>
                    <div className={styles["input"]}>
                        <h2>ESG Consideration</h2>
                        <div className={styles["slider"]}>
                            <input type="range" name="esg" min={1} max={ESG_MAX} value={esg} onChange={(e) => setEsg(Number(e.target.value))}/>
                            <div className={styles["slider-numbers"]}>
                                {Array.from(Array(ESG_MAX).keys()).map((val) => (
                                    <p key={val} className={(esg === val + 1) ? styles["slider-number-focus"] : styles["slider-number-blur"]}>{val + 1}</p>
                                ))}
                            </div>
                        </div>
                        <div className={styles["slider-text"]}>
                            <p>Very Low</p>
                            <p className={styles["slider-text-bold"]}>Very High</p>
                        </div>
                    </div>
                    <div className={styles["input"]}>
                        <h2>Principle Investment</h2>
                        <div className={styles["field"]}>
                            <p>$</p>
                            <input type="number" name="principle" required={true} placeholder={"69"} step={0.01}/>
                        </div>
                    </div>
                    <button className={styles["bubble"]} id={styles["submit-btn"]} type="submit">Compute my portfolio</button>
                </form>
                }
            </div>
        </div>
    </div>
  );
}
