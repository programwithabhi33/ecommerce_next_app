import React, { useState } from 'react'
import { useRouter } from 'next/router';
import mongoose from 'mongoose';
import Products from '../../models/Products';

const product = ({addToCart,mainProduct,colorSizeArray}) => {
  const router = useRouter()
  // const { toast, snackbar } = require('tailwind-toast')

  // check that router is ready or not for the initial page because that the router is not ready when the first page appears it needs some time to be ready
  if(!router.isReady) return;
  console.log(mainProduct);
  console.log(colorSizeArray);
  const { product } = router.query
  // console.log(router)
  let checkPinCode = () => {
    let pinCodeInput = document.getElementById("pin_code");
    if (pinCodeInput.value != "") {
      console.log("Yeyyyy")
    }
    else {
      pinCodeInput.focus();
      // document.getElementById("toast_warning").style.display = "block";
    }
  }
  // console.log(addToCart)
  const refreshVariant = (newSize,newColor)=>{
    // console.log(newColor,newSize)
    // console.log(colorSizeArray)
    const url = `http://localhost:3000/product/${colorSizeArray[newColor][newSize]['slug']}`;
    window.location = url;
  }


  let [color,setColor] = useState(mainProduct.color);
  let[size,setSize] = useState(mainProduct.size);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto rounded" src={mainProduct.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{mainProduct.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{mainProduct.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  
                  {Object.keys(colorSizeArray).includes('white') && <button onClick={()=>{refreshVariant(size,'white')}} className={`border-2  ml-1 bg-white-700 rounded-full w-6 h-6 focus:outline-none ${color == "white" ? "border-black":"border-grey-300"}`}></button>}
                  {Object.keys(colorSizeArray).includes('black') && <button onClick={()=>{refreshVariant(size,'black')}} className={`border-2  ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color == "black" ? "border-black":"border-grey-300"}`}></button>}
                  {Object.keys(colorSizeArray).includes('green') && <button onClick={()=>{refreshVariant(size,'green')}} className={`border-2  ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none ${color == "green" ? "border-black":"border-grey-300"}`}></button>}
                  {Object.keys(colorSizeArray).includes('yellow') && <button onClick={()=>{refreshVariant(size,'yellow')}} className={`border-2  ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none ${color == "yellow" ? "border-black":"border-grey-300"}`}></button>}
                  {Object.keys(colorSizeArray).includes('purple') && <button onClick={()=>{refreshVariant(size,'purple')}} className={`border-2  ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none ${color == "purple" ? "border-black":"border-grey-300"}`}></button>}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select onChange={(e)=>{refreshVariant(e.target.value,color)}} value={mainProduct.size} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      {Object.keys(colorSizeArray[color]).includes('S') && <option value="S">S</option>}
                      {Object.keys(colorSizeArray[color]).includes('M') && <option value="M">M</option>}
                      {Object.keys(colorSizeArray[color]).includes('L') && <option value="L">L</option>}
                      {Object.keys(colorSizeArray[color]).includes('XL') && <option value="XL">XL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex mx-auto">
                <span className="title-font font-medium text-2xl text-gray-900">₹58,000</span>
                <button onClick={()=>{addToCart(product,'hp laptop',1,59000,"M")}} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded">Add To Cart</button>
                <button className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex my-4">
                <input id='pin_code' type="text" className='border border-pink-500 rounded-md px-4 focus:border-pink-900 text-semibold' placeholder='Enter Pin Code' />
                <button onClick={checkPinCode} className="flex ml-4 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded">Check Servicibility</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export async function getServerSideProps(context) {
 
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Products.findOne({slug:context.query.product});
  let variants = await Products.find({title:product.title});
  let colorSizeArray = {};

  for(let item of variants ){
    if(Object.keys(colorSizeArray).includes(item.color)){
      colorSizeArray[item.color][item.size] = {slug:item.slug}
    }
    else{
      colorSizeArray[item.color] = {};
      colorSizeArray[item.color][item.size] = {slug:item.slug};
    }
  }

  return {
    props: {mainProduct:JSON.parse(JSON.stringify(product)),colorSizeArray:JSON.parse(JSON.stringify(colorSizeArray))}, // will be passed to the page component as props
  }
}

export default product