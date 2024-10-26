// src/components/PackingCard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const PackingCard = ({ title, plan, actual, passed, failed, difference, efficiency }) => {
  const data = {
    labels: ['Thực tế', 'Kế hoạch'],
    datasets: [
      {
        label: 'Kế hoạch',
        data: [actual, plan],
        backgroundColor: ['#42A5F5', '#66BB6A'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 ">
    <h4 className="bg-green-500 text-white rounded-md text-center py-1 font-bold mb-2">{title}</h4>
    <div className="flex flex-row items-center gap-3">
      <ul className="text-sm mb-2 flex flex-col gap-2">
        <li >Kế hoạch: {plan}</li>
        <li>Thực tế: {actual}</li>
        <li>- Thùng đạt: {passed}</li>
        <li>- Thùng lỗi: {failed}</li>
        <li>Chênh lệch: {difference}</li>
        <li className='font-bold'>Hiệu suất: {efficiency}%</li>
      </ul>
      <div className="w-[90px] h-32 mb-2">
        <Bar data={data} options={options} />
      </div>
    </div>
  </div>
  );
};

export default PackingCard;
