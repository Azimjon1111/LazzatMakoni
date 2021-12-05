import { Map, Placemark, YMaps } from "react-yandex-maps"
import react, {useState, useEffect} from 'react'
import SuccesAlert from 'react-bootstrap-sweetalert'
import DangerAlert from 'react-bootstrap-sweetalert'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Contact = ()=>{
    const data = [
        {week: 'Dushanba', time: '09:00 – 17:00'},
        {week: 'Seshanba', time: '09:00 – 17:00'},
        {week: 'Chorshanba', time: '09:00 – 17:00'},
        {week: 'Payshanba', time: '09:00 – 17:00'},
        {week: 'Juma', time: '09:00 – 17:00'},
        {week: 'Shanba', time: '09:00 – 17:00'},
        {week: 'Yakshanba', time: 'Dam olish kuni'},
      ]
  const [showSuccess, setShowSuccess]= useState(false)
  const[showDanger, setShowDanger]= useState(false)
  const [name, setName]= useState('')
  const [phone, setPhone]= useState('')
  const [message, setMessage]= useState('')
  const Submit = ()=>{
    if(name==''|| phone==''|| message==''){
      setShowDanger(true)
    }else{
      const myText =` Имя: ${name} %0A Телефон: ${phone} %0A Message: ${message};`
      const token = "2087062092:AAGZQWp8LIcoJ2OKnoIXjG0bjm-NQ0YZmcs";
      const chatId = -1001457435837
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${myText}`
      const api = new XMLHttpRequest();
      api.open("Get", url, true);
      api.send()
      setShowSuccess(true)
    }
  }
  console.log(name)
    return(
        <div className="mx-10 my-20 mt-10 flex justify-between"> 
        <SuccesAlert
        show={showSuccess}
        success 
        title="Ajoyib!"
        onConfirm={()=>{setShowSuccess(false)}}
        confirmBtnCssClass="bg-myBlue text-white rounded px-4 py-2 bold"
        >
          <p>Biz yaqinda siz bilan aloqaga chiqamiz</p>
        </SuccesAlert>
        <DangerAlert
        show={showDanger}
        danger
        title="Formani to'liq to'ldiring"
        onConfirm={()=>{setShowDanger(false)}}
        >
        </DangerAlert>
        <div>
        <div>
            <h1 className="text-2xl mb-4 text-myBlue">| Ish Vaqtlari</h1>
            {
              data.map((el)=>(
                  <>
              <div className="w-96 flex justify-between">
              <div>{el.week}</div> 
              <hr className="my-1"/>
              <div className="text-">	{el.time}</div>
            </div>
            <hr className="h-0.5 bg-myBlue"/>
            </>
              ))
            }
          </div>
          <div>
            <h1 className="text-2xl mb-4 text-myBlue mt-10">| Biz bilan bog'lanish</h1>
            <div className="space-y-5">
            <div className="flex text-black hover:text-myBlue">
            <p className="ml-2">60A Amir Temur ko'chasi, Тошкент, Узбекистан</p>
            </div>
            <div className="flex text-black hover:text-myBlue">
            <a className="ml-2" href="tel:+998909664777">+998 90 966 47 77</a>
            </div>
            <div className="flex text-black hover:text-myBlue">
            <a className="ml-2" href="tel:+998909664777">+998 90 966 47 77</a>
            </div>
            <div className="flex text-black hover:text-myBlue">
            <a className="ml-2" href="mailto:df@tfi.uz" target="_blank">df@tfi.uz</a>
            </div>
            </div>
          </div>
            </div>
    <div className="mx-12">
        <YMaps>
  <Map
    defaultState={{
        center: [41.32302404392419, 69.28501756437213],
        zoom: 13,
    }}
    width={600}
    height={600}
    >
    <Placemark geometry={[41.32393418073185, 69.28341350916071]} />
  </Map>
   </YMaps>
      </div>
   <div className="bg-white border-myBlue border-t-2 shadow-xl rounded-sm w-2/5 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <h1 className="text-center text-myBlack mb-4 text-2xl">Biz bilan bog'laning</h1>
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  name="phone"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-2 focus:border-indigo-500 border-myBlue rounded-md"
                  placeholder="Ism"
                  onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                value={phone}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-2 focus:border-indigo-500 border-myBlue rounded-md"
                  placeholder="Telefon raqam"
                  onChange={(e)=>{setPhone(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Xabar
                </label>
                <textarea
                  value={message}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border-2 focus:border-indigo-500 border-myBlue rounded-md"
                  placeholder="Xabar"
                  defaultValue={''}
                  onChange={(e)=>{setMessage(e.target.value)}}
                />
              </div>
              <div>
              <div class="login-box">
  <form>
    <button href="#" onClick={Submit} className="bg-second text-white px-4 py-2">
      Jo'natish
    </button>
  </form>
</div>
              </div>
            </form>
          </div>
          </div>
      </div>
    )
}
export default Contact