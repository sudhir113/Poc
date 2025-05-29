import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import EMICalculator from './components/EMICalculator'; // <-- New import
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []); // Runs once on mount

  const getTransactions = async () => {
    try {
      const res = await fetch('/api/transactions'); // Proxy will direct this
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
      // setTransactions([]); // Optionally reset or handle error in UI
    }
  };

  const addTransaction = async (transactionInput) => { // {description, amount, category}
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionInput),
      });
      if (!res.ok) {
        // You might want to parse the error response body if your API sends specific messages
        const errorData = await res.json(); // Or res.text()
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorData.msg || 'Unknown error'}`);
      }
      const newTransactionFromServer = await res.json();
      // Add and then sort by date descending to show newest first
      setTransactions(prevTransactions => 
        [newTransactionFromServer, ...prevTransactions].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    } catch (error) {
      console.error("Failed to add transaction:", error);
      // alert(`Error adding transaction: ${error.message}`); // Provide feedback to user
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const res = await fetch(`/api/transactions/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const errorData = await res.json(); // Or res.text()
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorData.msg || 'Unknown error'}`);
      }
      // If DELETE is successful
      setTransactions(prevTransactions =>
        prevTransactions.filter(transaction => transaction._id !== id)
      );
    } catch (error) {
      console.error("Failed to delete transaction:", error);
      // alert(`Error deleting transaction: ${error.message}`); // Provide feedback to user
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <AddTransactionForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} onRemoveTransaction={deleteTransaction} />
        <hr /> {/* Optional: a separator */}
        <EMICalculator /> {/* <-- Add the new component */}
      </div>
    </div>
  );
}

export default App;
