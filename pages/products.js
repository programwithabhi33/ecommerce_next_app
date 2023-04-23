import React from 'react'
import Link from 'next/link'
import { mongoose } from "mongoose"
import Products from '../models/Products'

const product = ({ laptops }) => {
  console.log(laptops)
  return (
    <section className="text-gray-600 body-font mx-12">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Our Products</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(laptops).map((product) => {
            return (<div key={laptops[product]._id} className="p-4 lg:w-1/4 md:w-1/2 my-6 shadow-md mx-6">
              <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full mb-1" src={laptops[product]['image']} />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">{laptops[product].title}</h2>
                  <p className="mb-4">{laptops[product].desc}</p>
                  <div className="m-2">
                    {laptops[product].size.includes("S") && <span className="mt1 border border-grey-300 px-2 mx-1">S</span>}
                    {laptops[product].size.includes("M") && <span className="mt1 border border-grey-300 px-2 mx-1">M</span>}
                    {laptops[product].size.includes("L") && <span className="mt1 border border-grey-300 px-2 mx-1">L</span>}
                    {laptops[product].size.includes("XL") && <span className="mt1 border border-grey-300 px-2 mx-1">XL</span>}
                  </div>
                  <div className="m-2">
                    {laptops[product].color.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                    {laptops[product].color.includes("white") && <button className="border-2 border-gray-300 ml-1 bg-white-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {laptops[product].color.includes("green") && <button className="border-2 border-gray-300 ml-1 bg-green-300 rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <button className="btn bg-pink-400 border-0 p-3 rounded-md text-sm font-semibold text-black">Add To Cart</button>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <Link legacyBehavior href={"/product/" + laptops[product].slug}><button className="btn bg-pink-400 border-0 p-3 rounded-md text-sm font-semibold text-black">Buy Now</button></Link>
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

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let products = await Products.find();

  let laptops = {};
  for (let item of products) {
    if (item.title in laptops) {
      if (!laptops[item.title].color.includes(item.color) && item.quantity > 0) {
        laptops[item.title].color.push(item.color)
      }
      if (!laptops[item.title].size.includes(item.size) && item.quantity > 0) {
        laptops[item.title].size.push(item.size)
      }
    }
    else {
      laptops[item.title] = {};
      if (item.quantity > 0) {
        laptops[item.title] = JSON.parse(JSON.stringify(item));
        laptops[item.title].color = [item.color];
        laptops[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { laptops: JSON.parse(JSON.stringify(laptops)) }, // will be passed to the page component as props
  }
}
export default product