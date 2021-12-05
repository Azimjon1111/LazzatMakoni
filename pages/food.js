import react, {useState, useEffect} from 'react'
import axios from '../axios'
import Navbar from '../components/Navbar'
const Index =()=>{
const [data, setData] = useState([])
const [qwerty, setQwerty]= useState([])
useEffect(()=>{
axios.get('').then((res)=>{console.log(res); setData(res.data.foods[0]); setQwerty(res.data.foods[0].foodNutrients)})
.catch((err)=>{console.log(err)})
},[])
console.log(data)
    return(
        <>
        <Navbar/>
        <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/9:4/w_3752,h_1667,c_limit/Smashburger-recipe-120219.jpg" style={{width: '100%'}} />
        <div className="flex justify-between mx-40 mt-10 p-10">
            <div className="bg-second text-white font-bold py-10 ">
                <p className="text-4xl mx-20">Name: <span className="text-2xl ">
                   {data.description}
                   </span> 
                </p>
                <p className="mt-2 mx-20 ">
                <span className="text-3xl underline mr-4">
                Ingredients:
                 </span> 
                 {data.ingredients}
                </p>
                <p className="mt-2 mx-20 ">
                <span className="text-3xl underline mr-4">
                FoodCategory:
                 </span> 
                 {data.foodCategory}
                </p>
            </div>
        </div>
        <div className="flex px-10 mx-40 mt-10 p-10">
            <div className="bg-second text-white font-bold py-10 px-10 ">
                <p>Name</p>
                {qwerty.map((el)=>(
                    <p>
                    {el.nutrientName}
                    </p>
                ))}
            </div>
            <div className="bg-second text-white font-bold py-10  px-10">
               <p>Amount</p>
                {qwerty.map((el)=>(
                    <p>
                    {el.value}
                    </p>
                ))}
            </div>
            <div className="bg-second text-white font-bold py-10 px-10">
               <p>Unit</p>
                {qwerty.map((el)=>(
                    <p>
                    {el.unitName}
                    </p>
                ))}
            </div>
        </div>
        </>
    )
}
export default Index