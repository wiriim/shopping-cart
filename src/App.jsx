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
    //check if product with title x is in existing cart
    if (updatedCart.some(prod => prod.title == product.title)){
      updatedCart.map(prod => prod.title == product.title 
        ? prod.amount += product.amount 
        : null);
    }
    else{
      updatedCart.push(product);
    }
    //if yes update cart with new cart that has updated amount
    //else update cart with new item and amount
    setCart(updatedCart);
    console.log(updatedCart);
  }
  
  return (
    <>
      <Navbar cart={cart}/>
      <Outlet context={[products, addToCart]}/>
    </>
  )
}

export default App
