import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

// Cấu hình dữ liệu cho biểu đồ
const lineData = {
  labels: ["01 Jul", "02 Jul", "03 Jul", "04 Jul", "05 Jul", "06 Jul", "07 Jul"],
  datasets: [
    {
      label: "Buồng đầu vào",
      data: [1400, 1350, 1500, 1450, 1520, 1480, 1400],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      fill: false,
    },
    {
      label: "Buồng đạt",
      data: [1300, 1250, 1450, 1400, 1500, 1450, 1380],
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 2,
      fill: false,
    },
  ],
};

const barData = {
  labels: ["Thực tế", "Kế hoạch"],
  datasets: [
    {
      label: "Hiệu suất",
      data: [98, 100],
      backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(54, 162, 235, 0.6)"],
    },
  ],
};

const doughnutData13Kg = {
  labels: ["Thùng đạt", "Thùng lỗi"],
  datasets: [
    {
      data: [2680, 40],
      backgroundColor: ["#36A2EB", "#FF6384"],
    },
  ],
};

const doughnutData18Kg = {
  labels: ["Thùng đạt", "Thùng lỗi"],
  datasets: [
    {
      data: [320, 16],
      backgroundColor: ["#36A2EB", "#FF6384"],
    },
  ],
};

const Monitor = () => {
  return (
    <div className="w-full h-[780px] bg-gray-100 p-2 flex flex-col gap-2">
      {/* Section 1: Khu Trạm Chờ */}

      <div>
        <h2 className="font-bold text-sm">Khu trạm chờ</h2>

        <div className="flex gap-2">
          <div className="flex-1 bg-white rounded-lg shadow-md p-2 ">
            <h3 className="font-bold text-sm mb-2">Số liệu thời gian thực</h3>
            <div className="flex justify-center items-center h-full flex-shrink-0 w-[523px]">
              <div className="text-sm space-y-1">
                <p>
                  Buồng đầu vào: <span className="font-bold">3350</span>
                </p>
                <p>
                  Buồng đạt: <span className="font-bold">2950</span>
                </p>
                <p>
                  Khối lượng (Tấn): <span className="font-bold">95.00</span>
                </p>
                <p>
                  Năng suất trung bình (kg/buồng): <span className="font-bold">32.2</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-2">
            <h2 className="font-bold text-sm mb-2">Thống kê số lượng 7 ngày qua</h2>
            <div className="h-[200px]">
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
      {/* Section 2: Khu Đóng Gói */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="font-bold text-lg mb-2 text-center">Tổng thùng</h2>
          <div className="h-[180px]">
            <Bar data={barData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="font-bold text-lg mb-2 text-center">Thùng 13 Kg</h2>
          <div className="h-[180px]">
            <Doughnut data={doughnutData13Kg} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="font-bold text-lg mb-2 text-center">Thùng 18 Kg</h2>
          <div className="h-[180px]">
            <Doughnut data={doughnutData18Kg} />
          </div>
        </div>
      </div>

      {/* Section 3: Kho Mát */}
      <div className="flex gap-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-2">
          <h2 className="font-bold text-lg mb-2">Thống kê tồn kho (Đơn vị thùng)</h2>
          <div className="h-[180px]">
            <Doughnut data={doughnutData13Kg} />
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-2">
          <h2 className="font-bold text-lg mb-2">Thống kê nhập kho (Đơn vị thùng)</h2>
          <div className="h-[180px]">
            <Doughnut data={doughnutData18Kg} />
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-2">
          <h2 className="font-bold text-lg mb-2">Thống kê xuất kho (Đơn vị thùng)</h2>
          <div className="h-[180px]">
            <Doughnut data={doughnutData13Kg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
