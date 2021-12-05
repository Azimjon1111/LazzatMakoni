import {CheckIcon} from '@heroicons/react/outline'
const Header  = ()=>{
return(
    <>
    <div  className="bg-landing-header font-extrabold bg-cover bg-center bg-no-repeat w-screen h-screen" style={{width: '100%', height: '700px'}}>
       <div className="flex items-center flex-col py-60 space-y-10">
        <h1 className="text-center text-white text-4xl">We Are In The Business Of Food Our Restaurants Do</h1>
        <p className="text-center text-white text-2xl"> Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
        <div className="flex justify-center w-8/12">
        <div className="flex bg-second w-full h-28 text-2xl">
            <input className="py-4 mx-4 my-6 w-4/12 text-center" placeholder="Restaurant Name" />
            <input className="py-4 mx-4 my-6 w-4/12 text-center" placeholder="All location" />
            <button className="py-4 mx-4 my-6 w-4/12 bg-first text-white">Search</button>
        </div>
        </div>
        <div className="flex justify-center space-x-10">
            <div className="flex text-2xl text-white">
            <CheckIcon className="w-10 h-10 text-first" />
<p className=""><span className="mx-4">11</span> Restaurants</p>
            </div>
            <div className="flex text-2xl text-white">
            <CheckIcon className="w-10 h-10 text-first" />
<p className=""><span className="mx-4">1789</span>  People Served</p>
            </div>
            <div className="flex text-2xl text-white">
            <CheckIcon className="w-10 h-10 text-first" />
<p className=""><span className="mx-4">314</span> Restaurants</p>
            </div>
        </div>
        </div>
    </div>
    </>
)
}
export default Header