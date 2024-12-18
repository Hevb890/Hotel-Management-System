import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2'
export default function BarChart({babyCount, childCount, adultCount}) {
    ChartJS.register(
        BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
    )
    const data = {
        labels: ['Baby','Child','Adult'],
        datasets : [
            {   
                label: ['Baby','Child','Adult'],
                data:[babyCount,childCount,adultCount],
                backgroundColor: ['#7ECBDD','#6FAAB9','#1287A3'],
            }
        ]
    }
    const option ={

    }
  return (
    <div className='w-3/4 m-auto'>
      <Bar data={data} options={option}></Bar>
    </div>
  )
}
