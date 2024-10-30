import React, { useState } from "react";
import { DatePicker, Select, Tabs } from "antd";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
const { Option } = Select;
const PackingPlanning = () => {
  const tableData = {
    headers: ["Kế hoạch", "Thùng đạt chuẩn", "Thùng lỗi", "Tổng thùng", "Chênh lệch", "Hiệu suất"],
    rows: [
      { chuyền: "Chuyền 1", kếHoạch: 500, đạt: 450, lỗi: 10, tổng: 460, chênhLệch: 40, hiệuSuất: "92.00%" },
      { chuyền: "Chuyền 2", kếHoạch: 470, đạt: 400, lỗi: 5, tổng: 405, chênhLệch: 65, hiệuSuất: "86.17%" },
      { chuyền: "Chuyền 3", kếHoạch: 500, đạt: 450, lỗi: 10, tổng: 460, chênhLệch: 40, hiệuSuất: "92.00%" },
      { chuyền: "Chuyền 4", kếHoạch: 470, đạt: 400, lỗi: 5, tổng: 405, chênhLệch: 65, hiệuSuất: "86.17%" },
      { chuyền: "Chuyền 5", kếHoạch: 500, đạt: 450, lỗi: 10, tổng: 460, chênhLệch: 40, hiệuSuất: "92.00%" },
      { chuyền: "Chuyền 6", kếHoạch: 470, đạt: 400, lỗi: 5, tổng: 405, chênhLệch: 65, hiệuSuất: "86.17%" },
      { chuyền: "Chuyền 7", kếHoạch: 500, đạt: 450, lỗi: 10, tổng: 460, chênhLệch: 40, hiệuSuất: "92.00%" },
      { chuyền: "Chuyền 8", kếHoạch: 470, đạt: 400, lỗi: 5, tổng: 405, chênhLệch: 65, hiệuSuất: "86.17%" },
      { chuyền: "Chuyền 9", kếHoạch: 500, đạt: 450, lỗi: 10, tổng: 460, chênhLệch: 40, hiệuSuất: "92.00%" },
      { chuyền: "Chuyền 10", kếHoạch: 470, đạt: 400, lỗi: 5, tổng: 405, chênhLệch: 65, hiệuSuất: "86.17%" },
    ],
  };
  const chartData = {
    labels: tableData.rows.map(row => row.chuyền),
    datasets: [
      {
        label: 'Kế hoạch (SL)',
        data: tableData.rows.map(row => row.kếHoạch),
        backgroundColor: '#22c55e',
      },
      {
        label: 'Thùng đạt chuẩn (SL)',
        data: tableData.rows.map(row => row.đạt),
        backgroundColor: '#3b82f6',
      },
      {
        label: 'Thùng lỗi (SL)',
        data: tableData.rows.map(row => row.lỗi),
        backgroundColor: '#ef4444',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 600
      }
    },
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const handleDateChange = (date) => {
    // Kiểm tra nếu date không null thì chuyển đổi sang đối tượng Date, nếu không thì set null
    setSelectedDate(date ? date.toDate() : null);
  };
  const handleChange = (value) => {
    setSelectedStation(value);
  };
  const handleTabChange = (key) => {
    if (key === "1") {
      navigate("/data-packing-area");
    } else if (key === "2") {
      navigate("/data-waiting-area/planning");
    }
  };

  const activeKey = location.pathname === "/data-packing-area" ? "1" : "2";

  // Định nghĩa các tab bằng `items`
  const tabItems = [
    {
      key: "1",
      label: "Dữ liệu thống kê",
      children: <div>{/* Nội dung của tab Số liệu */}</div>,
    },
    {
      key: "2",
      label: "Dữ liệu kế hoạch",
      children: <div>{/* Nội dung của tab Biểu đồ */}</div>,
    },
  ];
  return (
    <div className="h-[780px]">
      <div className="shadow-sm rounded mb-2 px-2 ">
       <div>
          <Tabs activeKey={activeKey} onChange={handleTabChange} items={tabItems} />
        </div>
        <div className="flex justify-between items-center p-1">
          <div className="flex gap-2">
            <DatePicker
              value={selectedDate ? moment(selectedDate) : null}
              style={{
                height: "33px", // Thiết lập chiều cao tùy chỉnh
              }}
              onChange={handleDateChange}
              customInput={
                <button className="flex items-center gap-2 border border-blue-400 text-blue-500 px-4 py-2 rounded h-8">
                  <i className="bx bx-calendar"></i>
                  <span>{selectedDate ? selectedDate.toLocaleDateString() : "Chọn ngày"}</span>
                </button>
              }
            />
            <Select defaultValue={selectedStation} style={{ width: 160, height: 33 }} onChange={handleChange} className="rounded">
              <Option value="Trạm chờ 1">Trạm chờ 1</Option>
              <Option value="Trạm chờ 2">Trạm chờ 2</Option>
              <Option value="Tổng hai trạm chờ">Tổng hai trạm chờ</Option>
            </Select>
            <button className="flex items-center gap-2 text-white bg-blue-400 rounded px-4 py-2 hover:bg-blue-600 transition h-[33px]">
              <span>Trích xuất</span>
              <i className="bx bxs-download"></i>
            </button>
          </div>
        </div>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-500">
            <th colSpan="12" className="border border-gray-300 p-2 text-center text-white bg-green-500">
              BẢNG THỐNG KÊ SỐ LƯỢNG BUỒNG ĐẦU VÀO, KHỐI LƯỢNG BUỒNG VÀ NĂNG SUẤT - TỔNG 2 KHU TRẠM CHỜ
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 p-1">Ngày</th>
            {tableData.rows.map((_, index) => (
              <th key={index} className="border border-gray ">
                Chuyền {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {tableData.headers.map((header, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 p-1 bg-gray-100">{header}</td>
                {tableData.rows.map((row, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 p-1">
                    {header === "Kế hoạch" ? row.kếHoạch
                      : header === "Thùng đạt chuẩn" ? row.đạt
                      : header === "Thùng lỗi" ? row.lỗi
                      : header === "Tổng thùng" ? row.tổng
                      : header === "Chênh lệch" ? row.chênhLệch
                      : header === "Hiệu suất" ? row.hiệuSuất
                      : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
      </table>
      
      {/* Biểu đồ */}
     
      <div className="flex flex-col w-full mt-2 ">
        <h3 className="text-lg font-semibold  text-center">Giám Sát Số Lượng Thùng Theo Từng Chuyền</h3>
        <Bar data={chartData} options={chartOptions} height={180} width={800}/>
      </div>
      </div>
    </div>
  );
};

export default PackingPlanning;
