// src/components/ColdStorage.js
import React from "react";
import ColdStorageCard from "../../components/ColdStorageCard";

const ColdStorage = () => {
  // Dữ liệu cho Khu A
  const khuAData = [
    {
      floor: "04",
      columns: [
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
      ],
    },
    {
      floor: "04",
      columns: [
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
      ],
    },
    {
      floor: "03",
      columns: [
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "6T-A789-54", color: "bg-green-200" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
      ],
    },
    {
      floor: "02",
      columns: [
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
      ],
    },
    {
      floor: "01",
      columns: [
        { label: "7T-A456-63", color: "bg-green-200" },
        { label: "7T-A789-63", color: "bg-green-200" },
        { label: "7T-A789-63", color: "bg-green-200" },
        { label: "", color: "bg-gray-800" },
        { label: "", color: "bg-gray-300" },
        { label: "", color: "bg-gray-300" },
      ],
    },
  ];
  const totalBoxData = 3000;
  const japanChainData = [
    { name: "Tổng", value: "1200", color: "bg-green-200" },
    { name: "28CP (13kg)", value: "200", color: "bg-gray-100" },
    { name: "30CP", value: "200", color: "bg-gray-100" },
    { name: "26CP", value: "200", color: "bg-gray-100" },
    { name: "28CP (18kg)", value: "200", color: "bg-gray-100" },
    { name: "35CP", value: "200", color: "bg-gray-100" },
    { name: "40CP", value: "200", color: "bg-gray-100" },
  ];

  const chinaChainData = [
    { name: "Tổng", value: "1800", color: "bg-green-200" },
    { name: "A456", value: "300", color: "bg-gray-100" },
    { name: "A789", value: "300", color: "bg-gray-100" },
    { name: "B456", value: "300", color: "bg-gray-100" },
    { name: "B789", value: "300", color: "bg-gray-100" },
    { name: "CL", value: "300", color: "bg-gray-100" },
    { name: "CP", value: "300", color: "bg-gray-100" },
  ];
  return (
    <div className="h-[780px]">
      <div className="bg-white shadow-md rounded-sm mb-2 p-2">
        <div className="bg-cyan-500 rounded-t-md p-1">
          <h4 className="text-center font-bold">Quản lý kho</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <div className=" p-2 rounded-lg shadow-md flex flex-col items-center ">
            <h5 className="bg-green-500 p-2 text-white w-full text-center py-1 rounded-t font-bold">Tồng số lượng thùng</h5>
            <div className="flex items-center justify-center text-xl font-bold py-6">3000</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-2">
            <h5 className="bg-orange-500 text-white w-full text-center py-1 rounded-t-md font-bold items-center justify-center">Thùng chuối Nhật Bản</h5>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {japanChainData.map((item, index) => (
                <div key={index} className={`p-2 rounded-md ${item.color} text-center`}>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-lg">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-2">
            <h5 className="bg-green-500 text-white w-full text-center py-1 rounded-t-md font-bold items-center justify-center">Thùng chuối Trung Quốc</h5>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {chinaChainData.map((item, index) => (
                <div key={index} className={`p-2 rounded-md ${item.color} text-center`}>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-lg">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-sm mb-2 p-4">
      <div className="bg-cyan-500 rounded-t-md p-1">
          <h4 className="text-center font-bold">Quản lý Layout</h4>
        </div>
      <div className="p-4 flex gap-2 items-center justify-center ">
        <div className="w-[750px] ">
          <h4 className="bg-green-500 text-white rounded-t-md text-center py-1 font-bold">Khu A</h4>
          <table className="min-w-full border border-gray-300 mt-2 bg-white">
            <tbody className="bg-white">
              {khuAData.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center">
                  <td className="border border-gray-300 font-bold py-1 bg-gray-100">{row.floor}</td>
                  {row.columns.map((column, colIndex) => (
                    <td key={colIndex} className={`border border-gray-300 font-bold px-2 py-1 bg-gray-100 {}`}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <table className="min-w-full border border-gray-300 mt-4 bg-white">
            <tbody className="bg-white">
              {khuAData.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center">
                  <td className="border border-gray-300 font-bold  py-1 bg-gray-100">{row.floor}</td>
                  {row.columns.map((column, colIndex) => (
                    <td key={colIndex} className={`border border-gray-300 font-bold px-2 py-1 bg-gray-100 {}`}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-[750px]">
          <h4 className="bg-green-500 text-white rounded-t-md text-center py-1 font-bold">Khu B</h4>
          <table className="min-w-full border border-gray-300 mt-2 bg-white">
            <tbody className="bg-white">
              {khuAData.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center">
                  <td className="border border-gray-300 font-bold py-1 bg-gray-100">{row.floor}</td>
                  {row.columns.map((column, colIndex) => (
                    <td key={colIndex} className={`border border-gray-300 font-bold px-2 py-1 bg-gray-100 {}`}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <table className="min-w-full border border-gray-300 mt-4 bg-white">
            <tbody className="bg-white">
              {khuAData.map((row, rowIndex) => (
                <tr key={rowIndex} className="text-center">
                  <td className="border border-gray-300 font-bold py-1 bg-gray-100">{row.floor}</td>
                  {row.columns.map((column, colIndex) => (
                    <td key={colIndex} className={`border border-gray-300 font-bold px-2 py-1 bg-gray-100 {}`}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ColdStorage;
