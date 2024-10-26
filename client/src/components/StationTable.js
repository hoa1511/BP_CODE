import React from 'react'

const StationTable = ({title, headers, data}) => {
  return (
    <div className='mb-7'>
      <h4 className='bg-green-500 text-white rounded-t-md text-center py-2 font-bold'>{title}</h4>
      <div>
        <table className='min-w-full border border-gray-300'> 
        <thead >
        <tr>
          <th className='border border-gray-300 px-2 py-1'>Số nông trường</th>
          {headers.map((header, index) => (
            <th key={index} className="border border-gray-300 px-2 py-1">{header}</th>
          ))}
          <th className='border border-gray-300 px-2 py-1'>Tổng</th>
        </tr>
        </thead>
        <tbody>
         {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='text-center'>
            <td className='border border-gray-300 font-bold px-2 py-1 '>{row.label}</td>
            {row.values.map((value, colIndex) => (
              <td key={colIndex} className='border border-gray-300 px-2 py-1'>{value}</td>
            ))}
            <td className='border border-gray-300 px-2 py-1 font-bold'>{row.total}</td>
          </tr>
         ))}
        </tbody>

        </table>
      </div>
    </div>
  )
}

export default StationTable
