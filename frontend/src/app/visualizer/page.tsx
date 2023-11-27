"use client";

import React, { useState } from 'react';
import styles from './page.module.css'
import { expandPolynomialToMatrix, computeMatrixResult, matrixToPolynomialHumanReadable } from './quantumexpansion';

export default function Home() {
  const [EquInput, setEquInput] = useState('');
  const [ValInput, setValInput] = useState('');
  const [submittedEqu, setSubmittedEqu] = useState('');
  const [submittedVal, setSubmittedVal] = useState('');

  const handleSubmit = () => {
    setSubmittedEqu(EquInput);
  }

  const handleValSubmit = () => {
    setSubmittedVal(ValInput);
  }

  function keyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == 'Enter') {
      handleSubmit();
    }
  }

  function inputToList(input: string) {
    return input.split(',').map(Number);
  }

  return (
    <main className={styles.main}>
      <input type="text" value={EquInput} onChange={(e) => setEquInput(e.target.value)} onKeyDown={keyPress} />
      <button onClick={handleSubmit}>Submit</button>
      <h2>Input</h2>
      <p>[{inputToList(submittedEqu).join(', ')}]</p>
      {/* Matrix Repersentation */}
      <h2>Matrix Expansion</h2>
      <table className={styles.matrix}>
        <tbody>
          {expandPolynomialToMatrix(inputToList(submittedEqu)).map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.matrix}>
              {row.map((value, columnIndex) => (
                <td key={columnIndex} className={styles.matrix}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Polynomial</h2>
      <p>{matrixToPolynomialHumanReadable(expandPolynomialToMatrix(inputToList(submittedEqu)))}</p>
      <h2>Compute</h2>
      <input type="text" value={ValInput} onChange={(e) => setValInput(e.target.value)} onKeyDown={(e)=>{if(e.key=='Enter'){ return handleValSubmit()}}} />
      <button onClick={handleValSubmit}>Submit</button>
      <p>{computeMatrixResult(expandPolynomialToMatrix(inputToList(submittedEqu)), submittedVal.split(",").map(Number))}</p>
    </main>
  );
}