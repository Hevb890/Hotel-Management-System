import React, { useState, useEffect } from 'react'

export default function DataTable({ searchQuery, month }) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:5000/user/')
            const data = await response.json()
            setRows(data)
        }
        fetchData()
    }, [])

    // Filter the rows based on the search query and selected month
    const filteredRows = rows.filter(row => {
        // Check if the guest name includes the search query
        const matchesSearchQuery = row.guest_name.toLowerCase().includes(searchQuery.toLowerCase())

        // Check if the arrival date's month matches the selected month
        const rowMonth = new Date(row.arrival_date).toLocaleString('default', { month: 'short' }).toUpperCase()
        const matchesMonth = month ? rowMonth === month : true

        return matchesSearchQuery && matchesMonth
    })

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Guest Name</th>
                        <th scope="col" className="px-6 py-3">Arrival Date</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Weekend Nights</th>
                        <th scope="col" className="px-6 py-3">Weekday Nights</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Adult Count</th>
                        <th scope="col" className="px-6 py-3">Child Count</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Baby Count</th>
                        <th scope="col" className="px-6 py-3">Country</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Market Segment</th>
                        <th scope="col" className="px-6 py-3">Distribution Channel</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Repeated Guest</th>
                        <th scope="col" className="px-6 py-3">Room Type</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Deposit Type</th>
                        <th scope="col" className="px-6 py-3">ADR</th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Cancelled</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRows.map((row, index) => (
                        <tr key={index}>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.guest_name}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.arrival_date}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.weekend_nights}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.weekdays_nights}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.adult_count}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.child_count}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.baby_count}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.country}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.market_segment}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.distribution_channel}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.repeated_guest ? 'Yes' : 'No'}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.room_type}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.deposit_type}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.adr}</td>
                            <td className="px-6 py-3 text-black font-weight-medium">{row.cancelled ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
