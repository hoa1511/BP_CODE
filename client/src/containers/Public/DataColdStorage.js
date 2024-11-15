import React, { useState, useEffect } from "react";
import { Select, Button, DatePicker, Tabs } from "antd";
import { SearchOutlined, DownloadOutlined } from "@ant-design/icons";
import { Bar, Doughnut } from "react-chartjs-2";
import { fetchStorageData, fetchChartData } from "../../services/storageService";
import moment from "moment";
const { Option } = Select;

const DataColdStorage = () => {
  const [fullTableData, setFullTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    maPallet: "",
    nuocXuatKhau: "",
    tinhTrang: "",
  });
  const [chartData, setChartData] = useState(null);
  const [doughnutData, setDoughnutData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); //date
  const [inStorageDoughnutData, setInStorageDoughnutData] = useState(null);
  const [exportedDoughnutData, setExportedDoughnutData] = useState(null); //State cho dữ liệu xuất kho
  //Date
  const handleDateChange = (date) => {
    // Kiểm tra nếu date không null thì chuyển đổi sang đối tượng Date, nếu không thì set null
    setSelectedDate(date ? date.toDate() : null);
  };
  const loadData = async () => {
    try {
      const data = await fetchStorageData(currentPage, pageSize, filters);
      if (data && data.data) {
        setFullTableData(data.data);
        setTotalPages(data.totalPages);
      } else {
        console.error("Invalid response format:", data);
      }

      const chartData = await fetchChartData();
      if (chartData) {
        setChartData({
          labels: ["Nhập kho", "Xuất kho"],
          datasets: [
            {
              label: "Số lượng thùng",
              data: [chartData.totalImported, chartData.totalExported],
              backgroundColor: ["#4caf50", "#2196f3"],
            },
          ],
        });

        // Dữ liệu tồn kho theo loại
        if (chartData.stockCountInStorage) {
          setInStorageDoughnutData({
            labels: chartData.stockCountInStorage.map((item) => item.loai),
            datasets: [
              {
                label: "Tồn kho theo loại",
                data: chartData.stockCountInStorage.map((item) => item.total),
                backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
              },
            ],
          });
        }

        // Dữ liệu xuất kho theo loại
        if (chartData.stockCountExported) {
          setExportedDoughnutData({
            labels: chartData.stockCountExported.map((item) => item.loai),
            datasets: [
              {
                label: "Xuất kho theo loại",
                data: chartData.stockCountExported.map((item) => item.total),
                backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
              },
            ],
          });
        }
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  

  useEffect(() => {
    loadData();
  }, [currentPage, pageSize]);

  const handleFilterChange = (value, field) => {
    setFilters({ ...filters, [field]: value });
  };

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 h-[780px]">
      <div className="flex gap-2 mb-4">
        <Select placeholder="Mã Pallet" style={{ width: 150 }} onChange={(value) => handleFilterChange(value, "maPallet")}>
          <Option value="6T">6T</Option>
          <Option value="7T">7T</Option>
        </Select>
        <Select placeholder="Nước xuất khẩu" style={{ width: 150 }} onChange={(value) => handleFilterChange(value, "nuocXuatKhau")}>
          <Option value="Nhật Bản">Nhật Bản</Option>
          <Option value="Trung Quốc">Trung Quốc</Option>
        </Select>
        <Select placeholder="Tình trạng" style={{ width: 150 }} onChange={(value) => handleFilterChange(value, "tinhTrang")}>
          <Option value="Đã xuất">Đã xuất</Option>
          <Option value="Trong kho">Trong kho</Option>
        </Select>
        <Button type="primary" icon={<SearchOutlined />} onClick={loadData}>
          Tìm kiếm
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} style={{ backgroundColor: "#3b82f6" }}>
          Trích xuất
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-500">
              <th colSpan="10" className="border border-gray-300 p-2 text-center text-white bg-green-500">
                BẢNG DỮ LIỆU LƯU KHO
              </th>
            </tr>
            <tr>
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
            {fullTableData.length > 0 ? (
              fullTableData.map((row, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2">{index + 1 + (currentPage - 1) * pageSize}</td>
                  <td className="border border-gray-300 p-2">{row.maPallet}</td>
                  <td className="border border-gray-300 p-2">{row.viTriLuu}</td>
                  <td className="border border-gray-300 p-2">{row.soThung}</td>
                  <td className="border border-gray-300 p-2">{row.loai}</td>
                  <td className="border border-gray-300 p-2">{row.nuocXuatKhau}</td>
                  <td className="border border-gray-300 p-2">{row.tinhTrang}</td>
                  <td className="border border-gray-300 p-2">{new Date(row.ngayNhap).toLocaleDateString()}</td>
                  <td className="border border-gray-300 p-2">{row.ngayXuat ? new Date(row.ngayXuat).toLocaleDateString() : "N/A"}</td>
                  <td className="border border-gray-300 p-2">{row.thoiGianLuuKho}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="border border-gray-300 p-2">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}

      <div className="flex justify-end items-center mt-2 space-x-2">
        <Button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} style={{ minWidth: "30px", height: "25px", width: 30 }}>
          {"<"}
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button key={i + 1} type={currentPage === i + 1 ? "primary" : "default"} onClick={() => goToPage(i + 1)} style={{ minWidth: 30, width: 30, height: 25 }}>
            {i + 1}
          </Button>
        ))}
        <Button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} style={{ minWidth: "30px", height: "25px", width: 30 }}>
          {">"}{" "}
        </Button>
        <Select defaultValue={pageSize} onChange={(value) => setPageSize(value)} style={{ width: 100, height: 25 }}>
          <Option value={6}>6 / page</Option>
          <Option value={8}>8 / page</Option>
          <Option value={10}>10 / page</Option>
        </Select>
      </div>
      <div>
        <div className="flex items-center gap-2">
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
          <Button type="primary" icon={<SearchOutlined />} onClick={loadData}>
            Tìm kiếm
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div style={{ maxWidth: "300px", margin: "0 auto" }}>
            <h3 className="text-center" style={{ fontSize: "10px" }}>
              Thống kê tổng nhập kho và xuất kho
            </h3>
            {chartData && <Bar data={chartData} width={250} height={300} />}
          </div>
          <div style={{ maxWidth: "300px", margin: "0 auto" }}>
            <h3 className="text-center" style={{ fontSize: "10px" }}>
              Thống kê xuất kho
            </h3>
            {inStorageDoughnutData && <Doughnut data={inStorageDoughnutData} width={250} height={300} />}
          </div>
          <div style={{ maxWidth: "300px", margin: "0 auto" }}>
            <h3 className="text-center" style={{ fontSize: "10px" }}>
              Thống kê tồn kho
            </h3>
            {exportedDoughnutData && <Doughnut data={exportedDoughnutData} width={250} height={300}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataColdStorage;
