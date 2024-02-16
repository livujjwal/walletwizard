import React from "react";
import { Line, Pie } from "@ant-design/charts";

const LineChart = ({ sortedTransactions }) => {
  const dataLineChart = sortedTransactions.map((item) => {
    return { date: item.date, amount: parseFloat(item.amount) };
  });
  let dataPieChart = sortedTransactions.filter((item) => {
    if (item.type === "expenses") {
      return { tag: item.tag, amount: parseFloat(item.amount) };
    }
  });
  const configLineChart = {
    data: dataLineChart,
    width: 800,
    height: 400,
    xField: "date",
    yField: "amount",
  };
  const configPieChart = {
    width: 400,
    height: 400,
    data: dataPieChart,
    angleField: "amount",
    colorField: "tag",
    radius: 1,
    innerRadius: 0.6,
  };
let pieChart;
let chart;
return (
  <div className="w-[95%] flex items-center justify-between  mx-auto my-8">
    <div className="shadow-4xl w-[65%]">
      <h2 className="font-semibold text-2xl my-2 mx-4">Your Analytics</h2>
      <Line
        {...configLineChart}
        onReady={(chartInstance) => (chart = chartInstance)}
      />
    </div>
    <div className="shadow-4xl w-[32%]">
      <h2 className="font-semibold text-2xl my-2 mx-4">Your Spendings</h2>
      <Pie
        {...configPieChart}
        onReady={(chartInstance) => (pieChart = chartInstance)}
      />
    </div>
  </div>
);
};
// className="w-[95%] shadow-4xl mx-auto"
export default LineChart;
