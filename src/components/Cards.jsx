import { Card, Row } from "antd";
import React from "react";

const Cards = () => {
  return (
    <div>
      <Row className="flex justify-between w-[90%] mx-auto my-8 items-center">
        <Card className="shadow-4xl w-[30%] mx-2" title="Current Balance">
          <p>₹0</p>
          <button className="text-sm rounded-md text-theme bg-white hover:bg-theme hover:text-white text-center my-2 p-1 w-full border-[1px] border-theme flex justify-center items-center h-auto">
            Reset Balance
          </button>
        </Card>
        <Card className="shadow-4xl w-[30%] mx-2" title="Total Income">
          <p>₹0</p>
          <button className="text-sm rounded-md text-theme bg-white hover:bg-theme hover:text-white text-center my-2 p-1 w-full border-[1px] border-theme flex justify-center items-center h-auto">
            Add Income
          </button>
        </Card>
        <Card className="shadow-4xl w-[30%] mx-2" title="Total Expenses">
          <p>₹0</p>
          <button className="text-sm rounded-md text-theme bg-white hover:bg-theme hover:text-white text-center my-2 p-1 w-full border-[1px] border-theme flex justify-center items-center h-auto">
            Add Expenses
          </button>
        </Card>
      </Row>
    </div>
  );
};

export default Cards;
