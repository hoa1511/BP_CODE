import React from "react";

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
  return (
    <div>
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
                <td className="border border-gray-300 p-2 bg-gray-100">{header}</td>
                {tableData.rows.map((row, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 p-2">
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
    </div>
  );
};

export default PackingPlanning;
