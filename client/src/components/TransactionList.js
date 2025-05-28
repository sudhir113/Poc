import React from 'react';
import TransactionItem from './TransactionItem';

// Placeholder for transactions and onRemove props
const TransactionList = ({ transactions, onRemoveTransaction }) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.length === 0 && <p>No transactions yet.</p>}
        {transactions.map(transaction => (
          <TransactionItem 
            key={transaction._id} 
            transaction={transaction} 
            onRemove={onRemoveTransaction} 
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
