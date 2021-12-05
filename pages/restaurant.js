import react, {useState, useEffect} from 'react'
import { Tab } from '@headlessui/react'
import axios from '../axios'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Contact from '../components/Contact'
import Comments from '../components/comments'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Index =()=>{
    const menu =[{}]
const [data, setData] = useState([
    {src: 'https://i.ytimg.com/vi/l636yg-glyk/maxresdefault.jpg', name: 'Shovurma', price: '15'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Club_sandwich.png/1200px-Club_sandwich.png', name: 'Sendwinch', price: '20'},
    {src: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_27/1586836/hotdogs-te-square-200702.jpg', name: 'Xot dog', price: '12'},
    {src: 'https://www.joc.com/sites/default/files/field_feature_image/KFC_0.png', name: 'Chiccken', price: '5'},
    {src: 'https://img.povar.ru/main/64/12/b0/54/kartofel_fri_v_domashnih_usloviyah-36496.jpg', name: 'Free', price: '3'},
    {src: 'https://makepedia.uz/wp-content/uploads/2018/02/Pizza.jpg', name: 'Pizza', price: '8'},
    {src: 'https://static3.depositphotos.com/1001450/255/i/600/depositphotos_2552347-stock-photo-hamburger-on-a-white-background.jpg', name: 'Burger', price: '7'},
    {src: 'https://st.depositphotos.com/1102480/1589/i/600/depositphotos_15890699-stock-photo-big-hamburger.jpg', name: 'Burger', price: '12'},

])
const [qwerty, setQwerty]= useState([])
console.log(data)
    return(
        <div className="">
        <Navbar/>
        <img src="https://www.gazeta.uz/media/img/2019/06/rq8LP515599976566958_l.jpg" style={{width: '100%', height: '800px'}} />
        <div className="flex justify-between mx-40 mt-10 p-10">
        </div>
            <h1 className="font-bold text-4xl ml-10">MENU</h1>
        <div className="flex justify-between mb-40 mx-10">
            <div className="grid grid-cols-4">
            {data.map((el)=>(<div className="flex my-4">
                <Link href="/food">
            <img src={el.src} className="w-40 h-40 cursor-pointer" />
</Link>
            <div className="ml-2">
                <h1 className="font-bold text-2xl">{el.name}</h1>
                <p className="font-bold text-xl">Cheese, tomatoes, tuna fish, sweetcorn and italian herbs</p>
                <p className="font-bold text-xl">{el.price}$</p>
            </div>
            </div>))}
        </div>
    </div>
    <div className="my-40">
    <Comments/>
    </div>
    <Contact/>
        </div>
    )
}
export default Index