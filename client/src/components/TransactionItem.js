import React from 'react';

// Placeholder for onRemove prop
const TransactionItem = ({ transaction, onRemove }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const amount = Math.abs(transaction.amount).toFixed(2);

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.description} <span>{transaction.category}</span>
      <span>{sign}${amount}</span>
      <button onClick={() => onRemove(transaction._id)} className="delete-btn">x</button>
    </li>
  );
}

export default TransactionItem;
