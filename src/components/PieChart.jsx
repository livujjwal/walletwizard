import { Pie } from "@ant-design/charts";
const PieChart = ({ data, title }) => {
  const config = {
    data,
    width: 400,
    height: 400,
    angleField: "amount",
    colorField: "tag",
    radius: 0.8,
    innerRadius: 0.5,
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
        fontSize: 14,
        backgroundColor: "#fff",
      },
    },
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundColor: "#fff",
        },
        content: "AntV\nG2Plot",
      },
    },
  };

  return (
    <div>
      <h2 className="font-semibold text-2xl my-2 mx-4">{title}</h2>
      <div className="flex items-center">
        <Pie {...config} />
      </div>
    </div>
  );
};

export default PieChart;
