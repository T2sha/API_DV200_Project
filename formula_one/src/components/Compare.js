import React from 'react';
import 'chart.js/auto';
import {Chart as ChartJS, Tooltip ,Legend, BarElement, CategoryScale, LinearScale} from 'chart.js';
import axios from 'axios';
import {useState ,useEffect,useRef} from 'react';
import { Bar, Pie, PolarArea, Doughnut} from 'react-chartjs-2';
import TableItem from './TableItem'
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
    'X-RapidAPI-Key': '3f38ff011amsh4d1fd64d305b0cfp1d9919jsn777e88fb932b'
    

  }
  
};




const [drivers, setDrivers]=useState([])
const [driverTableData,setdriverTableData]=useState();
useEffect(()=> {
    axios.request(options).then(function (response) {
        setDrivers(response.data);
        let driverTable= response.data.map((item, index) =>  <TableItem key={index} pts={item.pts} name ={item.driver}/>);
        setdriverTableData(driverTable)

    }).catch(function (error) {
        console.error(error);
    })
},[]);

let driverId = useRef()
let driverId2 = useRef()
const [chartInfo,setChartInfo]=useState()

const [DriverOnePoints,setDriverOnePoints]=useState()
const [DriverTwoPoints,setDriverTwoPoints]=useState()
const [driverOneName,setDriverOneName]=useState();
const getDriverOneData=()=>{
    let Id= driverId.current.value
    let chosen=drivers[Id-1]
    console.log(chosen);
    let points=parseInt(chosen.pts)
    let driver= drivers.filter(item => item.pos == Id)
    console.log(driver)
    let driverName= driver[0].driver

    
setDriverOnePoints(points)
    setDriverOneName(driverName)

}

const [driverTwoName,setDriverTwoName]=useState();

const getDriverTwoData=()=>{
    

    let Id2= driverId2.current.value
    let chosen2=drivers[Id2-1]
    let points2=parseInt(chosen2.pts) 
    let driver= drivers.filter(item => item.pos == Id2)
    console.log(driver)
    let driverName= driver[0].driver
    console.log(driverName)
    setDriverTwoPoints(points2)
    setChartInfo([DriverOnePoints,DriverTwoPoints ])
    setDriverTwoName(driverName)

}
const chartData = {
    labels: [  driverOneName,  driverTwoName],
    datasets: [{
        label: [  driverOneName,  driverTwoName],
        data: [DriverOnePoints,DriverTwoPoints],
        backgroundColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderWidth: 1
    }]
}

const chartData2 = {
    labels: [ driverOneName,  driverTwoName ],
    datasets: [{
        label: [ driverOneName,  driverTwoName ],
        data: [DriverOnePoints,DriverTwoPoints],
        backgroundColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderWidth: 1
    }]
}

const chartData3 = {
    labels: [  driverOneName,  driverTwoName   ],
    datasets: [{
        label: [ driverOneName,  driverTwoName ],
        data: [DriverOnePoints,DriverTwoPoints],
        backgroundColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderWidth: 1
    }]
}

const chartData4 = {
    labels: [  driverOneName,  driverTwoName   ],
    datasets: [{
        label: [ driverOneName,  driverTwoName ],
        data: [DriverOnePoints,DriverTwoPoints],
        backgroundColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderColor: [
            'rgba(48,49,62)',
            'rgba(233,36,30)'
        ],
        borderWidth: 1
    }]
}


    return(
        <div>
            <div className='left-panel'>
            <select className="driver-one" onChange={getDriverOneData} ref={driverId} >
                        <option>Select Driver One</option>
                        {
                            drivers.map((item, index) => <option key={index} value={item.pos}>{item.driver}</option>)
                        }
</select>

            <select className="driver-two" onChange={getDriverTwoData} ref={driverId2} >
                        <option>Select Driver Two</option>
                        {
                            drivers.map((item, index) => <option key={index} value={item.pos}>{item.driver}</option>)
                        }
</select>
            </div>

           
            
            <div className="driver-names">
               {driverTableData}
               <div className="t-png">
               <h1>DRIVER STANDINGS</h1>
               <h2>Let's compare drivers!</h2>
               <h3>VS</h3>

               </div>
              
                </div>

                <div className="driveOne">
                    <p>Select driver One</p>
                </div>
                <div className="driveTwo">
                <p>Select driver Two</p>
                </div>


                <div className="bar">
                <Bar data={chartData}
  />
                </div>
                <div className="pie">
               <Pie data={chartData2}
  />
            </div>
            <div className="polar-area">
           <PolarArea data={chartData3}
  />
         </div>

         <div className="Doughnut">
         <Doughnut data={chartData4}
  />
         </div>



  

            </div>
       
    )
    


     
   
}
export default Compare