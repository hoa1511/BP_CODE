import React from 'react'

const TitleHeader = ({title}) => {
  return (
    <div className='bg-white shadow-md py-2 px-3 flex justify-start items-center'>
      <h4 className='block font-semibold text-[0.925rem] uppercase text-[#495057]'>{title}</h4>
    </div>
  )
}

export default TitleHeader
