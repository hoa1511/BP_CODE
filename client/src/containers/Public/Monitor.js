// src/components/Monitor.js
import React from 'react';
import DataCard from '../../components/DataCard';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
const Monitor = () => {
  const placeholderDoughnutData = {
    labels: ['Buồng đạt', 'Buồng lỗi'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4CAF50', '#FF5252'],
      },
    ],
  };

  const placeholderBarData = {
    labels: ['Thực tế', 'Kế hoạch'],
    datasets: [
      {
        label: 'Tổng thùng',
        data: [3056, 3110],
        backgroundColor: ['#4285F4', '#66BB6A'],
      },
    ],
  };

  return (
    <div className="p-1 overflow-y-auto shadow-sm">
      {/* Khu Trạm Chờ */}
      <div className="h-[30px] mb-2 p-2 bg-teal-400 rounded-lg text-white flex justify-center items-center">
        <h3 className="text-base font-bold">KHU TRẠM CHỜ</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DataCard
          title="TRẠM CHỜ 1"
          inputs={[
            { label: 'Buồng đầu vào', placeholder: '3500' },
            { label: 'Buồng đạt', placeholder: '3000' },
            { label: 'Buồng lỗi', placeholder: '500' },
            { label: 'Khối lượng (Tấn)', placeholder: '100.00' },
            { label: 'Năng suất trung bình (kg/buồng)', placeholder: '33.33' },
          ]}
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
        <DataCard
          title="TRẠM CHỜ 2"
          inputs={[
            { label: 'Buồng đầu vào', placeholder: '3200' },
            { label: 'Buồng đạt', placeholder: '2900' },
            { label: 'Buồng lỗi', placeholder: '300' },
            { label: 'Khối lượng (Tấn)', placeholder: '90.00' },
            { label: 'Năng suất trung bình (kg/buồng)', placeholder: '31.03' },
          ]}
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
        <DataCard
          title="TỔNG 2 KHU TRẠM CHỜ"
          inputs={[
            { label: 'Buồng đầu vào', placeholder: '6700' },
            { label: 'Buồng đạt', placeholder: '5900' },
            { label: 'Buồng lỗi', placeholder: '800' },
            { label: 'Khối lượng (Tấn)', placeholder: '190.00' },
            { label: 'Năng suất trung bình (kg/buồng)', placeholder: '32.2' },
          ]}
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
      </div>

      {/* Khu Đóng Gói */}
      <div className="h-[30px] mb-2 p-2 bg-teal-400 rounded-lg text-white flex justify-center items-center">
        <h3 className="text-base font-bold">KHU ĐÓNG GÓI</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DataCard
          title="Tổng thùng"
          inputs={[
            { label: 'Kế hoạch', placeholder: '3110' },
            { label: 'Tổng thùng (Thực tế)', placeholder: '3056' },
            { label: 'Thùng đạt', placeholder: '3000' },
            { label: 'Thùng lỗi', placeholder: '56' },
            { label: 'Chênh lệch', placeholder: '54' },
          ]}
          chartData={placeholderBarData}
          chartType="bar"
        />
        <DataCard
          title="Thùng 13 Kg"
          inputs={[
            { label: 'Tổng thùng', placeholder: '2720' },
            { label: 'Thùng đạt', placeholder: '2680' },
            { label: 'Thùng lỗi', placeholder: '40' },
          ]}
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
         <DataCard
          title="Thùng 18 Kg"
          inputs={[
            { label: 'Tổng thùng', placeholder: '2720' },
            { label: 'Thùng đạt', placeholder: '2680' },
            { label: 'Thùng lỗi', placeholder: '40' },
          ]}
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
      </div>

      {/* Kho Mát */}
      <div className="h-[30px] mb-2 p-2 bg-teal-400 rounded-lg text-white flex justify-center items-center">
        <h3 className="text-base font-bold">KHO MÁT</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DataCard
          title="Biểu đồ xuất/nhập và tồn kho (Đơn vị thùng)"
          chartData={placeholderBarData}
          chartType="bar"
        />
        <DataCard
          title="Biểu đồ nhập kho (Đơn vị thùng)"
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
          <DataCard
          title="Biểu đồ nhập kho (Đơn vị thùng)"
          chartData={placeholderDoughnutData}
          chartType="doughnut"
        />
      </div>
    </div>
  );
};

export default Monitor;
