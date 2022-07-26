import React from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

export default function BarChart({ chartData }) {
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

  return <Bar data={chartData} options={options} />;
}
