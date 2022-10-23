import React, { useEffect, useState } from "react";
import "./Cart.css"

function Cart({ cart }) {

    const [CART,setCART] = useState([])
    useEffect(() => {
        setCART(cart)
    },[cart])


  return (
    <div>
      {
        CART.map((cartItem,cartindex) => {
            return (
                <div className="cartdiv">
                  <img src={cartItem.productsImg} alt="" className="cartimg"/>
                  <span className="cartinfo">{cartItem.productsInfo}</span>
                  <div id="incdecdiv">
                  <button className="cartbtn">-</button>
                  <span className="cartquan">{cartItem.quantity}</span>
                  <button className="cartbtn" onClick={() => {

                    const _CART = CART.map((item,index) => {
                        return (
                            cartindex === index ?{...item,quantity : item.quantity + 1} : item
                        )
                    })

                  }}>+</button>
                  </div>
                  <span className="cartprice">${cartItem.productsPrice * cartItem.quantity}</span>
                </div>
            );
      })
    }
        <p className="totalpay">
            Total :- $
            {
              CART.map(item => item.productsPrice * item.quantity).reduce((total,value) => total + value, 0)
            }

            <button className="btnpay">Pay</button>
        </p>
    </div>
  );
}

export default Cart;
