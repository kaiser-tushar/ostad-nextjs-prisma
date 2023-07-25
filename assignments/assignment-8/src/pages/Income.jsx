import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

const Income = () => {
  const [incomeItems, setIncomeItems] = useState([]);
  const [incomeDescription, setIncomeDescription] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("incomeItems");
    if (storedItems) {
      setIncomeItems(JSON.parse(storedItems));
    }
  }, []);

  // Save data to localStorage when incomeItems changes
  useEffect(() => {
    localStorage.setItem("incomeItems", JSON.stringify(incomeItems));
  }, [incomeItems]);

  const handleDescriptionChange = (e) => {
    setIncomeDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setIncomeAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      incomeDescription.trim() === "" ||
      isNaN(incomeAmount) ||
      +incomeAmount <= 0
    ) {
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      description: incomeDescription,
      amount: +incomeAmount,
    };

    setIncomeItems([...incomeItems, newItem]);
    setIncomeDescription("");
    setIncomeAmount("");
  };

  const handleDelete = (id) => {
    setIncomeItems(incomeItems.filter((item) => item.id !== id));
  };

  return (
    <Layout title="Income">
      <h2 className="text-xl font-bold mb-4">Income Page</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={incomeDescription}
            onChange={handleDescriptionChange}
            className="border border-gray-300 px-3 py-2 rounded w-64"
            placeholder="Income Description"
          />
          <input
            type="number"
            value={incomeAmount}
            onChange={handleAmountChange}
            className="border border-gray-300 px-3 py-2 rounded w-32"
            placeholder="Amount"
          />
          <button type="submit" className="btn btn-primary">
            Add Income
          </button>
        </div>
      </form>
      <div>
        <h3 className="text-lg font-bold mb-2">Income List</h3>
        {incomeItems.length === 0 ? (
          <p>No income recorded yet.</p>
        ) : (
          <ul>
            {incomeItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between py-2 border-b border-gray-300"
              >
                <span>{item.description}</span>
                <span>${item.amount}</span>
                <button
                  className="btn btn-error"
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

export default Income;
