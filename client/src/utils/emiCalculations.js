// client/src/utils/emiCalculations.js

/**
 * Calculates Equated Monthly Installment (EMI).
 * @param {number} principal - The principal loan amount.
 * @param {number} annualRate - The annual interest rate (e.g., 5 for 5%).
 * @param {number} tenureYears - The loan tenure in years.
 * @returns {string|null} The calculated EMI as a string with 2 decimal places, or null if inputs are invalid.
 */
export const calculateEMIValue = (principal, annualRate, tenureYears) => {
  const p = parseFloat(principal);
  const rAnnual = parseFloat(annualRate);
  const tYears = parseFloat(tenureYears);

  if (isNaN(p) || p <= 0 || isNaN(rAnnual) || rAnnual < 0 || isNaN(tYears) || tYears <= 0) {
    return null; // Indicate invalid input
  }

  if (rAnnual === 0) {
    return (p / (tYears * 12)).toFixed(2);
  }

  const rMonthly = rAnnual / (12 * 100); // Monthly interest rate
  const nMonths = tYears * 12; // Loan tenure in months

  // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const emi = (p * rMonthly * Math.pow(1 + rMonthly, nMonths)) / (Math.pow(1 + rMonthly, nMonths) - 1);
  return emi.toFixed(2);
};
