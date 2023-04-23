import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [abhi, setAbhi] = useState(0)
  const [user, setUser] = useState({value:null})

  // getting the token from the localStorage and setting the state of user if the token in successfully get from the localStorage or token is presetn in the localStorage

  useEffect(() => {
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
        setTimeout(() => {
          setAbhi("abhishek")
        }, 4000);
      }
    }
    catch(error){
      console.error(error)
      localStorage.clear();
    }
    let token = localStorage.getItem("token")
    if(token){
      setUser({value:token})
    }
  }, [router.query])
  

 let addToCart = (itemCode,itemName,qty,price,size,color)=>{
    let newCart = cart;
    if(itemCode in newCart){
      newCart[itemCode]['qty'] = cart[itemCode].qty+1;
    }
    else{
      newCart[itemCode] = {itemCode,itemName,qty,price,size,color};
    }
    saveCart(newCart)
    setCart(newCart)
  }
  let saveCart = (cart)=>{
    let sub = 0;
    Object.keys(cart).map((key)=>{
      sub += cart[key].qty * cart[key].price;
    })
    setsubTotal(sub)
    // Storing cart in localStorage 
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  let clearCart = (itemCode)=>{
    setCart({})

    // We are giving an empty object ot the saveCart because setCart takes time to update the cart 
    saveCart({})
  }
  let removeFromCart = (itemCode,qty)=>{
    let newCart = cart;
    console.log(newCart[itemCode].qty)
    if(newCart[itemCode].qty >= 2 ){  
      newCart[itemCode].qty = newCart[itemCode].qty -1; 
    }
    else{
      delete newCart[itemCode]; 
    }
    saveCart(newCart)
    setCart(newCart)
  }

  const buyNow = (itemCode,itemName,qty,price,size,color)=>{
    const newCart = {itemCode:{itemCode,itemName,qty:1,price,size,color}}
    saveCart(newCart);
    setCart(newCart)
  }
  const logout = ()=>{
    setUser({value:null})
    localStorage.removeItem("token")
  }
  
  return <>
  {/* When you passing key prop to component that means the component only render if the key is defined or something like that i'm not sure about that  */}
  <Navbar logout={logout} user={user} key={user} cart={cart}  addToCart={addToCart} saveCart={saveCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component  cart={cart} buyNow={buyNow} addToCart={addToCart} saveCart={saveCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
