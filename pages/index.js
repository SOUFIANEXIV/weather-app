import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import axios from 'axios'
import {BsSearch} from  'react-icons/bs'
import Weather from '../components/weather';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';




export default function Home() {

  const[city,setCity]=useState('');
  const[weather,setWeather]=useState({});
  const [loading,setLoading]=useState('false');


  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;


const fetchWeather= (e)=>{
  e.preventDefault();
  setLoading(true);



      axios.get(url).then((response)=>{

    setWeather(response.data);
    
 }).catch(err=>{
  toast.error('City Not Found');
});
   
  
  setCity('');
  setLoading(false);
}



  return (
  
    <div className='overflow-y-hidden'>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
<img   src='https://images.unsplash.com/photo-1530010042709-370d58f869c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'    

className='object-cover h-screen  w-full   -z-10 bg-black/90 absolute top-0 left-0 right-0 bottom-0 ' 
 
 />

 <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white '>
  <form 
  
  onSubmit={fetchWeather}
  
  className='flex justify-between items-center w-full mx-auto p-3 bg-transparent border text-white rounded-2xl'>
<div >
  <input
  onChange={(e)=>setCity(e.target.value)}


  
  type="text" className='bg-transparent border-none w-96 text-white focus:outline-none text-2xl placeholder:text-white' placeholder='Search city'  />

</div>
<button onClick={fetchWeather}><BsSearch  size={20}/></button>

  </form>
 </div>


{weather.main &&  <Weather data={weather}   /> }



<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />



</div>

      
  )
}

