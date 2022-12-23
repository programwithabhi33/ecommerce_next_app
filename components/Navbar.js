import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { AiFillCloseCircle,AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  const ref = useRef('')
  const handleClick = ()=>{
    if(ref.current.classList.contains("translate-x-full")){
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else{
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }
  
  
  return (
    <>
      <nav className='bg-slate-100 shadow-lg sticky top-0 z-30'>
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/myLogo2.png" alt="Picture of the author" width={50} height={50}/>
            <span className="ml-3 text-xl">Programwithabhi</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior  href={"/"}><a className="mr-5 hover:text-pink-900 cursor-pointer">About Me</a></Link>
            <Link legacyBehavior  href={"/"}><a className="mr-5 hover:text-pink-900 cursor-pointer">Contact Me</a></Link>
            {/* <Link legacyBehavior  href={"/sample"}><a className="mr-5 hover:text-pink-900 cursor-pointer">My Projects</a></Link> */}
            <Link legacyBehavior  href={"/products"}><a className="mr-5 hover:text-pink-900 cursor-pointer">Products</a></Link>
          </nav>
          <AiOutlineShoppingCart className='cursor-pointer font-semibold text-2xl mr-2' onClick={handleClick}/>
        </div>
      <div ref={ref} className="sideCart absolute top-0 right-0 bg-pink-600 px-11 py-4 transition-all translate translate-transform translate-x-full">
      <AiFillCloseCircle onClick={handleClick} className='cursor-pointer text-xl absolute right-1 top-1'/>
       <ol>
        <li>abhishek</li>
        <li>abhishek2</li>
        <li>abhishek3</li>
       </ol>
      </div>
      </nav>
      <div className="text-center py-4 lg:px-4 cursor-pointer">
  <div className="p-2 bg-green-600 items-center text-pink-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
    <span className="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
    <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>
    </>
  )
}

export default Navbar