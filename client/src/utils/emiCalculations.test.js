// client/src/utils/emiCalculations.test.js
import { calculateEMIValue } from './emiCalculations';

describe('calculateEMIValue', () => {
  test('should calculate EMI correctly for valid inputs', () => {
    // Example: Principal: 100000, Rate: 10%, Tenure: 10 years
    // Expected EMI can be verified with an online calculator.
    // For P=10000, R=10% (annual), T=1 year (12 months) => r = 0.10/12 = 0.008333333
    // EMI = 10000 * 0.008333333 * (1+0.008333333)^12 / ((1+0.008333333)^12 - 1) approx 879.16
    expect(calculateEMIValue(10000, 10, 1)).toBe('879.16');
    expect(calculateEMIValue(500000, 7.5, 20)).toBe('4058.87'); // Verify with online calculator
  });

  test('should return null for invalid principal', () => {
    expect(calculateEMIValue(0, 10, 10)).toBeNull();
    expect(calculateEMIValue(-100, 10, 10)).toBeNull();
    expect(calculateEMIValue('abc', 10, 10)).toBeNull();
  });

  test('should return null for invalid tenure', () => {
    expect(calculateEMIValue(10000, 10, 0)).toBeNull();
    expect(calculateEMIValue(10000, 10, -1)).toBeNull();
  });
  
  test('should return null for negative interest rate', () => {
    expect(calculateEMIValue(10000, -5, 10)).toBeNull();
  });

  test('should handle zero interest rate correctly', () => {
    expect(calculateEMIValue(12000, 0, 1)).toBe('1000.00'); // 12000 / 12 months
    expect(calculateEMIValue(60000, 0, 5)).toBe('1000.00'); // 60000 / 60 months
  });
});
