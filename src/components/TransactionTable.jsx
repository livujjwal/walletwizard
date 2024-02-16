import { Radio, Table } from "antd";
import React, { useState } from "react";
import searchImg from "../assets/search.svg";
import Button from "./Button";
import { parse, unparse } from "papaparse";
import { toast } from "react-toastify";
const TransactionTable = ({ transactions, addTransaction, getTransaction }) => {
  const [loading, setLaoding] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortKey, setSortKey] = useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  let filteredTransaction = transactions.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.type.includes(typeFilter)
  );
  let sortedTransaction = [...filteredTransaction].sort((a, b) => {
    if (sortKey === "date") return new Date(a.date) - new Date(b.date);
    if (sortKey === "amount") return a.amount - b.amount;
    else return 0;
  });

  function exportCSV() {
    const csv = unparse({
      fields: ["name", "amount", "tag", "type", "date"],
      data: transactions,
    });
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    var csvURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = csvURL;
    link.download = "transactions.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function importCSV(e) {
    e.preventDefault();
    try {
      parse(e.target.files[0], {
        header: true,
        complete: async function (results) {
          for (const transaction of results.data) {
            const newTransaction = {
              ...transaction,
              amount: parseFloat(transaction.amount),
            };
            await addTransaction(newTransaction, true);
          }
        },
      });
      toast.success("All Transaction Added!");
      getTransaction();
      e.target.files = null;
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <div className="flex flex-col w-[95%] mx-auto">
      <div className="w-full mx-auto  flex items-center justify-between">
        <div className="w-[70%] flex items-center">
          <img
            className="absolute w-5 inline-block m-2 text-slate-200"
            src={searchImg}
            alt="search logo"
          />
          <input
            className=" w-full my-4 p-2 px-8 outline-none border rounded shadow-4xl text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Search by Name"}
          />
        </div>

        <select
          className="w-[28%] rounded shadow-4xl  bg-transparent p-[.64rem]  my-4 border text-sm"
          onChange={(e) => setTypeFilter(e.target.value)}
          value={typeFilter}
          placeholder="Filter"
        >
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
      </div>
      {transactions.length != 0 && (
        <div className="shadow-4xl w-full mx-auto my-4">
          <div className="w-[93.5%] mx-auto  flex items-center my-4 justify-between">
            <h1>My Transaction</h1>
            <Radio.Group
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <Radio.Button className="px-2 h-[2.25rem]" value="">
                No Sort
              </Radio.Button>
              <Radio.Button className="px-2 h-[2.25rem]" value="date">
                Sort by Date
              </Radio.Button>
              <Radio.Button className="px-2 h-[2.25rem]" value="amount">
                Sort by Amount
              </Radio.Button>
            </Radio.Group>
            <div className="flex w-auto  gap-4">
              <button
                disabled={loading}
                className="text-sm rounded text-theme bg-white hover:bg-theme hover:text-white text-center my-2 px-4 py-[.45rem] w-[10rem] border-[1px] border-theme flex justify-center items-center "
                onClick={exportCSV}
              >
                {loading ? "Loading.." : "Export to CSV"}
              </button>
              <label
                htmlFor="csv-file"
                className="cursor-pointer text-sm rounded hover:text-theme hover:bg-white bg-theme text-white text-center my-2 px-4 py-[.455rem] w-[10rem] border-[1px] border-theme flex justify-center items-center"
              >
                {loading ? "Loading.." : "Import from CSV"}
              </label>
              <input
                className="hidden"
                id="csv-file"
                type="file"
                accept=".csv"
                required
                onChange={importCSV}
              />
            </div>
          </div>
          <Table
            className="w-[96%] mx-auto"
            dataSource={sortedTransaction}
            columns={columns}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
