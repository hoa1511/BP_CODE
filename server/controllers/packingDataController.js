const packingDataService = require("../services/packingDataService");

const getPackingData = async (req, res) => {
  try {
    const { date, station } = req.query;
      // Chuyển đổi date thành định dạng YYYY-MM-DD nếu có giá trị
      const formattedDate = date ? new Date(date).toISOString().split('T')[0] : null;
    const data = await packingDataService.getPackingData({ formattedDate, station });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy dữ liệu", error: error.message });
  }
};

const addPackingData = async (req, res) => {
  try {
    const newData = await packingDataService.addPackingData(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm dữ liệu", error: error.message });
  }
};

module.exports = {
  getPackingData,
  addPackingData,
};
