const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction'); // Path from server/routes/ to server/models/

// @route   GET /api/transactions
// @desc    Get all transactions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/transactions
// @desc    Add a new transaction
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    const newTransaction = new Transaction({
      description,
      amount,
      category
    });
    const transaction = await newTransaction.save();
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    if (err.name === 'ValidationError') {
        return res.status(400).json({ msg: 'Validation error', errors: err.errors });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/transactions/:id
// @desc    Delete a transaction
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }
    await transaction.deleteOne();
    res.json({ msg: 'Transaction removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Transaction not found (invalid ID format)' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/transactions/:id
// @desc    Update a transaction
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    let transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ msg: 'Transaction not found' });
    }
    const { description, amount, category } = req.body;
    const updatedFields = {};
    if (description !== undefined) updatedFields.description = description;
    if (amount !== undefined) updatedFields.amount = amount;
    if (category !== undefined) updatedFields.category = category;

    transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Transaction not found (invalid ID format)' });
    }
    if (err.name === 'ValidationError') {
        return res.status(400).json({ msg: 'Validation error', errors: err.errors });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
