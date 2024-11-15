import React, { useState, useEffect } from "react";
import { DatePicker, Select, Button , Tabs} from "antd";
import { Bar } from 'react-chartjs-2';
import { fetchPackingData } from "../../services/packingService";
import { useNavigate, useLocation} from "react-router-dom"
import 'chart.js/auto';
const { Option } = Select;

const PackingPlanning = () => {
  const [tableData, setTableData] = useState({
    date: null,
    headers: Array.from({ length: 10 }, (_, i) => `Chuyền ${i + 1}`),
    rows: {
      keHoach: [],
      dat: [],
      loi: [],
      tong: [],
      chenhLech: [],
      hieuSuat: []
    }
  });
  const [chartData, setChartData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const handleTabChange = (key) => {
    if (key === "1") {
      navigate("/data-packing-area")
    } else if (key === "2") {
      navigate("/data-waiting-area/planning")
    }
  }
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
  const activeKey = location.pathname === "/data-packing-area" ? "1" : "2";
  const fetchData = async () => {
    try {
      const data = await fetchPackingData(selectedDate, selectedStation);
      
      setTableData({
        date: selectedDate ? selectedDate.format("YYYY-MM-DD") : "Chưa chọn ngày",
        headers: Array.from({ length: 10 }, (_, i) => `Chuyền ${i + 1}`),
        rows: {
          keHoach: data.map(row => row.keHoach),
          dat: data.map(row => row.dat),
          loi: data.map(row => row.loi),
          tong: data.map(row => row.tong),
          chenhLech: data.map(row => row.chenhLech),
          hieuSuat: data.map(row => row.hieuSuat)
        }
      });

      if (data.length > 0) {
        setChartData({
          labels: data.map(row => row.chuyen),
          datasets: [
            {
              label: 'Kế hoạch (SL)',
              data: data.map(row => row.keHoach),
              backgroundColor: '#22c55e',
            },
            {
              label: 'Thùng đạt chuẩn (SL)',
              data: data.map(row => row.dat),
              backgroundColor: '#3b82f6',
            },
            {
              label: 'Thùng lỗi (SL)',
              data: data.map(row => row.loi),
              backgroundColor: '#ef4444',
            }
          ]
        });
      }

    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  useEffect(() => {
    if (selectedDate && selectedStation) {
      fetchData();
    }
  }, [selectedDate, selectedStation]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStationChange = (value) => {
    setSelectedStation(value);
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Biểu đồ số lượng thùng theo từng chuyền',
      },
    },
  };

  return (
    <div className="h-[780px]">
      <div className="shadow-sm rounded mb-2 px-2">
      <div>
          <Tabs activeKey={activeKey} onChange={handleTabChange} items={tabItems} />
        </div>
        <div className="flex justify-between items-center p-1">
          <div className="flex gap-2">
          <DatePicker
            value={selectedDate}
            style={{ height: "33px" }}
            onChange={handleDateChange}
            placeholder="Chọn ngày"
          />
          <Select
            value={selectedStation}
            style={{ width: 160, height: 33 }}
            onChange={handleStationChange}
            placeholder="Chọn trạm chờ"
          >
            <Option value="Trạm chờ 1">Trạm chờ 1</Option>
            <Option value="Trạm chờ 2">Trạm chờ 2</Option>
            <Option value="Tổng hai trạm chờ">Tổng trạm chờ</Option>
          </Select>
          <Button onClick={fetchData} type="primary" className="flex items-center gap-2">
            Tìm kiếm
          </Button>
          </div>
        </div>

        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-500">
              <th colSpan="11" className="border border-gray-300 p-2 text-center ">
                BẢNG THỐNG KÊ SỐ LƯỢNG THÙNG THỰC TẾ VÀ KẾ HOẠCH THEO TỪNG CHUYỀN
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2">{tableData.date || "Chưa chọn ngày"}</th>
              {tableData.headers.map((header, index) => (
                <th key={index} className="border border-gray-300 p-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Kế hoạch", "Thùng đạt chuẩn", "Thùng lỗi", "Tổng thùng", "Chênh lệch", "Hiệu suất"].map((header, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 p-2 font-semibold bg-gray-100">{header}</td>
                {tableData.headers.map((_, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 p-2 text-center">
                    {header === "Kế hoạch" ? tableData.rows.keHoach[colIndex]
                      : header === "Thùng đạt chuẩn" ? tableData.rows.dat[colIndex]
                      : header === "Thùng lỗi" ? tableData.rows.loi[colIndex]
                      : header === "Tổng thùng" ? tableData.rows.tong[colIndex]
                      : header === "Chênh lệch" ? tableData.rows.chenhLech[colIndex]
                      : header === "Hiệu suất" ? tableData.rows.hieuSuat[colIndex]
                      : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col w-full mt-2">
          <h3 className="text-lg font-semibold text-center">Giám Sát Số Lượng Thùng Theo Từng Chuyền</h3>
          {chartData.datasets && chartData.datasets.length > 0 ? (
            <Bar data={chartData} options={chartOptions} height={180} width={800} />
          ) : (
            <p className="text-center">Chưa có dữ liệu để hiển thị biểu đồ.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackingPlanning;