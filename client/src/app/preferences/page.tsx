"use client";
import styles from "./page.module.css"
import Image from "next/image";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { useContext } from "react";
import { resultsContext } from "../resultsContext";

export default function Preferences() {
  const ESG_MAX = 5;
  const RISK_MAX = 5;

  const [risk, setRisk] = useState(3);
  const [esg, setEsg] = useState(3);

  const [isLoading, setIsLoading] = useState(false);
  // const { results, setResults } = useContext(resultsContext);

  type Submission = {
    risk: 1 | 2 | 3 | 4 | 5;
    esg: 1 | 2 | 3 | 4 | 5;
    principle: number;
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

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
        <div id={styles["alignment"]}>
            <div id={styles["container"]}>
                <div className={styles["bubble"]}>
                    <h1>Portfolio Preference Dashboard</h1>
                </div>
                {isLoading ? <h1>Loading...</h1> : 
                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <div className={styles["input"]}>
                        <h2>Risk Tolerance</h2>
                        <div className={styles["slider"]}>
                            <input type="range" name="risk" min={1} max={RISK_MAX} value={risk} onChange={(e) => setRisk(Number(e.target.value))}/>
                            <div className={styles["slider-numbers"]}>
                                {[...Array(RISK_MAX).keys()].map((val) => (
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
                                {[...Array(ESG_MAX).keys()].map((val) => (
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
                        <h2>Principal Investment</h2>
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
