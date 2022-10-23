import React from "react";
import "./Cart.css"

function Cart({ cart }) {
  return (
    <div>
      {
        cart.map((cartItem) => {
            return (
                <div className="cartdiv">
                  <img src={cartItem.productsImg} alt="" className="cartimg"/>
                  <span className="cartinfo">{cartItem.productsInfo}</span>
                  <div id="incdecdiv">
                  <button className="cartbtn">-</button>
                  <span className="cartquan">{cartItem.quantity}</span>
                  <button className="cartbtn">+</button>
                  </div>
                  <span className="cartprice">{cartItem.productsPrice}</span>
                </div>
            );
      })
    }
    </div>
  );
}

export default Cart;
