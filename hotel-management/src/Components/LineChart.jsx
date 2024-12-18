import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

export default function LineChart({month, list_visitors}) {
    const data = {
        labels: month,
        datasets: [
            {
                data:list_visitors,
                backgroundColor: 'aqua',
                borderColor:'black',
                pointBorderColor:'aqua'
            }
        ] 
    }
    const options={
        plugins: {
            legend : true
        }
    }
  return (
    <div className='w-3/4 m-auto'>
      <Line data={data} options={options}></Line>
    </div>
  )
}
