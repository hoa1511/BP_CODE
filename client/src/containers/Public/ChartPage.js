import React, { useState, useEffect } from "react";
import { DatePicker, Select, Tabs } from "antd";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);
const { Option } = Select;

const ChartPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeTab, setActiveTab] = useState("2");
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
      navigate("/chart");
    }
  };

  const activeKey = location.pathname === "/data-waiting-area/chart" ? "2" : "1";

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
  const dataVolume = {
    labels: Array.from({ length: 30 }, (_, i) => moment().subtract(i, "days").format("DD MMM, YY")).reverse(),
    datasets: [
      {
        label: "Buồng đầu vào",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 2000),
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        fill: false,
      },
      {
        label: "Buồng lỗi",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500) + 500),
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        fill: false,
      },
      {
        label: "Buồng đạt",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 1500),
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        fill: false,
      },
    ],
  };

  const dataWeight = {
    labels: Array.from({ length: 30 }, (_, i) => moment().subtract(i, "days").format("DD MMM, YY")).reverse(),
    datasets: [
      {
        label: "Khối lượng (tấn)",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 80),
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        fill: false,
      },
    ],
  };
  // Kiểm tra đường dẫn hiện tại và cập nhật tab tương ứng
  useEffect(() => {
    if (location.pathname === "/data-waiting-area/chart") {
      setActiveTab("2");
    } else if (location.pathname === "/data-waiting-area") {
      setActiveTab("1");
    }
  }, [location.pathname]);
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Cho phép thay đổi kích thước theo `div` chứa
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className="shadow-sm rounded mb-2 px-2 h-[780px]">
      <div>
        <Tabs activeKey={activeKey} onChange={handleTabChange} items={tabItems} />
      </div>
      <div className="flex justify-between items-center p-1">
        <div className="flex gap-2">
          <Select defaultValue={selectedStation} style={{ width: 160, height: 33 }} onChange={handleChange} className="rounded">
            <Option value="Trạm chờ 1">Trạm chờ 1</Option>
            <Option value="Trạm chờ 2">Trạm chờ 2</Option>
            <Option value="Tổng hai trạm chờ">Tổng hai trạm chờ</Option>
          </Select>
          <DatePicker
            value={selectedDate ? moment(selectedDate) : null}
            style={{
              height: "33px",
              width: "162px",
            }}
            onChange={handleDateChange}
            placeholder="Chọn ngày bắt đầu" // Đặt văn bản mặc định
            customInput={
              <button className="flex items-center gap-2 border border-blue-400 text-blue-500 px-4 py-2 rounded h-8">
                <i className="bx bx-calendar"></i>
                <span>{selectedDate ? selectedDate.toLocaleDateString() : "Chọn ngày bắt đầu"}</span>
              </button>
            }
          />
          <DatePicker
            value={selectedDate ? moment(selectedDate) : null}
            style={{
              height: "33px",
              width: "165px",
            }}
            onChange={handleDateChange}
            placeholder="Chọn ngày kết thúc" // Đặt văn bản mặc định
            customInput={
              <button className="flex items-center gap-2 border border-blue-400 text-blue-500 px-4 py-2 rounded h-8">
                <i className="bx bx-calendar"></i>
                <span>{selectedDate ? selectedDate.toLocaleDateString() : "Chọn ngày bắt đầu"}</span>
              </button>
            }
          />

          <button className="flex items-center gap-2 text-white bg-blue-400 rounded px-4 py-2 hover:bg-blue-600 transition h-[33px]">
            <span>Tìm kiếm</span>
            <i className="bx bx-search"></i>
          </button>
        </div>
      </div>
        <div className="flex flex-col w-full h-[290px] mb-8">
          <h3 className="text-lg font-semibold mb-2 text-center">Thống kê số lượng buồng theo tổng nông trường</h3>
          <Line data={dataVolume} options={options} />
        </div>
      {/* Biểu đồ 2: Thống kê khối lượng buồng */}
      <div className="flex flex-col w-full h-[290px] mt-8">
        <h3 className="text-lg font-semibold mb-2 text-center">Thống kê khối lượng buồng theo tổng nông trường</h3>
        <Line data={dataWeight} options={options} />
      </div>
    </div>
  );
};

export default ChartPage;
