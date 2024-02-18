import { Pie } from "@ant-design/plots";
const PieChart = ({ data, title }) => {
  const config = {
    data,
    width: 400,
    angleField: "amount",
    colorField: "tag",
    radius: 0.7,
    innerRadius: 0.4,
    label: {
      type: "inner",
      offset: "-50%",
      content: "type",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: true,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };

  return (
    <div className="w-[90%] mx-auto">
      <h2 className="font-semibold text-2xl my-2 mx-4">{title}</h2>
      <div className="flex items-center justify-center mx-auto w-[90%]">
        <Pie {...config} />
      </div>
    </div>
  );
};

export default PieChart;
