import Navbar from '../components/Navbar'
import Comments from '../components/comments'
const Index =()=>{
    return(
        <>
        <Navbar/>
        <div className="flex justify-between mx-40 my-20">
            <img style={{height: '600px'}} className=" rounded-md" src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg" />
            <div style={{height: '600px'}} className="text-white bg-second w-3/5 rounded-md px-10 pt-4">
                <h1 className="text-center text-white font-lora text-4xl font-bold">Chef information</h1>
                <h1 className="text-2xl font-bold">Name: Doniyor Qayumov</h1>
                <h1 className="text-2xl font-bold">Age: 32</h1>
                <h1 className="text-2xl font-bold">Company: EVOS</h1>
                <h1 className="text-2xl font-bold">Meals: Lavash, Burger, Pizza, Sandwich and xot dog</h1>
            </div>
        </div>
        <Comments/>
        </>
    )
}
export default Index