import React from 'react'

export default function ReservationManagementNavBar() {
  return (
    <div className='mt-4 grid gap-2 mb-6 md:grid-cols-3 bg-gray-200 h-16 border rounded-lg'>
      <div className='ml-4 font-black w-full text-xl pt-4'>
        <h1>Reservation Management</h1>
      </div>
      <div className='ml-10 w-full text-gray-500 pt-5'>
        <p>View and manage all hotel reservations</p>
      </div>
      <div className='ml-40 pt-3'>
        <button className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-4'>+ New Reservation</button>
        <button className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Export Data</button>
      </div>
    </div>
  )
}
