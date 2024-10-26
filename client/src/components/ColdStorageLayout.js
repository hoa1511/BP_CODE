// src/components/ColdStorageLayout.js
import React from 'react';

const ColdStorageLayout = ({ title, rows }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h4 className="bg-green-500 text-white rounded-t-md text-center py-2 font-bold">{title}</h4>
      <div className="grid grid-cols-7 gap-1 mt-4">
        <div className="col-span-1 text-center font-bold">Tầng</div>
        {['01', '02', '03', '04', '05', '06'].map((col, index) => (
          <div key={index} className="text-center font-bold">{col}</div>
        ))}
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="text-center font-bold">{`Tầng ${row.floor}`}</div>
            {row.columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`border p-2 text-center ${column.color}`}
              >
                {column.label}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ColdStorageLayout;
