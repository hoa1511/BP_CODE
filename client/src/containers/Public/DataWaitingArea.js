import React, { useState } from "react";
import { DatePicker, Select, Tabs } from "antd";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";

const { Option } = Select;

const DataWaitingArea = () => {
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
      navigate("/data-waiting-area");
    } else if (key === "2") {
      navigate("/data-waiting-area/chart");
    }
  };

  const activeKey = location.pathname === "/data-waiting-area" ? "1" : "2";

  // Định nghĩa các tab bằng `items`
  const tabItems = [
    {
      key: "1",
      label: "Số liệu",
      children: <div>{/* Nội dung của tab Số liệu */}</div>,
    },
    {
      key: "2",
      label: "Biểu đồ",
      children: <div>{/* Nội dung của tab Biểu đồ */}</div>,
    },
  ];
  const tableData = [
    { type: "Đạt", values: [610, 610, 610, 610, 610, 610, 610, 610, 610, 610, 6100] },
    { type: "Lỗi", values: [148, 148, 148, 148, 148, 148, 148, 148, 148, 166, 1498] },
    { type: "Tổng", values: [758, 758, 758, 758, 758, 758, 758, 758, 758, 776, 7598] },
    { type: "Tấn", values: [20.0, 20.0, 20.0, 20.0, 20.0, 20.0, 20.0, 20.0, 20.0, 20.0, 200.0] },
    { type: "Năng suất trung bình (kg/buồng)", values: [32.8, 32.8, 32.8, 32.8, 32.8, 32.8, 32.8, 32.8, 32.8, 32.8, 32.8] },
  ];
  const detailData = [
    {
      timestamp: "2024-7-26 13:27:24",
      waitingStation: 1,
      farmNumber: 1,
      achieved: 749,
      error: 3055,
      weight: 25.6,
      totalWeight: 55359.4,
    },
    {
      timestamp: "2024-7-26 13:27:21",
      waitingStation: 1,
      farmNumber: 1,
      achieved: 749,
      error: 3054,
      weight: 20.0,
      totalWeight: 55333.8,
    },
    {
      timestamp: "2024-7-26 13:27:18",
      waitingStation: 1,
      farmNumber: 1,
      achieved: 749,
      error: 3053,
      weight: 22.0,
      totalWeight: 55280.0,
    },
    // Thêm nhiều dòng dữ liệu khác
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
              <span>Tìm kiếm</span>
              <i className="bx bx-search"></i>
            </button>
          </div>
          <button className="flex items-center gap-2 text-white bg-blue-400 rounded px-4 py-2 hover:bg-blue-600 transition h-[33px]">
            <span>Trích xuất</span>
            <i className="bx bxs-download"></i>
          </button>
        </div>

        <div>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-500">
                <th colSpan="12" className="border border-gray-300 p-2 text-center text-white">
                  BẢNG THỐNG KÊ SỐ LƯỢNG BUỒNG ĐẦU VÀO, KHỐI LƯỢNG BUỒNG VÀ NĂNG SUẤT - TỔNG 2 KHU TRẠM CHỜ
                </th>
              </tr>
              <tr className="text-black">
                <th className="border border-gray-300 p-2">Số nông trường</th>
                {[...Array(10).keys()].map((i) => (
                  <th key={i} className="border border-gray-300 p-2">
                    {i + 1}
                  </th>
                ))}
                <th className="border border-gray-300 p-2">Tổng</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center">
                  <td className="border border-gray-300 p-2 font-bold">{row.type}</td>
                  {row.values.map((value, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="shadow-sm rounded pb-2 ">
        <div className="p-2">
          <div className="flex justify-between items-center ">
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
              <Select defaultValue={selectedStation} style={{ width: 160, height: 33 }} onChange={handleChange} className="rounded">
                {[...Array(10).keys()].map((i) => (
                  <Option key={i + 1} value={`Nông trường ${i + 1}`}>
                    Nông trường {i + 1}
                  </Option>
                ))}
              </Select>
              <button className="flex items-center gap-2 text-white bg-blue-400 rounded px-4 py-2 hover:bg-blue-600 transition h-[33px]">
                <span>Tìm kiếm</span>
                <i className="bx bx-search"></i>
              </button>
            </div>
            <button className="flex items-center gap-2 text-white bg-blue-400 rounded px-4 py-2 hover:bg-blue-600 transition h-[33px]">
              <span>Trích xuất</span>
              <i className="bx bxs-download"></i>
            </button>
          </div>
        </div>

        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th colSpan="12" className="border border-gray-300 p-2 text-center text-white bg-green-500">
                BẢNG THÔNG KÊ SỐ LƯỢNG BUỒNG ĐẦU VÀO, KHỐI LƯỢNG BUỒNG Ở TRẠM CHỜ 1 - NÔNG TRƯỜNG 1
              </th>
            </tr>
            <tr className=" text-black">
              <th className="border border-gray-300 p-2">Thời gian</th>
              <th className="border border-gray-300 p-2">Trạm chờ</th>
              <th className="border border-gray-300 p-2">Nông trường</th>
              <th className="border border-gray-300 p-2">Buồng đạt (SL)</th>
              <th className="border border-gray-300 p-2">Buồng lỗi (SL)</th>
              <th className="border border-gray-300 p-2">Khối lượng buồng (KG)</th>
              <th className="border border-gray-300 p-2">Tổng khối lượng buồng (KG)</th>
            </tr>
          </thead>
          <tbody>
            {detailData.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{row.timestamp}</td>
                <td className="border border-gray-300 p-2">{row.waitingStation}</td>
                <td className="border border-gray-300 p-2">{row.farmNumber}</td>
                <td className="border border-gray-300 p-2">{row.achieved}</td>
                <td className="border border-gray-300 p-2">{row.error}</td>
                <td className="border border-gray-300 p-2">{row.weight}</td>
                <td className="border border-gray-300 p-2">{row.totalWeight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataWaitingArea;
