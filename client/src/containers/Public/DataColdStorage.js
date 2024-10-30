import React from 'react'
import { Select, Button, Input, DatePicker } from "antd";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
const DataColdStorage = () => {
  const tableData = [
    { stt: 1, maPallet: "6T", viTriLuu: "B.01.01", soThung: 54, loai: "40CP", nuocXuatKhau: "Nhật Bản", tinhTrang: "Đã xuất", ngayNhap: "2024-03-23", ngayXuat: "2024-03-26", thoiGianLuuKho: "1 ngày" },
    { stt: 2, maPallet: "6T", viTriLuu: "B.01.02", soThung: 54, loai: "40CP", nuocXuatKhau: "Nhật Bản", tinhTrang: "Trong kho", ngayNhap: "2024-03-23", ngayXuat: "2024-03-26", thoiGianLuuKho: "2 ngày" },
    // Thêm các hàng dữ liệu khác tại đây
  ];

  // Cấu hình dữ liệu biểu đồ
  const barData = {
    labels: ["Nhập kho", "Xuất kho"],
    datasets: [
      {
        label: "Số lượng",
        data: [1100, 1200],
        backgroundColor: ["#3b82f6", "#22c55e"],
      },
    ],
  };

  const doughnutData = {
    labels: ["26CP", "40CP", "AF", "A456", "3CP", "CL"],
    datasets: [
      {
        label: "Tỷ lệ",
        data: [10, 15, 20, 5, 25, 25],
        backgroundColor: ["#fde047", "#f97316", "#34d399", "#60a5fa", "#a78bfa", "#f43f5e"],
      },
    ],
  };

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
      <tr className="bg-green-500">
            <th colSpan="12" className="border border-gray-300 p-2 text-center text-white bg-green-500">
              BẢNG DỮ LIỆU LƯU KHO
            </th>
          </tr>
        <tr >
          <th className="border border-gray-300 p-2">STT</th>
          <th className="border border-gray-300 p-2">Mã Pallet</th>
          <th className="border border-gray-300 p-2">Vị trí lưu</th>
          <th className="border border-gray-300 p-2">Số thùng trên Pallet</th>
          <th className="border border-gray-300 p-2">Loại</th>
          <th className="border border-gray-300 p-2">Nước xuất khẩu</th>
          <th className="border border-gray-300 p-2">Tình trạng</th>
          <th className="border border-gray-300 p-2">Ngày nhập</th>
          <th className="border border-gray-300 p-2">Ngày xuất</th>
          <th className="border border-gray-300 p-2">Thời gian lưu kho</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className="text-center">
            <td className="border border-gray-300 p-2">{row.stt}</td>
            <td className="border border-gray-300 p-2">{row.maPallet}</td>
            <td className="border border-gray-300 p-2">{row.viTriLuu}</td>
            <td className="border border-gray-300 p-2">{row.soThung}</td>
            <td className="border border-gray-300 p-2">{row.loai}</td>
            <td className="border border-gray-300 p-2">{row.nuocXuatKhau}</td>
            <td className="border border-gray-300 p-2">{row.tinhTrang}</td>
            <td className="border border-gray-300 p-2">{row.ngayNhap}</td>
            <td className="border border-gray-300 p-2">{row.ngayXuat}</td>
            <td className="border border-gray-300 p-2">{row.thoiGianLuuKho}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* <div className="flex justify-between mt-4">
        <div className="w-1/3">
          <h3 className="text-center font-semibold">Thống kê tổng xuất/nhập kho theo ngày</h3>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
        </div>
        <div className="w-1/3">
          <h3 className="text-center font-semibold">Thống kê nhập kho theo ngày</h3>
          <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="w-1/3">
          <h3 className="text-center font-semibold">Thống kê xuất kho theo ngày</h3>
          <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div> */}
      
  </div>
  )
}

export default DataColdStorage
