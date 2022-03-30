import React from 'react';
import 'chart.js/auto';
import {Chart as ChartJS, Tooltip ,Legend, BarElement, CategoryScale, LinearScale} from 'chart.js';
import axios from 'axios';
import {useState ,useEffect,useRef} from 'react';
import { Bar, Pie, PolarArea} from 'react-chartjs-2';

ChartJS.register( 
    CategoryScale,
    LinearScale,
    BarElement, Tooltip, Legend)



  const Compare =()=>{

const options = {
  method: 'GET',
  url: 'https://formula-1-all-time-statistics.p.rapidapi.com/2021/drivers/all',
  headers: {
    'X-RapidAPI-Host': 'formula-1-all-time-statistics.p.rapidapi.com',
    'X-RapidAPI-Key': '34c5e8c498msh6bf026a01b33052p1d36e1jsn80f065b0e7a9'
  }
};
const [drivers, setDrivers]=useState([])

useEffect(()=> {
    axios.request(options).then(function (response) {
        setDrivers(response.data);

    }).catch(function (error) {
        console.error(error);
    
    
    })
},[]);

let driverId = useRef()
let driverId2 = useRef()
const [chartInfo,setChartInfo]=useState()
const getDriverData=()=>{
    let Id= driverId.current.value
    let chosen=drivers[Id-1]
    let points=parseInt(chosen.pts)

    let Id2= driverId2.current.value
    let chosen2=drivers[Id2-1]
    let points2=parseInt(chosen2.pts)
    
    setChartInfo([points,points2 ])

}
const chartData = {
    labels: ['Car One ' ,'Car Two ' ],
    datasets: [{
        label: ['Car One ' ,'Car Two ' ],
        data: chartInfo,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
}


    return(
        <div>
            <div className='left-panel'>
            <select onChange={getDriverData} ref={driverId} >
                        <option>Select Car Trim 3rd</option>
                        {drivers.map(item => <option  value={item.pos}>{item.driver}</option>)}
</select>

            <select onChange={getDriverData} ref={driverId2} >
                        <option>Select Car Trim 3rd</option>
                        {drivers.map(item => <option  value={item.pos}>{item.driver}</option>)}
</select>
            </div>

            <div className='right-panel'>
            <Bar data={chartData}
  />
            <Pie data={chartData}
  />

<PolarArea data={chartData}
  />


  

            </div>
        </div>
    )
    


     
   
}
export default Compare