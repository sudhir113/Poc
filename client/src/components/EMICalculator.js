// client/src/components/EMICalculator.js
import React, { useState } from 'react';
import { calculateEMIValue } from '../utils/emiCalculations'; // <-- Import

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [tenureYears, setTenureYears] = useState('');
  const [emi, setEmi] = useState(null);
  const [error, setError] = useState('');

  const handleCalculation = () => { // Renamed from calculateEMI to avoid confusion
    const result = calculateEMIValue(principal, annualRate, tenureYears);
    if (result === null) {
      setError('Please enter valid positive numbers for all fields. Annual rate can be 0.');
      setEmi(null);
    } else {
      setError('');
      setEmi(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCalculation();
  };

  return (
    // ... JSX remains the same ...
    // Ensure form inputs for principal, annualRate, tenureYears are wired correctly
    // and the result is displayed from the `emi` state.
    // The error message should be displayed from the `error` state.
    <div className="emi-calculator-container">
      <h3>EMI Calculator</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="principal">Principal Loan Amount ($)</label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
          />
        </div>
        <div className="form-control">
          <label htmlFor="annualRate">Annual Interest Rate (%)</label>
          <input
            type="number"
            id="annualRate"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            placeholder="Enter annual interest rate"
          />
        </div>
        <div className="form-control">
          <label htmlFor="tenureYears">Loan Tenure (Years)</label>
          <input
            type="number"
            id="tenureYears"
            value={tenureYears}
            onChange={(e) => setTenureYears(e.target.value)}
            placeholder="Enter loan tenure in years"
          />
        </div>
        <button type="submit" className="btn">Calculate EMI</button>
      </form>
      {error && <p className="error-message" style={{color: 'red'}}>{error}</p>}
      {emi !== null && (
        <div className="emi-result">
          <h4>Your Monthly EMI:</h4>
          <p>${emi}</p>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
