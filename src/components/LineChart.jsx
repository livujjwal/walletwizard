import { Line } from "@ant-design/charts";

const LineChart = ({ data }) => {
  const config = {
    data,
    width: 750,
    height: 400,
    xField: "date",
    yField: "amount",
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl mt-2 mb-6 mx-4">Your Analytics</h2>
      <Line {...config} />
    </div>
  );
};
export default LineChart;
