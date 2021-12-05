import React from 'react'
import { ArrowCircleLeftIcon, ArrowCirleRightIcon } from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/outline'
import Carousel, {consts, type, onClick, isEdge } from 'react-elastic-carousel'
export default function Slider() {
  const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
  ];
  const pointer = type === consts.PREV ? <ArrowCircleLeftIcon /> : <ArrowCirleRightIcon />
  return (
    <section className="mx-5"> 
      <Carousel enableAutoPlay autoPlaySpeed={2000}
        breakPoints={breakPoints}>
        {Data.map((el) => {
            return (
          <div className="shadow-lg row-span-1 col-span-1 text-textColor mr-4 mx-auto mt-8 mb-8 py-10 px-14 border-2">
            <section className="flex justify-between mb-7">
              <h3 className="text-xl font-medium">{el.title}</h3>
            </section>
            <section className="text-left flex w-40">
              <StarIcon className="text-yellow-500"/>
              <StarIcon className="text-yellow-500"/> 
              <StarIcon className="text-yellow-500"/> 
              <StarIcon className="text-yellow-500"/> 
              <StarIcon className="text-yellow-500"/> 
            </section>
              <p className="mt-4">{el.text}</p>
          </div>)})}
        
      </Carousel>
    </section>
  )
}
// const SpecialBtn = () => {
//   const pointer = type === consts.PREV ? '👈' : '👉';
//   return (
//         <button className="px-3 py-10 mx-4 inline-block" onClick={onClick} >
//           {pointer}
//         </button>
//   )
// }
const Data = [
  {
    title: "Azimjon Bekmuratov",
    logo: "Logo",
    text: "Ajoyib restarant kelishingizni maslahat beraman",
    area: "Toshkent shahri"
  },
  {
    title: "Azimjon Bekmuratov",
    logo: "Logo",
    text: "Ajoyib restarant kelishingizni maslahat beraman",
    area: "Toshkent shahri"
  },
  {
    title: "Azimjon Bekmuratov",
    logo: "Logo",
    text: "Ajoyib restarant kelishingizni maslahat beraman",
    area: "Toshkent shahri"
  },
  {
    title: "Azimjon Bekmuratov",
    logo: "Logo",
    text: "Ajoyib restarant kelishingizni maslahat beraman",
    area: "Toshkent shahri"
  },
  {
    title: "Azimjon Bekmuratov",
    logo: "Logo",
    text: "Ajoyib restarant kelishingizni maslahat beraman",
    area: "Toshkent shahri"
  },
  {
    title: "Azimjon Bekmuratov",
    logo: "Logo",
    text: "Ajoyib restarant kelishingizni maslahat beraman",
    area: "Toshkent shahri"
  },
];