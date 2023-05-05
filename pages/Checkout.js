import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai';

const Checkout = ({ cart, subTotal, clearCart }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-4 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
                    </div>
                    <div className="mx-auto lg:w-2/3 mb-8">
                        <h2 className='text-gray-900 font-thick font-medium text-2xl'>1.Delivery Details</h2>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-4">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-4">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Address</label>
                            <textarea type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-4">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Phone</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">City</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end mb-4">
                        <div className="relative flex-grow w-full">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">State</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">PinCode</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    <div className="mx-auto mt-8">
                        <div className="mx-auto lg:w-2/3 mb-4">
                            <h2 className='text-gray-900 font-thick font-medium text-2xl'>2. Review Cart Items & Pay</h2>
                        </div>
                        <div className={`mx-auto lg:w-2/3 mb-4 bg-pink-300 px-11 py-4 rounded-md`}>
                            <ol>
                                {Object.keys(cart).length == 0 && <div>Checkout Items are empty!</div>}
                                {Object.keys(cart).map((item) => {
                                    return <li key={item}> {cart[item].itemName + ` (${cart[item].color})/${cart[item].size}`} {cart[item].qty}</li>
                                })}
                            </ol>
                            <div className="my-2">
                                <div className='mx-2 rounded-md my-4 py-2'>SubTotal : ₹{subTotal}</div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto lg:w-2/3 mb-8">
                        {Object.keys(cart).length > 0 && <div className='flex items-center '>
                            <button className='my-2 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg'>Pay ₹{subTotal}</button> </div>}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Checkout