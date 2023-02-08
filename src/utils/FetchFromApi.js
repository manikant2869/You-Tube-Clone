import axios from 'axios';


const url = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'ab598184f7mshfe09326f577f5dcp12a83ejsnc0c49d14f46d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// axios.get(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
export const FetchFromApi = async(request)=>{
    const data =    await axios.get(`${url}/${request}`,options).then((response)=>response.data)
    return data;
}
