import { Card, Row } from "antd";
import React from "react";
import Button from "./Button";

const Cards = ({
  showIncomeModal,
  showExpensesModal,
  income,
  expenses,
  balance,
}) => {
  return (
    <div>
      <Row className="flex justify-between w-[95%] mx-auto my-6 items-center gap-4">
        <Card className="shadow-4xl w-[30%]" title="Current Balance">
          <p className="mb-4">₹{balance}</p>
          <Button text="Reset Balance" />
        </Card>
        <Card className="shadow-4xl w-[30%]" title="Total Income">
          <p className="mb-4">₹{income}</p>
          <Button text="Add Income" onClick={showIncomeModal} />
        </Card>
        <Card className="shadow-4xl w-[30%]" title="Total Expenses">
          <p className="mb-4">₹{expenses}</p>
          <Button text="Add Expenses" onClick={showExpensesModal} />
        </Card>
      </Row>
    </div>
  );
};

export default Cards;
