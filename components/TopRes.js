const data =[
    {src: 'https://www.gazeta.uz/media/img/2019/06/rq8LP515599976566958_l.jpg'},
    {src: 'https://www.afisha.uz/ui/catalog/2020/09/0391971.jpeg'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Paul.png'},
    {src: 'https://dostavkainfo.uz/wp-content/uploads/2020/03/bon.jpg'},
    {src: 'https://play-lh.googleusercontent.com/2owmffIC3y5PKPMcmye1Olab0qhg3hnnU8ymBlrrg4Hv5hCOQBCR2NunldYsvEzZKet6'},
    {src: 'http://foodbakery.chimpgroup.com/wp-content/uploads/fb-restaurant-13-1.png'},
    {src: 'https://www.gazeta.uz/media/img/2019/06/rq8LP515599976566958_l.jpg'},
]
const TopRes = ()=>{
return(
    <div className= " flex justify-center w-3/5 mx-auto mb-10">
    <div>
    <h1 className="font-bold text-4xl mt-10">Top Restaurants</h1>
    <p className="font-bold text-3xl mt-4">Explore restaurants, bars, and cafés by locality</p>
    <div className="space-x-4 mt-10 flex justify-between w-3/5">
    {data.map((el)=>(
        <>
        <img src={el.src} className="w-48 h-40 rounded-md" />
        </>
    ))}
    </div>
    </div> 
    </div>
)
}
export default TopRes