import React from 'react'
import Link from 'next/link'
import { mongoose } from "mongoose"
import Products from '../models/Products'

const product = ({products}) => {
  console.log(products)
  return (
    <section className="text-gray-600 body-font mx-12">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Our Products</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {products.map((product) =>{
          return (<div  key={product._id} className="p-4 lg:w-1/4 md:w-1/2 my-6 shadow-md mx-6">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full mb-1" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91-U2J7fKoL._AC_UY327_FMwebp_QL65_.jpg" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                <h3 className="text-gray-500 mb-3">{product.title}</h3>
                <p className="mb-4">{product.desc}</p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <button className="btn bg-pink-400 border-0 p-3 rounded-md text-sm font-semibold text-black">Add To Cart</button>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <Link legacyBehavior href={"/product/"+product.slug}><button className="btn bg-pink-400 border-0 p-3 rounded-md text-sm font-semibold text-black">Buy Now</button></Link>
                  </a>
                </span>
              </div>
            </div>
          </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
 
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Products.find();

  return {
    props: {products:JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}
export default product