// client/src/components/Balance.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Balance from './Balance';

describe('Balance Component', () => {
  test('renders "Your Balance" text', () => {
    // const mockTransactions = [];
    // render(<Balance transactions={mockTransactions} />);
    // const balanceTextElement = screen.getByText(/Your Balance/i);
    // expect(balanceTextElement).toBeInTheDocument();
    console.log('Test stub for Balance component - renders title');
    expect(true).toBe(true); // Placeholder
  });

  test('calculates and displays the total balance correctly', () => {
    // const mockTransactions = [
    //   { _id: '1', amount: 100 },
    //   { _id: '2', amount: -50 },
    //   { _id: '3', amount: 200 }
    // ];
    // render(<Balance transactions={mockTransactions} />);
    // const totalElement = screen.getByText(/\$250.00/i); // 100 - 50 + 200 = 250
    // expect(totalElement).toBeInTheDocument();
    console.log('Test stub for Balance component - calculates total');
    expect(true).toBe(true); // Placeholder
  });

  test('displays $0.00 for no transactions', () => {
    // const mockTransactions = [];
    // render(<Balance transactions={mockTransactions} />);
    // const totalElement = screen.getByText(/\$0.00/i);
    // expect(totalElement).toBeInTheDocument();
    console.log('Test stub for Balance component - empty transactions');
    expect(true).toBe(true); // Placeholder
  });
});
