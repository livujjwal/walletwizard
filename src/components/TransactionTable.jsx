import { Table } from "antd";
import React, { useState } from "react";

const TransactionTable = ({ transactions }) => {
  const [search, setSearch] = useState("");
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
  let filteredTransaction = transactions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-4">
      <input
        className="w-[80%] m-2 p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Please enter text"
      />
      <Table dataSource={filteredTransaction} columns={columns} />
    </div>
  );
};

export default TransactionTable;
