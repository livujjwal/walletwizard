import { useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Button from "./Button";

const Chart = ({ sortedTransactions }) => {
  const [showSpending, setShowSpending] = useState(true);
  const lineChartData = sortedTransactions.map((item) => {
    return { date: item.date, amount: parseFloat(item.amount) };
  });

  const spendingData = sortedTransactions.filter((item) => {
    if (item.type === "expenses") {
      return { tag: item.tag, amount: parseFloat(item.amount) };
    }
  });

  let finalSpendingData = [];
  const temp = spendingData.reduce((acc, item) => {
    let key = item.tag;
    if (!acc[key]) {
      acc[key] = { tag: item.tag, amount: parseFloat(item.amount) };
      finalSpendingData.push(acc[key]);
    } else {
      acc[key].amount += parseFloat(item.amount);
    }
    return acc;
  }, {});
  const incomeData = sortedTransactions.filter((item) => {
    if (item.type === "income") {
      return { tag: item.tag, amount: parseFloat(item.amount) };
    }
  });
  let finalIncomeData = [];
  const temp1 = incomeData.reduce((acc, item) => {
    let key = item.tag;
    if (!acc[key]) {
      acc[key] = { tag: item.tag, amount: parseFloat(item.amount) };
      finalIncomeData.push(acc[key]);
    } else {
      acc[key].amount += parseFloat(item.amount);
    }
    return acc;
  }, {});

  return (
    <div className="w-[95%] flex items-center justify-between  mx-auto my-8 h-[32rem]">
      <div className="shadow-4xl w-[62%] h-full">
        <LineChart data={lineChartData} />
      </div>
      <div className="shadow-4xl w-[35%] flex items-center flex-col h-full">
        {showSpending ? (
          <PieChart data={finalSpendingData} title={"Your Spendings"} />
        ) : (
          <PieChart data={finalIncomeData} title={"Your Incomes"} />
        )}
        <button
          onClick={() => setShowSpending(!showSpending)}
          className="text-sm rounded hover:text-white text-theme hover:bg-theme bg-white  text-center my-2 p-1 w-1/2 border-[1px] border-theme"
        >
          {showSpending ? "Show Incomes" : "Show Spendings"}
        </button>
      </div>
    </div>
  );
};

export default Chart;
