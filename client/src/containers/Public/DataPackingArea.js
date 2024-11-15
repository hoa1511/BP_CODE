import React, { useState } from "react";
import { DatePicker, Select, Tabs } from "antd";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/DataPackingArea.css";
const { Option } = Select;
const DataPackingArea = () => {
  const rowsData = [
    { chuyền: 1, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 2, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 3, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 4, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 5, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 6, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 7, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 8, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 9, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
    { chuyền: 10, đạt: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], lỗi: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], tổng: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20] },
  ];


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

        {/* Cố định chiều cao bảng ở 780px, cuộn dọc cho tbody */}
        <div className="table-container custom-scroll">
          <table className="w-full text-center border-collapse whitespace-nowrap">
            <thead className="sticky top-0  z-10">
              <tr>
                <th colSpan="2" className="border border-gray-300 bg ">
                  Loại thùng
                </th>
                <th colSpan="4" className="border border-gray-300 bg-blue-500 text-white ">
                  Thùng 18kg
                </th>
                <th colSpan="8" className="border border-gray-300 bg-green-500 text-white ">
                  Thùng 13kg
                </th>
                <th rowSpan="3" className="border border-gray-300 ">
                  Tổng
                </th>
              </tr>
              <tr>
                <th colSpan="2" className="border border-gray-300 ">
                  Nước xuất khẩu
                </th>
                <th colSpan="5" className="border border-gray-300 bg-yellow-500 text-white ">
                  Nhật Bản
                </th>
                <th colSpan="7" className="border border-gray-300 bg-green-400 text-white ">
                  Trung Quốc
                </th>
              </tr>
              <tr>
                <th colSpan="2" className="border border-gray-300 ">
                  Phẩm cấp
                </th>
                <th className="border border-gray-300 ">26CP</th>
                <th className="border border-gray-300 ">28CP</th>
                <th className="border border-gray-300 ">35CP</th>
                <th className="border border-gray-300 ">40CP</th>
                <th className="border border-gray-300 ">28CP</th>
                <th className="border border-gray-300 ">30CP</th>
                <th className="border border-gray-300 ">A456</th>
                <th className="border border-gray-300 ">A789</th>
                <th className="border border-gray-300 ">B456</th>
                <th className="border border-gray-300 ">B789</th>
                <th className="border border-gray-300 ">CL</th>
                <th className="border border-gray-300 ">CP</th>
              </tr>
            </thead>
            <tbody>
              {rowsData.map((row, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td rowSpan="3" className="border border-gray-300  ">
                      Chuyền {row.chuyền}
                    </td>
                    <td className="border border-gray-300 ">Đạt</td>
                    {row.đạt.map((value, i) => (
                      <td key={i} className="border border-gray-300 ">
                        {value}
                      </td>
                    ))}
                    <td className="border border-gray-300 ">{row.đạt.reduce((a, b) => a + b, 0)}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 ">Lỗi</td>
                    {row.lỗi.map((value, i) => (
                      <td key={i} className="border border-gray-300 ">
                        {value}
                      </td>
                    ))}
                    <td className="border border-gray-300 ">{row.lỗi.reduce((a, b) => a + b, 0)}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 ">Tổng</td>
                    {row.tổng.map((value, i) => (
                      <td key={i} className="border border-gray-300 ">
                        {value}
                      </td>
                    ))}
                    <td className="border border-gray-300 ">{row.tổng.reduce((a, b) => a + b, 0)}</td>
                  </tr>
                  
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataPackingArea;
