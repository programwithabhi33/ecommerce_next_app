import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-slate-100 shadow-lg sticky top-0 z-30'>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Programwithabhi</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-green-900 cursor-pointer">About Me</a>
            <a className="mr-5 hover:text-green-900 cursor-pointer">Contact Me</a>
            <a className="mr-5 hover:text-green-900 cursor-pointer">Third Link</a>
            <a className="mr-5 hover:text-green-900 cursor-pointer">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-pink-400 border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded text-base mt-4 md:mt-0">Button
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar