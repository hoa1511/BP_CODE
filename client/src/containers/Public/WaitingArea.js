import React from 'react'
import StationTable from '../../components/StationTable'
const WaitingArea = () => {
  const headers = Array.from({ length: 10 }, (_, i) => i + 1);

  // Sample data for each station
  const station1Data = [
    { label: 'Đạt', values: [305, 300, 350, 290, 280, 305, 300, 350, 290, 280], total: 3050 },
    { label: 'Lỗi', values: [74, 75, 80, 70, 71, 74, 75, 80, 70, 71], total: 739 },
    { label: 'Buồng đầu vào', values: [379, 375, 430, 360, 351, 379, 375, 430, 360, 351], total: 3789 },
    { label: 'Tấn', values: ['10.10', '10.00', '10.50', '9.80', '9.50', '10.10', '10.00', '10.50', '9.80', '9.50'], total: '100.00' },
    { label: 'Năng suất trung bình (kg/buồng)', values: ['33.11', '33.33', '30', '33.8', '33.9', '33.11', '33.33', '30', '33.8', '33.9'], total: '32.78' },
  ];

  const station2Data = [
    { label: 'Đạt', values: [305, 300, 350, 290, 280, 305, 300, 350, 290, 280], total: 3050 },
    { label: 'Lỗi', values: [74, 75, 80, 70, 71, 74, 75, 80, 70, 71], total: 739 },
    { label: 'Buồng đầu vào', values: [379, 375, 430, 360, 351, 379, 375, 430, 360, 351], total: 3789 },
    { label: 'Tấn', values: ['10.10', '10.00', '10.50', '9.80', '9.50', '10.10', '10.00', '10.50', '9.80', '9.50'], total: '100.00' },
    { label: 'Năng suất trung bình (kg/buồng)', values: ['33.11', '33.33', '30', '33.8', '33.9', '33.11', '33.33', '30', '33.8', '33.9'], total: '32.78' },
  ];

  const totalStationData = [
    { label: 'Đạt', values: [610, 600, 700, 580, 560, 610, 600, 700, 580, 560], total: 6100 },
    { label: 'Lỗi', values: [148, 150, 160, 140, 142, 148, 150, 160, 140, 142], total: 1478 },
    { label: 'Buồng đầu vào', values: [758, 750, 860, 720, 702, 758, 750, 860, 720, 702], total: 7578 },
    { label: 'Tấn', values: ['20.20', '20.00', '21.00', '19.6', '20.00', '20.20', '20.00', '21.00', '19.6', '20.00'], total: '200.00' },
    { label: 'Năng suất trung bình (kg/buồng)', values: ['33.11', '33.33', '30', '33.8', '33.9', '33.11', '33.33', '30', '33.8', '33.9'], total: '32.78' },
  ];

  return (
    <div className="p-4">
      <StationTable title="TRẠM CHỜ 1" headers={headers} data={station1Data} />
      <StationTable title="TRẠM CHỜ 2" headers={headers} data={station2Data} />
      <StationTable title="TỔNG 2 TRẠM CHỜ" headers={headers} data={totalStationData} />
    </div>
  );
};

export default WaitingArea
