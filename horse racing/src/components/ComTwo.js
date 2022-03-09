

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://horse-racing.p.rapidapi.com/racecards',
  params: {date: '2020-03-12'},
  headers: {
    'x-rapidapi-host': 'horse-racing.p.rapidapi.com',
    'x-rapidapi-key': '34c5e8c498msh6bf026a01b33052p1d36e1jsn80f065b0e7a9'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const ComTwo = () =>{
    return(
        <>
        <p>This is component Two</p>
        </>
    )

}
export default ComTwo