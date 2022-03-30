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
    'X-RapidAPI-Key': 'db9da9a411mshb5f37cd28e85b33p1838d2jsnb5755b60a220'
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
    labels: ['Driver One ' ,'Driver Two ' ],
    datasets: [{
        label: ['Driver One  ' ,' Driver Two ' ],
        data: chartInfo,
        backgroundColor: [
            'rgba(143,160,165,0.1)',
            'rgba(255,40,0, 0.2)'
        ],
        borderColor: [
            'rgba(0,111,98,1)',
            'rgba(255,40,0, 1)'
        ],
        borderWidth: 1
    }]
}


    return(
        <div>
            <div className='left-panel'>
            <select onChange={getDriverData} ref={driverId} >
                        <option>Select Driver One</option>
                        {drivers.map(item => <option  value={item.pos}>{item.driver}</option>)}
</select>

            <select onChange={getDriverData} ref={driverId2} >
                        <option>Select Driver Two</option>
                        {drivers.map(item => <option  value={item.pos}>{item.driver}</option>)}
</select>
            </div>

            <div className='right-panel'>
                <div className="bar">
                <Bar data={chartData}
  />
                </div>
                <div className="pie">
            <Pie data={chartData}
  />
            </div>
            <div className="polar-area">
           <PolarArea data={chartData}
  />
         </div>


  

            </div>
        </div>
    )
    


     
   
}
export default Compare