// src/components/DataCard.js
import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

const DataCard = ({ title, inputs, chartData, chartType }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 mb-3 max-h-[250px] overflow-hidden flex flex-col">
      <h4 className="bg-green-500 text-white rounded-md text-center h-[20px]">{title}</h4>
      <div className="flex flex-col lg:flex-row flex-grow">
        {inputs && inputs.length > 0 && (
          <div className="w-full lg:w-1/2 p-1 space-y-0.5">
            {inputs.map((input, index) => (
              <div className="flex items-center gap-2" key={index}>
                <label className="w-40 text-sm mb-1">{input.label}:</label>
                <input
                  className="w-[50px] p-1 focus:outline-none text-sm"
                  placeholder={input.placeholder}
                />
              </div>
            ))}
          </div>
        )}
        <div
          className={`w-full ${inputs && inputs.length > 0 ? 'lg:w-1/2' : 'w-full'} p-1 ${
            chartType === 'doughnut' ? 'flex justify-center items-center' : ''
          }`}
        >
          <div className={`${chartType === 'doughnut' ? 'w-[150px] h-[150px]' : 'w-full h-40'}`}>
            {chartType === 'doughnut' && <Doughnut data={chartData} />}
            {chartType === 'bar' && <Bar data={chartData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
