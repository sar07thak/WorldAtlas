import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"

export const HeroSection = () => {
  return (
    <>
    <div className=' flex md:flex-row flex-col m-24 md:mx-72 py-16 items-center justify-center gap-16'>
            <div className="text-5xl font-bold ">
              <h1 className='mb-10'>
                Expolore the world, one country at a Time.
              </h1>
              <p className="font-semibold">
                Discover the history , culture and beauty of every nation. 
                Sort,search,and filtrethrough countries to find the details you need . 
              </p>
              <button className='rounded-2xl'>
                start Exploring <FaLongArrowAltRight />
              </button>
            </div>
            <div className="">
              <img src="/images/world.png" alt="world beauty" className=''/>
            </div>
        </div>
    </>
  )
}
