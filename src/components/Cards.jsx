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
      <Row className="flex justify-between w-[90%] mx-auto my-8 items-center">
        <Card className="shadow-4xl w-[30%] mx-2" title="Current Balance">
          <p>₹{balance}</p>
          <Button text="Reset Balance" />
        </Card>
        <Card className="shadow-4xl w-[30%] mx-2" title="Total Income">
          <p>₹{income}</p>
          <Button text="Add Income" onClick={showIncomeModal} />
        </Card>
        <Card className="shadow-4xl w-[30%] mx-2" title="Total Expenses">
          <p>₹{expenses}</p>
          <Button text="Add Expenses" onClick={showExpensesModal} />
        </Card>
      </Row>
    </div>
  );
};

export default Cards;
