import Link from 'next/link'
const data =[
    {src: 'https://i.pinimg.com/originals/3f/f8/f7/3ff8f74e81d90380ebf9c766e53d2147.jpg'},
    {src: 'https://www.afisha.uz/ui/materials/2019/09/0526513_b.jpeg'},
    {src: 'https://i.ytimg.com/vi/KfiOI8vDnuU/maxresdefault.jpg'},
    {src: 'https://img.championat.com/c/900x900/news/big/w/q/pochemu-sushi-vredny-dlja-figury_1590677088981164064.jpg'},
    {src: 'https://lh3.googleusercontent.com/proxy/AifUUr4X2-w8xtJr9DhD-KPhPAW8dcLn6fR5U3C66UD1zhrzeEdt-FDiXDQKEEp_PKsZg3HPRhcdfv897hcvXa9ZFpIKbJ3SZjliI1tvVg5OTafZxP49N_omsFN_'},
    {src: 'https://i.ytimg.com/vi/6csj_WdHyn0/maxresdefault.jpg'},
    {src: 'https://www.adalet.az/uploads/photos/adalet/2020-01-21-10-46-07b2.jpg'},
]
const TopRes = ()=>{
return(
    <div className= " flex justify-center w-4/5 mx-auto mb-10">
    <div>
    <h1 className="font-bold text-4xl mt-10 text-center">Top Restaurants</h1>
    <p className="font-bold text-3xl mt-4 text-center">Explore restaurants, bars, and cafés by locality</p>
    <div className="grid grid-cols-3 my-10">
    {data.map((el)=>(
        <Link href="/food">
        <img src={el.src} className="rounded-md h-40 w-48 my-4 cursor-pointer" />
        </Link>
    ))}
    </div>
    </div> 
    </div>
)
}
export default TopRes