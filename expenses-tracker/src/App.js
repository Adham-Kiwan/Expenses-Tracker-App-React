import "./App.css";
import Header from "./Components/header.js";
import Balance from "./Components/balance.js";
import IncomeExpenses from "./Components/IncomeExpenses.js";
import TransactionList from "./Components/TransactionList.js";
import AddTransaction from "./Components/AddTransaction.js";


import React from "react";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;