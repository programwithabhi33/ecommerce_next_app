import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { AiFillCloseCircle } from 'react-icons/ai';
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
            <Link legacyBehavior  href={"/sample"}><a className="mr-5 hover:text-pink-900 cursor-pointer">My Projects</a></Link>
            <Link legacyBehavior  href={"/products"}><a className="mr-5 hover:text-pink-900 cursor-pointer">My Products</a></Link>
          </nav>
          <button onClick={handleClick} className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0">Button
          </button>
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
    </>
  )
}

export default Navbar