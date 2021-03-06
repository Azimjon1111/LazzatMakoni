import {StarIcon} from '@heroicons/react/outline'
import Link from 'next/link'
const data =[
    {src: 'https://www.gazeta.uz/media/img/2019/06/rq8LP515599976566958_l.jpg', name: 'OQTEPA LAVASH', type: 'Type of food : Carrot Juice, Fresh Juice, Tea', number: '12'},
    {src: 'https://www.afisha.uz/ui/catalog/2020/09/0391971.jpeg', name: 'Basri baba', type: 'Type of food : Carrot Juice, Fresh Juice, Tea', number: '12'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Paul.png', name: 'PAUL', type: 'Type of food : Carrot Juice, Fresh Juice, Tea', number: '12'},
    {src: 'https://dostavkainfo.uz/wp-content/uploads/2020/03/bon.jpg', name: 'BON', type: 'Type of food : Carrot Juice, Fresh Juice, Tea', number: '12'},
    {src: 'https://play-lh.googleusercontent.com/2owmffIC3y5PKPMcmye1Olab0qhg3hnnU8ymBlrrg4Hv5hCOQBCR2NunldYsvEzZKet6', name: 'EVOS', type: 'Type of food : Carrot Juice, Fresh Juice, Tea', number: '12'},
    {src: 'http://www.ap22.ru/netcat_files/multifile/2546/1024px_KFC_logo.svg.png', name: 'KFC', type: 'Type of food : Carrot Juice, Fresh Juice, Tea', number: '12'},
]
const TopRes = ()=>{
return(
    <div className= " flex justify-center w-11/12 mx-auto font-black">
    <div>
    <h1 className="font-bold mt-10 text-4xl text-center">Top Places</h1>
    <p className="font-bold mt-4 text-4xl text-center">Explore restaurants, bars, and cafés by locality</p>
    <div className="w-full grid grid-cols-3 mx-4">
    {data.map((el)=>(
        <div style={{width: '500px'}} className=" flex justify-around my-10 border-second border-2 rounded-md">
        <img src={el.src} className="w-48 h-40 rounded-md  my-5 mx-10 cursor-pointer" />
        <div className="my-10 mx-10">
            <div className="flex justify-between">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <p>({el.number})</p>
            </div>
            <Link href="/restaurant">
            <h1 className="hover:underline cursor-pointer">{el.name}</h1>
            </Link>
            <p>{el.type}</p>
        </div>
        </div>
    ))}
    </div>
    </div> 
    </div>
)
}
export default TopRes