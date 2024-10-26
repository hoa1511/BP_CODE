// src/components/ColdStorageOverview.js
import React from 'react';
import ColdStorageCard from './ColdStorageCard';
import ColdStorageLayout from './ColdStorageLayout';

const ColdStorageOverview = () => {
  // Dữ liệu mẫu cho phần Quản lý kho lạnh
  const storageData = [
    { title: 'Tổng số lượng thùng', total: 3000, items: [], backgroundColor: 'bg-teal-100' },
    {
      title: 'Thùng chuỗi Nhật Bản 🇯🇵',
      total: 1200,
      items: [
        { name: '28CP (13kg)', value: '200' },
        { name: '30CP', value: '200' },
        { name: '26CP', value: '200' },
        { name: '35CP', value: '200' },
      ],
      backgroundColor: 'bg-orange-100',
    },
    {
      title: 'Thùng chuỗi Trung Quốc 🇨🇳',
      total: 1800,
      items: [
        { name: 'A456', value: '300' },
        { name: 'A789', value: '300' },
        { name: 'B456', value: '300' },
        { name: 'B789', value: '300' },
      ],
      backgroundColor: 'bg-green-100',
    },
  ];

  // Dữ liệu mẫu cho phần Quản lý layout
  const layoutData = [
    {
      title: 'Khu A',
      rows: [
        { floor: '4', columns: [{ label: '6T-A456-54', color: 'bg-yellow-200' }, { label: '6T-A789-54', color: 'bg-yellow-200' }] },
        { floor: '3', columns: [{ label: '7T-A456-63', color: 'bg-green-200' }, { label: '7T-A789-63', color: 'bg-green-200' }] },
        { floor: '2', columns: [{ label: '7T-A789-63', color: 'bg-green-200' }, { label: '', color: '' }, { label: '7T-30CP-54', color: 'bg-orange-200' }] },
      ],
    },
    {
      title: 'Khu B',
      rows: [
        { floor: '4', columns: [{ label: '7T-A456-63', color: 'bg-green-200' }, { label: '6T-30CP-54', color: 'bg-orange-200' }] },
        { floor: '3', columns: [{ label: '6T-A789-63', color: 'bg-yellow-200' }] },
        { floor: '2', columns: [{ label: '7T-A456-63', color: 'bg-green-200' }, { label: '7T-A789-63', color: 'bg-green-200' }] },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {storageData.map((data, index) => (
          <ColdStorageCard key={index} {...data} />
        ))}
      </div>
      <div className="mb-8">
        <h4 className="bg-teal-500 text-white rounded-t-md text-center py-2 font-bold">Quản lý layout</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {layoutData.map((layout, index) => (
            <ColdStorageLayout key={index} {...layout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColdStorageOverview;
