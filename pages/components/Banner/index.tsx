import React, { useState, useEffect,ChangeEvent, FormEvent,useRef  } from "react";
import Typewriter from 'typewriter-effect';

import Image from "next/image";
const Banner = () => {

    
  
    return (

              
       <>
       <br></br><br></br><br></br><br></br>
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Complete Online Solution</button>
                    </div>
                    <div className="py-3 text-center lg:text-start  z-50">
                        <h1 className='text-6xl lg:text-40xl font-bold text-darkpurple'>
                        <Typewriter
  options={{
    strings: ['Your Dream <br> Growth becomes <br> Reality Here '],
    autoStart: true,
    loop: true,
  }}
/>
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
        </>
    )
}

export default Banner;
