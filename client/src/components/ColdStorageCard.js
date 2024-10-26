// src/components/ColdStorageCard.js
// src/components/ColdStorageZone.js
import React from 'react';

const ColdStorageCard = ({ zoneName, rows }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h4 className="bg-green-500 text-white rounded-t-md text-center py-2 font-bold">{zoneName}</h4>
      <table className="min-w-full border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-2 py-1 text-center">Tầng</th>
            {[1, 2, 3, 4, 5, 6].map((col) => (
              <th key={col} className="border border-gray-300 px-2 py-1 text-center">{`0${col}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center">
              <td className="border border-gray-300 font-bold px-2 py-1 bg-gray-100">{`Tầng ${row.floor}`}</td>
              {row.columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`border border-gray-300 p-2 ${column.color}`}
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="text-xs">{column.label}</span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColdStorageCard;

