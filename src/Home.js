import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Slider from "./components/Slider/Slider"
import Product from "./components/Products/Product"
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function Home() {

  // api for products 
  const [Products, setproducts] = useState([
    {
      productsImg:"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/phone.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "IPHONE X",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "196.00",
      priceStrike: "230.99",
    },
    {
        productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/laptop__1_.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "LAPTOP LINOVO",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "126.00",
      priceStrike: "230.99",
    },
    {
        productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/camera.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "CAMERA CANON",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "106.00",
      priceStrike: "230.99",
    },
    {
        productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/headphones.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "HEADPHONES BOAT",
      subproductInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "139.00",
      priceStrike: "230.99",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/iron__1_.png",
        productsTitle:"ELECTRONICS ITEM",
      productsInfo: "IRON",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productsPrice: "150.00",
        priceStrike: "230.99",
      },
    {
      productsImg:
      "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/washing-machines.png",
        productsTitle:"ELECTRONICS ITEM",
      productsInfo: "WASHING MACHINE",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "166.00",
      priceStrike: "230.99",
    },
  ]);


  const [cart,setcart] = useState([])
  const [showcart,setshowcart] =useState(false)

  console.log(cart);
  const addToCart = (data) =>{
    setcart([...cart,{...data, quantity : 1}])
  }


  const handleShow = (value) => {
    setshowcart(value);
  }

  return (
    <div>
    <Navbar count={cart.length} handleShow={handleShow}/>
    <Slider />
    {
      showcart ?
      <Cart cart={cart}/> :
      <Product Products={Products} addToCart={addToCart}/> 
    }
    </div>
  )
}

export default Home