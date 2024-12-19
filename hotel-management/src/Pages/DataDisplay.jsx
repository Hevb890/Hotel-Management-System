import React, { useState } from 'react'
import DataTable from '../Components/DataTable'
import ReservationManagementNavBar from '../Components/ReservationManagementNavBar'

export default function DataDisplay() {
    const [searchQuery, setSearchQuery] = useState('')
    const [month, setMonth] = useState('')

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }

    return (
        <div className='mx-3'>
            <ReservationManagementNavBar />
            <div className='grid gap-2 mb-6 md:grid-cols-3 mx-4'>
                <div className='flex'>
                    <label htmlFor="month" className="text-sm font-medium text-black py-3 px-2">Months: </label>
                    <select
                        id="month"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"
                        value={month}
                        onChange={handleMonthChange}
                    >
                        <option value="">All Months</option>
                        <option value="JAN">January</option>
                        <option value="FEB">February</option>
                        <option value="MAR">March</option>
                        <option value="APR">April</option>
                        <option value="MAY">May</option>
                        <option value="JUN">June</option>
                        <option value="JUL">July</option>
                        <option value="AUG">August</option>
                        <option value="SEP">September</option>
                        <option value="OCT">October</option>
                        <option value="NOV">November</option>
                        <option value="DEC">December</option>
                    </select>
                </div>
                <div className='flex'>
                    <label htmlFor="search" className="text-sm font-medium text-black py-3 px-2">Search</label>
                    <input
                        type="text"
                        id="search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"
                        placeholder='Search Guest Name ...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <DataTable searchQuery={searchQuery} month={month} />
        </div>
    )
}
