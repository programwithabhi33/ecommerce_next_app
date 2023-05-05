import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { AiFillCloseCircle, AiOutlineShoppingCart, AiFillPlusCircle, AiFillMinusCircle, AiOutlineShopping } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useState } from 'react';
const Navbar = ({ logout, user, cart, addToCart, removeFromCart, subTotal, clearCart }) => {

  const ref = useRef('')
  const handleClick = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }
  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <nav className='bg-slate-100 shadow-lg sticky top-0 z-30'>
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
            <Image src="/myLogo2.png" alt="Picture of the author" width={50} height={50} />
            <span className="ml-3 text-xl">Programwithabhi</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href={"/"}><a className="mr-5 hover:text-pink-900 cursor-pointer">About Me</a></Link>
            <Link legacyBehavior href={"/"}><a className="mr-5 hover:text-pink-900 cursor-pointer">Contact Me</a></Link>
            {/* <Link legacyBehavior  href={"/sample"}><a className="mr-5 hover:text-pink-900 cursor-pointer">My Projects</a></Link> */}
            <Link legacyBehavior href={"/products"}><a className="mr-5 hover:text-pink-900 cursor-pointer">Products</a></Link>
          </nav>
          <div className="flex items-center my-2">
            {!user.value && <button className="bg-pink-700 mx-2 px-2 py-1 rounded-md text-white"><Link href={"/login"}>Login</Link></button>}
            {dropdown && <div onMouseLeave={() => { setDropdown(false) }} onMouseOver={() => { setDropdown(true) }} className="absolute top-12 right-12 bg-white shadow-lg border border-pink-300 rounded-md px-4 py-2 text-pink-700 font-bold">
              <ul>
                <Link href={"/account"}><li className='py-1 hover:shadow-md rounded-lg px-2'>My Account</li></Link>
                <Link href={"/checkout"}><li className='py-1 hover:shadow-md rounded-lg px-2'>Checkout</li></Link>
                <li className=' hover:shadow-md first-line:py-1 cursor-pointer rounded-lg px-2' onClick={() => { setDropdown(false); logout() }}><a>Logout</a></li>
              </ul>
            </div>}
            {user.value && <Link onMouseLeave={() => { setDropdown(false) }} onMouseOver={() => { setDropdown(true) }} href={'/login'}><MdAccountCircle className='cursor-pointer font-semibold text-2xl mr-2' /></Link>}
            <AiOutlineShoppingCart className='cursor-pointer font-semibold text-2xl mr-2' onClick={handleClick} />
          </div>
        </div>
        <div ref={ref} className={`sideCart absolute h-[100vh] top-0 right-0 bg-pink-300 px-11 py-4 transition-all translate translate-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
          <AiFillCloseCircle onClick={handleClick} className='cursor-pointer text-xl absolute right-1 top-1' />
          <ol>
            {Object.keys(cart).length == 0 && <div>Your cart is Empty!</div>}
            {Object.keys(cart).map((item) => {
              return <li key={item}><AiFillMinusCircle onClick={() => { removeFromCart(item, cart[item].qty) }} className='m2-0 cursor-pointer inline' /> {cart[item].itemName + ` (${cart[item].color})/${cart[item].size}`} {cart[item].qty}<AiFillPlusCircle onClick={() => { addToCart(cart[item].itemCode, cart[item], 2, cart[item].price, cart[item].size) }} className='m-2 cursor-pointer inline' /></li>
            })}
          </ol>
          <div className="my-2">
            {Object.keys(cart).length > 0 && <button onClick={clearCart} className="btn bg-pink-500 px-2 py-2 rounded-md m-2">Clear Cart</button>}
            <button className='px-2 rounded-md my-2 py-2'>Subtotal: ₹{subTotal}</button>
          </div>

          {Object.keys(cart).length > 0 && <Link href={"/Checkout"} className="bg-pink-600 flex items-center rounded-md cursor-pointer px-1 justify-center">
            <AiOutlineShopping/>
            <button className='px-2 rounded-md my-2'>Checkout</button>
          </Link>}
        </div>
      </nav>
      <div className="text-center py-4 lg:px-4 cursor-pointer">
        <div className="p-2 bg-green-600 items-center text-pink-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
          <span className="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
          <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
        </div>
      </div>
    </>
  )
}

export default Navbar