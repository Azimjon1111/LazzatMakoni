import React, {useRef, useState, useEffect} from "react";
import Carousel from "react-multi-carousel";
import {StarIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import "react-multi-carousel/lib/styles.css";
const data = [
    {src:"https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg", company: 'OQTEPA LAVASH' , name: 'Doniyor Qayumov'},
]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Chefs = ()=>{
    return(
    <>
    <div className="my-20 mx-40">
        <h1 className="text-center my-10 text-4xl font-lora">Chef</h1>
<Carousel responsive={responsive}>
    {data.map((el)=>(
            <div className="mx-10">
        <div className="bg-first py-10 rounded-md shadow-lg">
    <img className=" w-60 h-60 mx-auto rounded-full border-white border-4" src={el.src} />
    <Link href="Chef">
    <p className="text-center text-myBlack font-black mt-4 font-montserrat text-white cursor-pointer hover:underline">{el.name}</p>
    </Link>
    <div className="flex justify-center ">
    <button className="text-center text-myBlack bg-second rounded-md px-4 py-2 my-2 font-black mt-4 font-montserrat text-white">{el.company}</button>
    </div>
    <section className="flex justify-center w-40 mx-auto">
              <StarIcon className="text-yellow-500"/>
              <StarIcon className="text-yellow-500"/> 
              <StarIcon className="text-yellow-500"/> 
              <StarIcon className="text-yellow-500"/> 
              <StarIcon className="text-yellow-500"/> 
    </section>
    <p className="text-center mx-4 text-myBlack font-black font-montserrat text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consequat mauris. Nulla nulla diam, laoreet vitae massa sit amet, placerat facilisis nulla.</p>
    </div>
    </div>
    ))}
</Carousel>
        </div>
    </>
    )
}
export default Chefs