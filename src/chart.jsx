import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { startTransition } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Contributions Overtime",
      align: "start",
      color: "black",
    },
    legend: {
      display: true,

      align: "center",
      text: "10px",
      labels: {
        boxWidth: 15,
        useBorderRadius: true,
        borderRadius: 5,
        font: {
          size: 10,
        },
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        color: "white",
      },
    },
    y: {
      beginAtZero: true,
      max: 350,
      border: {
        dash: [7, 7],
      },
      ticks: {
        stepSize: 100,
        callback: (value, index, values) => {
          if (index < values.length - 1) {
            return value;
          }
          return null;
        },
      },
    },
  },
};

const labels = [
  "20",
  "",
  "25",
  "",
  "30",
  "",
  "35",
  "",
  "40",
  "",
  "60",
  "",
  "65",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Employer: K 73,500",
      data: [10, 15, 20, 25, 30, 35, 40, 50, 55, 60, 70, 75, 85],
      backgroundColor: "rgb(0, 0, 153)",
    },
    {
      label: "Employee: K 52,500",
      data: [20, 35, 60, 75, 85, 100, 125, 140, 150, 170, 180, 185, 190],
      backgroundColor: "rgb(26, 26, 255)",
    },
    {
      label: "Total Interest: K 244,313",
      data: [60, 80, 95, 120, 140, 150, 170, 190, 220, 240, 275, 285, 320],
      backgroundColor: "rgb(128, 128, 255)",
    },
  ],
};

export function Chart() {
  return <Bar height={220} options={options} data={data} />;
}
