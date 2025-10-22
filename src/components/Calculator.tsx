import { useState } from 'react'
import styled from 'styled-components'

const CalculatorWrap = styled.div`
  .calculator-section {
    margin-top: 40px;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 15px;
    border: 2px solid #F5CAC3;
  }

  .calculator-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 600px;
    margin: 0 auto;
  }

  .calculator-left {
    flex: 1;
    min-width: 250px;
    margin-right: 20px;
  }

  .calculator-right {
    flex: 0 0 200px;
  }

  .input-group {
    margin-bottom: 20px;
    padding: 15px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  .input-group input {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: calc(14px + 0.2vw);
  }

  .result-display {
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    border: 2px solid #F5CAC3;
    border-radius: 8px;
    text-align: center;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calculator-section h2 {
    font-size: calc(20px + 0.8vw);
    margin-bottom: 20px;
    text-align: center;
  }

  .result-display h3 {
    font-size: calc(16px + 0.4vw);
    margin: 0;
  }

  .input-group label {
    font-size: calc(14px + 0.3vw);
  }

  .calculator-section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .calculator-buttons button {
    font-family: 'Courier New', monospace;
    font-size: calc(14px + 0.3vw);
  }

  .calculator-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .button-row {
    display: flex;
    gap: 8px;
  }

  .calculator-buttons button {
    flex: 1;
    padding: 15px 10px;
    border: none;
    border-radius: 6px;
    background-color: #5D5E60;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    margin: 3px;
  }

  .calculator-buttons button:hover {
    background-color: #F5CAC3;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  /* Media Queries */
  @media screen and (max-width: 750px) {
    .calculator-container {
      flex-direction: column;
      align-items: center;
    }
    
    .calculator-left {
      margin-right: 0;
      margin-bottom: 20px;
      width: 100%;
    }
    
    .calculator-right {
      flex: none;
      width: 100%;
      max-width: 300px;
    }
    
    .calculator-buttons {
      flex-direction: row;
      flex-wrap: wrap;
    }
    
    .calculator-buttons button {
      flex: 1 1 33.333%;
      min-width: 90px;
    }
  }

  @media screen and (min-width: 1000px) {
    .calculator-section {
      padding: 40px;
    }
    
    .calculator-container {
      max-width: 700px;
    }
  }
`

export default function Calculator() {
  // Keep MP-1 variable naming and IDs so your original CSS hooks work:
  const [one, setOne] = useState<string>('')
  const [two, setTwo] = useState<string>('')
  const [result, setResult] = useState<string>('')

  // MP-1 style integer exponent (iterative)
  const power = (base: number, exp: number) => {
    let r = 1
    for (let i = 0; i < exp; i++) r *= base
    return r
  }

  const operate = (op: '+' | '-' | '*' | '/' | '**') => {
    const a = Number(one)
    const b = Number(two)
    let out: number

    switch (op) {
      case '+':  out = a + b; break
      case '-':  out = a - b; break
      case '*':  out = a * b; break
      case '/':  out = a / b; break // keep JS default behavior for divide by 0
      case '**': out = power(a, b); break
    }
    setResult(String(out))
  }

  const clearAll = () => {
    setOne('')
    setTwo('')
    setResult('')
  }

  const isNegative = Number(result) < 0

  return (
    <CalculatorWrap>
      {/* 
        Keep BOTH: 
        - Your new layout classes (calculator-section, container, etc.)
        - The original MP-1 hooks/IDs/classes (#calculator, .inputs, .buttons, #one, #two, #output)
        This guarantees identical styling from MP-1 while using your new responsive layout.
      */}
      <div className="calculator-section">
        <h2>JavaScript Calculator</h2>

        <div className="calculator-container">
          <div className="calculator-left">
            {/* MP-1 inputs wrapper retained */}
            <div className="inputs input-group">
              <label htmlFor="one">First Number</label>
              <input
                id="one"
                type="number"
                value={one}
                onChange={(e) => setOne(e.target.value)}
                placeholder="Enter a number"
              />

              <label htmlFor="two">Second Number</label>
              <input
                id="two"
                type="number"
                value={two}
                onChange={(e) => setTwo(e.target.value)}
                placeholder="Enter a number"
              />
            </div>

            {/* MP-1 output ID preserved */}
            <div
              id="output"
              className="result-display output"
              style={isNegative ? { color: 'red' } : undefined}
            >
              {result || 'Result will appear here'}
            </div>
          </div>

          <div className="calculator-right">
            {/* MP-1 buttons wrapper retained */}
            <div className="buttons calculator-buttons">
              <div className="button-row">
                <button onClick={() => operate('+')}>+</button>
                <button onClick={() => operate('-')}>-</button>
                <button onClick={() => operate('*')}>*</button>
              </div>
              <div className="button-row">
                <button onClick={() => operate('/')}>/</button>
                <button onClick={() => operate('**')}>**</button>
                <button onClick={clearAll}>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorWrap>
  )
}
