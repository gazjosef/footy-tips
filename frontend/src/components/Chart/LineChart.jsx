import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

export default function LineChart({ chartData }) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "TEST",
      fontSize: 16,
    },
  };

  return <Line data={chartData} options={options} />;
}
