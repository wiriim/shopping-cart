import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import { useState, useEffect } from "react";

function App() {
  const URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
      async function fetchProducts(){
        const response = await fetch(URL);
        const allProducts = await response.json();
        const slicedProducts = allProducts.slice(0, 8);
        console.log(slicedProducts); 
        setProducts(slicedProducts);
      }

      fetchProducts();
  }, [])

  function addToCart(product){
    let updatedCart = [...cart];
    if (updatedCart.some(prod => prod.title == product.title)){
      updatedCart.map(prod => prod.title == product.title 
        ? prod.amount += product.amount 
        : null);
    }
    else{
      updatedCart.push(product);
    }
    if (!isNaN(product.amount))
      setCart(updatedCart);
  }

  function removeFromCart(product){
    let updatedCart = [...cart];
    updatedCart.map(prod => prod.title == product.title 
      ? prod.amount -= product.amount 
      : null)

    updatedCart = updatedCart.filter(prod => prod.amount != 0);

    if (!isNaN(product.amount))
      setCart(updatedCart);
  }
  
  return (
    <>
      <Navbar cart={cart}/>
      <Outlet context={{products, addToCart, cart, removeFromCart}}/>
    </>
  )
}

export default App
