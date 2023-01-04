import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

 let addToCart = (itemCode,itemName,qty,price,size)=>{
  console.log("add to cart")
  console.log(`itemCode = ${itemCode} itemName = ${itemName} qty= ${qty} price= ${price} size = ${size}`)
    let newCart = cart;
    if(itemCode in newCart){
      newCart[itemCode]['qty'] = cart[qty]+1;
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
      sub += key.qty * key.price;
    })
    setsubTotal(sub)
    // Storing cart in localStorage 
    // localStorage.setItem(json);
  }

  let deleteCart = (itemCode)=>{
    setCart({})

    // We are giving an empty object ot the saveCart because setCart takes time to update the cart 
    saveCart({})
  }
  let removeFromCart = (itemCode)=>{
    if(cart[itemCode].qty <=0 ){
      delete cart[itemCode];
    }
    else{
      cart[itemCode].qty = cart[itemCode].qty -1; 
    }
  }
  
  return <>
  <Navbar cart={cart}  addToCart={addToCart} saveCart={saveCart} removeFromCart={removeFromCart} deleteCart={deleteCart} subTotal={subTotal} />
  <Component  cart={cart} addToCart={addToCart} saveCart={saveCart} removeFromCart={removeFromCart} deleteCart={deleteCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
