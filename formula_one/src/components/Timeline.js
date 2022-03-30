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
    'X-RapidAPI-Key': 'db9da9a411mshb5f37cd28e85b33p1838d2jsnb5755b60a220'
  }
};

const [years1, setYears1] = useState();
const [years2, setYears2] = useState();
const [years3, setYears3] = useState();
const [years4, setYears4] = useState();
const [years5, setYears5] = useState();


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
    

       
            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2016/team/all'
            axios.request(options)
            .then((response) => {
                setYears1(response.data);
            }).catch((error) => {
                console.error(error);
            });

            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2017/team/all'
            axios.request(options)
            .then((response) => {
                setYears2(response.data);
            }).catch((error) => {
                console.error(error);
            });

            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2018/team/all'
            axios.request(options)
            .then((response) => {
                setYears3(response.data);
            }).catch((error) => {
                console.error(error);
            });

            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2019/team/all'
            axios.request(options)
            .then((response) => {
                setYears4(response.data);
            }).catch((error) => {
                console.error(error);
            });

            options.url = 'https://formula-1-all-time-statistics.p.rapidapi.com/2020/team/all'
            axios.request(options)
            .then((response) => {
                setYears5(response.data);
                console.log(response.data)
            }).catch((error) => {
                console.error(error);
            });
},[]);



    return(
      <div className="Line">

          
        <select >
                        <option>Select your team </option>
                        {
                            teamName.map((item => <option  value={item.team}>{item.team}</option>))
                        }
</select>
      </div>
    )
}
export default Timeline