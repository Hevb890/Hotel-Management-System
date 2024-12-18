import React from 'react'
import { useState } from 'react'

export default function MonthSelectionNavbar({selectedMonthIndex, handleSelect, months}) {

  return (
    <div className='grid grid-cols-11 gap-x-6 bg-white p-2.5 rounded-lg'>
        {months.map((month, index) => (
        <div
          key={month}
          onClick={() => handleSelect(index)}  
          className={`w-3/4 text-center p-2.5 rounded-full cursor-pointer 
            ${
              selectedMonthIndex === index
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-100 hover:text-black text-gray-500' 
            }`}
        >
          {month}
        </div>
      ))}
        </div>
  )
}
