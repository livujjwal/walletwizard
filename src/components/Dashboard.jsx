import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import AddIncome from "../Modals/AddIncome";
import AddExpenses from "../Modals/AddExpenses";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import TransactionTable from "./TransactionTable";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [transactions, setTransactions] = useState([]);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  const [isExpensesModalVisible, setIsExpensesModalVisible] = useState(false);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };
  const showExpensesModal = () => {
    setIsExpensesModalVisible(true);
  };
  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };
  const handleExpensesCancel = () => {
    setIsExpensesModalVisible(false);
  };
  async function addTransaction(transaction) {
    try {
      const docRef = await addDoc(
        collection(db, "users/" + user.uid + "/transactions"),
        transaction
      );
      toast.success("Transaction Added!");
      let newArr = transactions;
      newArr.push(transaction);
      setTransactions(newArr);
      calculateBalance();
    } catch (error) {
      toast.error(" Couldn't add transaction");
    }
  }
  useEffect(() => {
    getTransaction();
  }, []);
  async function getTransaction() {
    const querySnapshot = await getDocs(
      query(collection(db, "users/" + user.uid + "/transactions"))
    );
    const transactionArray = [];
    querySnapshot.forEach((doc) => transactionArray.push(doc.data()));
    toast.success("Transaction fetch");
    setTransactions(transactionArray);
  }
  useEffect(() => {
    calculateBalance();
  }, [transactions]);
  function calculateBalance() {
    let incomeTotal = 0;
    let expensesTotal = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "income")
        incomeTotal += Number(transaction.amount);
      else expensesTotal += Number(transaction.amount);
      setBalance(incomeTotal - expensesTotal);
      setExpenses(expensesTotal);
      setIncome(incomeTotal);
    });
  }

  function onFinish(values, type) {
    const newTransaction = {
      type: type,
      date: moment(values.date).format("YYYY-MM-DD"),
      amount: values.amount,
      tag: values.tag,
      name: values.name,
    };
    addTransaction(newTransaction);
    handleIncomeCancel();
    handleExpensesCancel();
  }

  return (
    <div>
      <Cards
        income={income}
        expenses={expenses}
        balance={balance}
        showIncomeModal={showIncomeModal}
        showExpensesModal={showExpensesModal}
      />
      <AddIncome
        title={"Add Income"}
        onFinish={onFinish}
        handleIncomeCancel={handleIncomeCancel}
        isIncomeModalVisible={isIncomeModalVisible}
      >
        Income
      </AddIncome>
      <AddExpenses
        title={"Add Expenses"}
        onFinish={onFinish}
        handleExpensesCancel={handleExpensesCancel}
        isExpensesModalVisible={isExpensesModalVisible}
      >
        Expenses
      </AddExpenses>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Dashboard;
