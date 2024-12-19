import React from 'react'
import MonthSelectionNavbar from '../Components/MonthSelectionNavbar'
import VisitorCount from '../Components/VisitorCount'
import { useState, useEffect } from 'react';
import BarChart from '../Components/BarChart';
import LineChart from '../Components/LineChart';
import { useNavigate } from 'react-router-dom';



export default function DashBoard() {
    const navigate = useNavigate();
    const months = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);  // This holds the month index
    const [totalVisitorCount, setTotalVisitorCount] = useState(null)
    const [totalAdultCount, setTotalAdultCount] = useState(null)
    const [totalChildrenCount, setTotalChildrenCount] = useState(null)
    const [totalBabiesCount, setTotalBabiesCount] = useState(null)
    const [totalVisitorList, setTotalVisitorList] = useState([])
    const [comparisonList, setComparisonList] = useState([])
    let monthNum = selectedMonthIndex + 1;
    useEffect(()=>{
        const fetchData = async () => {
            const list_response = await fetch('http://127.0.0.1:5000/dashboard/linechart')
            const data_list_response = await list_response.json()
            const response = await fetch(`http://127.0.0.1:5000/dashboard?month=${monthNum}`, {
                            method: 'GET',
            });
            const data = await response.json();
            console.log(data)
            setTotalVisitorCount(data.total_visitor_count);
            setTotalAdultCount(data.total_adult_count);
            setTotalBabiesCount(data.total_babies_count);
            setTotalChildrenCount(data.total_children_count);
            setTotalVisitorList(data_list_response.visitor_array)
            setComparisonList(data.comparison_list);
        }
        if (monthNum !== null) {
            fetchData();
          }
        }, [monthNum]);
    const handleSelect = (index) => {
        setSelectedMonthIndex(index); // Only set the month index
    };

    const handleClickView = () => {
        navigate('/data-display');
    }
    const handleBackClickView = () => {
        navigate('/');
    }
  return (
    <div className='bg-gray-300 pt-4 px-2 h-screen'>
        <div className='grid grid-cols-8 w-full bg-white rounded-lg p-2.5 mb-2'>
            <div className='col-span-7'>
            <h1 className='font-black text-xl'>Demand Prediction Dashboard</h1>
            <p className='font-bold text-md text-gray-300'>Monthly Forecast</p>
            </div>
            <div className='pt-2 flex'>
            <button onClick={handleClickView} className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2'>View</button>
            <button onClick={handleBackClickView} className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Back</button>
            </div>

        </div>
        <MonthSelectionNavbar selectedMonthIndex={selectedMonthIndex} 
            handleSelect={handleSelect} 
            months={months}/>
        <VisitorCount totalAdultCount={totalAdultCount} totalBabiesCount={totalBabiesCount} totalVisitorCount={totalVisitorCount} totalChildrenCount={totalChildrenCount} comparisonList={comparisonList}/>
        <div className='flex'>
            <div className='w-3/4 p-2.5 bg-white rounded-lg mr-2.5'>
            <p className='font-bold text-md'>Visitor Types</p>
            <BarChart babyCount={totalBabiesCount} adultCount={totalAdultCount} childCount={totalChildrenCount}/>
            </div>
            <div className='w-3/4 p-2.5 bg-white rounded-lg'>
            <p className='font-bold text-md'>Monthly Demand Trend</p>
            <LineChart month={months} list_visitors={totalVisitorList}/>
            </div>
        </div>
    </div>
    )
}
