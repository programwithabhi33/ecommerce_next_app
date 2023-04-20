import React, { useState } from 'react'
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    // handle change function applied on the input and getting corresponding values and set the state variables 
    const handleChange = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value);
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name == "password") {
            setPassword(e.target.value);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById("sign_up").setAttribute("disabled", true)
        // console.log("form submitted")

        let formData = { name, email, password };
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        };

        let res = await fetch('http://localhost:3000/api/signup', options)
        let response_json = await res.json();
        document.getElementById("sign_form").reset();
        document.getElementById("sign_up").setAttribute("disabled", false)
        toast('👍 Your Account Has Been Created Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0">
                        <form id="sign_form" onSubmit={handleSubmit}>
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input onChange={handleChange} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onChange={handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                                <input onChange={handleChange} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button id="sign_up" type="submit" className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg w-full">Sign up</button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">Already have an account <Link className="underline" href={"/login"}>Go to your account</Link></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default signup;