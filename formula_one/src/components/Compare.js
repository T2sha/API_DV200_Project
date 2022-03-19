import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://formula-1-all-time-statistics.p.rapidapi.com/2021/races/all',
  headers: {
    'x-rapidapi-host': 'formula-1-all-time-statistics.p.rapidapi.com',
    'x-rapidapi-key': '34c5e8c498msh6bf026a01b33052p1d36e1jsn80f065b0e7a9'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


const Compare =()=>{
    return(
       <>
       <p>This is the comparrison page </p>
       </>
    )
}
export default Compare