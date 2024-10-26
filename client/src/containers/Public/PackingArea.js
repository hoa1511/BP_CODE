// src/components/PackingArea.js
import React from 'react';
import PackingCard from '../../components/PackingCard';
import { Button } from 'antd'
const PackingArea = () => {
  const data = [
    { title: 'Chuyền 1 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '89.68' },
    { title: 'Chuyền 2 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '96.92' },
    { title: 'Chuyền 3 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '88.65' },
    { title: 'Chuyền 4 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '88.65' },
    { title: 'Chuyền 5 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '89.68' },
    { title: 'Chuyền 6 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '88.65' },
    { title: 'Chuyền 7 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '96.92' },
    { title: 'Chuyền 8 (ĐV thùng)', plan: 475, actual: 426, passed: 420, failed: 6, difference: 49, efficiency: '96.92' },
    { title: 'Chuyền 9 (ĐV thùng)', plan: 130, actual: 126, passed: 120, failed: 6, difference: 4, efficiency: '96.92' },
    { title: 'Chuyền 10 (ĐV thùng)', plan: 130, actual: 126, passed: 120, failed: 6, difference: 4, efficiency: '96.92' },
  ];

  return (
    <div className='h-[780px]'>
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-4">
      {data.map((item, index) => (
        <PackingCard key={index} {...item} />
      ))}
    </div>
    </div>
  );
};

export default PackingArea;
