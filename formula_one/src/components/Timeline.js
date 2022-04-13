import React from 'react';
import 'chart.js/auto';
import axios from 'axios';
import {useState ,useEffect,useRef} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);



const Timeline =()=>{

    let timelineYears = [2016 , 2017, 2018, 2019, 2020]
const options = {
  method: 'GET',
  url: 'https://formula-1-all-time-statistics.p.rapidapi.com/2020/team/all',
  headers: {
    'X-RapidAPI-Host': 'formula-1-all-time-statistics.p.rapidapi.com',
    'X-RapidAPI-Key': '3f38ff011amsh4d1fd64d305b0cfp1d9919jsn777e88fb932b'
  }
};

const [years1, setYears1] = useState();
const [years2, setYears2] = useState();
const [years3, setYears3] = useState();
const [years4, setYears4] = useState();
const [years5, setYears5] = useState();

const selectableTeams = ["Mercedes","Ferrari","Williams Mercedes","Haas Ferrari","Renault"]


const [teamName,setTeamName]= useState([])

    useEffect(() => {

        options.url='https://formula-1-all-time-statistics.p.rapidapi.com/2016/team/all'
    axios.request(options)
        .then((response) => {
            console.log(response.data);


            setTeamName(response.data)


        }).catch((error) => {
            console.error(error);
        });
    

            let yearOneData =[]
            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2016/team/all'
            axios.request(options)
            .then((response) => {
             setYears1(response.data);
             for(var i =0; i<response.data.length; i++){
                yearOneData.push({id: response.data[i].team, pts: response.data[i].pts})
                console.log(yearOneData);

            }
                console.log(response.data)
            }).catch((error) => {
                console.error(error);
            });

            
            let yearTwoData =[]
            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2017/team/all'
            axios.request(options)
            .then((response) => {
                setYears2(response.data);
                for(var i =0; i<response.data.length; i++){
                    yearTwoData.push({id: response.data[i].team, pts: response.data[i].pts})
                    console.log(yearOneData);
    
                }
            }).catch((error) => {
                console.error(error);
            });

            let yearThreeData =[]
            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2018/team/all'
            axios.request(options)
            .then((response) => {
                setYears3(response.data);
                for(var i =0; i<response.data.length; i++){
                    yearThreeData.push({id: response.data[i].team, pts: response.data[i].pts})
                    console.log(yearOneData);
    
                }
            }).catch((error) => {
                console.error(error);
            });
            
            let yearFourData =[]
            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2019/team/all'
            axios.request(options)
            .then((response) => {
                setYears4(response.data);
                for(var i =0; i<response.data.length; i++){
                    yearFourData.push({id: response.data[i].team, pts: response.data[i].pts})
                    console.log(yearOneData);
    
                }
            }).catch((error) => {
                console.error(error);
            });
            
            let yearFiveData =[]
            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2020/team/all'
            axios.request(options)
            .then((response) => {
                setYears5(response.data);
                for(var i =0; i<response.data.length; i++){
                    yearFiveData.push({id: response.data[i].team, pts: response.data[i].pts})
                    console.log(yearOneData);
    
                }
                console.log(response.data)
            }).catch((error) => {
                console.error(error);
            });
},[]);

let selectTeamName = useRef()
const [teamYearOneData, setTeamYearOneData]=useState()
const [teamYearTwoData, setTeamYearTwoData]=useState()
const [teamYearThreeData, setTeamYearThreeData]=useState()
const [teamYearFourData, setTeamYearFourData]=useState()
const [teamYearFiveData, setTeamYearFiveData]=useState()
const [chartInfo, setChartInfo]=useState()
const selectTeam =()=>{
    let selected= selectTeamName.current.value

    let year1 = years1.filter(item => item.team == selected)
    let year2 = years2.filter(item => item.team == selected)
    let year3 = years3.filter(item => item.team == selected)
    let year4 = years4.filter(item => item.team == selected)
    let year5 = years5.filter(item => item.team == selected)
    
    let year1pts = year1[0].pts
    let year2pts = year2[0].pts
    let year3pts = year3[0].pts
    let year4pts = year4[0].pts
    let year5pts = year5[0].pts
    
    setChartInfo([year1pts,year2pts,year3pts,year4pts,year5pts])
    console.log(year1pts);


}

const chartData = {
    labels:  timelineYears,
    datasets: [{
        label: [  ],
        data: chartInfo,
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
      <div className="Line">
          <h1>View team points from 2016-2020</h1>
          <Line data={chartData}
  />

  



          
        <select className="driver-timeline" onChange = { selectTeam } ref= {selectTeamName}>
                        <option>Select your team </option>
                        
                        {
                            selectableTeams.map((item => <option  value={item}>{item}</option>))
                        }
</select>
      </div>
    )
}
export default Timeline