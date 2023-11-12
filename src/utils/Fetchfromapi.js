import axios from 'axios';
const Base_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  
  // url:Base_URL ,
  params: {
   
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '4c035d4fb5mshceb4f7f98d5a62ep1f1861jsn2596a9597806',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromAPI= async (url)=>{
   const {data}= await axios.get(`${Base_URL}/${url}`,options);
   return data;


}