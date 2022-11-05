import Image from 'next/image';
import React from 'react'




const Weather=({data}) =>{
    console.log(data);

  
    return (

      <div className='relative flex flex-col  max-w-[500px] w-full  mx-auto p-4 text-white z-10'>
        <div className='relative flex justify-between pt-12'>
            <div className='flex flex-col items-center'>
                
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="/"
                
                width='100'
                height='100'
                
                />
           <p className='text-2xl'>{data.weather[0].main}</p>
       

            </div>
            <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;C</p>
            
          
          
        </div>
        
      
        <div className='  bg-black/50 h-auto p-8 mt-36  rounded-md'>
              <p  className='text-2xl text-center pb-6'>Weather in {data.name}</p>
              <div className='flex justify-between text-center'>
                <div>
                    <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;C</p>
                    <p className='text-xl'>Feels Like</p>
                </div>
                <div>
                    <p  className='font-bold text-2xl'  >{data.main.humidity}%</p>
                    <p className='text-xl'   >Humidity</p>
                </div>
                <div>
                    <p  className='font-bold text-2xl'   >{data.wind.speed.toFixed(0)} MPH</p>
                    <p  className='text-xl'  >Winds</p>
                </div>
                <div>
                    <p  className='font-bold text-2xl'   >{data.timezone/3600}:00 </p>
                    <p  className='text-xl'  >Time</p>
                </div>
            
               
               
              </div>
        </div>
      </div>
    )
 
 }

export default Weather;