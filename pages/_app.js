import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
        let sub = 0;
        Object.keys(JSON.parse(localStorage.getItem("cart"))).map((key)=>{
          console.log(cart[key])
          sub += cart[key].qty * cart[key].price;
        })
        setsubTotal(sub)
      }
    }
    catch(error){
      console.error(error)
      localStorage.clear();
    }
   
  }, [])
  

 let addToCart = (itemCode,itemName,qty,price,size)=>{
    let newCart = cart;
    if(itemCode in newCart){
      newCart[itemCode]['qty'] = cart[itemCode].qty+1;
    }
    else{
      newCart[itemCode] = {itemCode,itemName,qty,price,size};
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
  
  return <>
  <Navbar key={subTotal} cart={cart}  addToCart={addToCart} saveCart={saveCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component  cart={cart} addToCart={addToCart} saveCart={saveCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
