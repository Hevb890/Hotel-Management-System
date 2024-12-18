import React from 'react'
import { useState, useEffect } from 'react'

export default function VisitorCount({totalAdultCount, totalBabiesCount, totalChildrenCount, totalVisitorCount, comparisonList}) {
    // const [totalVisitorCount, setTotalVisitorCount] = useState(null)
    // const [totalAdultCount, setTotalAdultCount] = useState(null)
    // const [totalChildrenCount, setTotalChildrenCount] = useState(null)
    // const [totalBabiesCount, setTotalBabiesCount] = useState(null)
    // console.log('====================================');
    // console.log(monthNum);
    // console.log('====================================');
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const response = await fetch(`http://127.0.0.1:5000/dashboard?month=${monthNum}`, {
    //                         method: 'GET',
    //         });
    //         const data = await response.json();
    //         console.log(data)
    //         setTotalVisitorCount(data.total_visitor_count);
    //         setTotalAdultCount(data.total_adult_count);
    //         setTotalBabiesCount(data.total_babies_count);
    //         setTotalChildrenCount(data.total_children_count);
    //     }
    //     if (monthNum !== null) {
    //         fetchData();
    //       }
    //     }, [monthNum]);

  return (
    <div className='flex p-2.5 bg-gray-300 m-4 rounded-lg'>
        <div className='bg-white pr-32 rounded-lg p-2.5 mr-16'>
            <p className='font-bold text-gray-600'>Total Expected Visitors</p>
            <p className='font-bold text-blue-400'>{totalVisitorCount}</p>
        </div>
        <div className='bg-white pr-32 rounded-lg p-2.5 mr-10'>
            <p className='font-bold text-gray-600'>Total Expected Adults</p>
            <p className='font-bold text-blue-400'>{totalAdultCount}</p>
        </div>
        <div className='bg-white pr-32 rounded-lg p-2.5 mr-10'>
            <p className='font-bold text-gray-600'>Total Expected Children</p>
            <p className='font-bold text-blue-400'>{totalChildrenCount}</p>
        </div>
        <div className='bg-white pr-32 rounded-lg p-2.5'>
            <p className='font-bold text-gray-600'>Total Expected Babies</p>
            <p className='font-bold text-blue-400'>{totalBabiesCount}</p>
        </div>
    </div>
  )
}
