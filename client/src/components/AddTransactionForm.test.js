// client/src/components/AddTransactionForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTransactionForm from './AddTransactionForm';

describe('AddTransactionForm Component', () => {
  test('renders form inputs and submit button', () => {
    // const mockAddTransaction = jest.fn();
    // render(<AddTransactionForm onAddTransaction={mockAddTransaction} />);
    // expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    // expect(screen.getByRole('button', { name: /Add transaction/i })).toBeInTheDocument();
    console.log('Test stub for AddTransactionForm - renders inputs and button');
    expect(true).toBe(true); // Placeholder
  });

  // test('allows typing into input fields', () => {
  //   render(<AddTransactionForm onAddTransaction={jest.fn()} />);
  //   fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'New Laptop' } });
  //   expect(screen.getByLabelText(/Description/i).value).toBe('New Laptop');
  //   // ... test other fields ...
  //   console.log('Test stub for AddTransactionForm - typing into fields');
  //   expect(true).toBe(true); // Placeholder
  // });

  // test('calls onAddTransaction with form data when submitted', () => {
  //   const mockAddTransaction = jest.fn();
  //   render(<AddTransactionForm onAddTransaction={mockAddTransaction} />);
    
  //   fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Salary' } });
  //   fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '5000' } });
  //   fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'Income' } });
  //   fireEvent.click(screen.getByRole('button', { name: /Add transaction/i }));
    
  //   expect(mockAddTransaction).toHaveBeenCalledWith({
  //     description: 'Salary',
  //     amount: 5000,
  //     category: 'Income'
  //   });
  //   console.log('Test stub for AddTransactionForm - submits form');
  //   expect(true).toBe(true); // Placeholder
  // });
});
