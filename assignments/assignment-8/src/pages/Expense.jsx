import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

const Expenses = () => {
  const [expenseItems, setExpenseItems] = useState([]);
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("expenseItems");
    if (storedItems) {
      setExpenseItems(JSON.parse(storedItems));
    }
  }, []);

  // Save data to localStorage when expenseItems changes
  useEffect(() => {
    localStorage.setItem("expenseItems", JSON.stringify(expenseItems));
  }, [expenseItems]);

  const handleDescriptionChange = (e) => {
    setExpenseDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      expenseDescription.trim() === "" ||
      isNaN(expenseAmount) ||
      +expenseAmount <= 0
    ) {
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      description: expenseDescription,
      amount: +expenseAmount,
    };

    setExpenseItems([...expenseItems, newItem]);
    setExpenseDescription("");
    setExpenseAmount("");
  };

  const handleDelete = (id) => {
    setExpenseItems(expenseItems.filter((item) => item.id !== id));
  };

  return (
    <Layout title="Expense">
      <h2 className="text-xl font-bold mb-4">Expense Page</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={expenseDescription}
            onChange={handleDescriptionChange}
            className="border border-red-300 px-3 py-2 rounded w-64"
            placeholder="Expense Description"
          />
          <input
            type="number"
            value={expenseAmount}
            onChange={handleAmountChange}
            className="border border-red-300 px-3 py-2 rounded w-32"
            placeholder="Amount"
          />
          <button type="submit" className="btn btn-red">
            Add Expense
          </button>
        </div>
      </form>
      <div>
        <h3 className="text-lg font-bold mb-2">Expense List</h3>
        {expenseItems.length === 0 ? (
          <p>No expense recorded yet.</p>
        ) : (
          <ul>
            {expenseItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b border-red-300"
              >
                <span>{item.description}</span>
                <span>${item.amount}</span>
                <button
                  className="btn btn-red"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Expenses;
