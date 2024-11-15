const StorageData = require('../models').StorageData;
const db = require('../connection_database');

// Lấy dữ liệu kho với phân trang và điều kiện lọc
const getStorageData = async (req, res) => {
  try {
    // Chuyển đổi page và pageSize sang số nguyên với kiểm tra tính hợp lệ
    const page = Number.isInteger(parseInt(req.query.page)) ? parseInt(req.query.page, 10) : 1;
    const pageSize = Number.isInteger(parseInt(req.query.pageSize)) ? parseInt(req.query.pageSize, 10) : 10;
    const { maPallet, nuocXuatKhau, tinhTrang } = req.query;

    // Khởi tạo điều kiện lọc
    const whereClause = {
      ...(maPallet && { maPallet }),
      ...(nuocXuatKhau && { nuocXuatKhau }),
      ...(tinhTrang && { tinhTrang })
    };

    // Phân trang dữ liệu
    const offset = (page - 1) * pageSize;
    const result = await StorageData.findAndCountAll({
      where: whereClause,
      limit: pageSize,
      offset: offset,
    });

    res.json({
      data: result.rows,
      totalPages: Math.ceil(result.count / pageSize),
      currentPage: page,
    });
  } catch (error) {
    console.error('Error fetching storage data:', error);
    res.status(500).json({ message: 'Error fetching storage data' });
  }
};

// Hàm phụ trợ để tính toán tổng theo loại hàng hóa
const calculateStockCount = async (status) => {
  const [result] = await db.query(
    `SELECT loai, SUM(soThung) AS total FROM storagedatas WHERE tinhTrang = ? GROUP BY loai`, 
    { replacements: [status] }
  );
  return result;
};

// Lấy dữ liệu biểu đồ
const getChartData = async (req, res) => {
  try {
    // Tổng số lượng nhập kho
    const [totalImportedResult] = await db.query(
      "SELECT SUM(soThung) AS totalImported FROM storagedatas WHERE tinhTrang = 'Trong kho'"
    );
    const totalImported = totalImportedResult[0]?.totalImported || 0;

    // Tổng số lượng xuất kho
    const [totalExportedResult] = await db.query(
      "SELECT SUM(soThung) AS totalExported FROM storagedatas WHERE tinhTrang = 'Đã xuất'"
    );
    const totalExported = totalExportedResult[0]?.totalExported || 0;

    // Tính tổng số lượng theo loại hàng hóa
    const stockCountExported = await calculateStockCount('Đã xuất');
    const stockCountInStorage = await calculateStockCount('Trong kho');

    res.json({
      totalImported,
      totalExported,
      stockCountExported,
      stockCountInStorage,
    });
  } catch (error) {
    console.error('Error fetching chart data:', error);
    res.status(500).json({ message: 'Error fetching chart data' });
  }
};

module.exports = {
  getStorageData,
  getChartData
};
