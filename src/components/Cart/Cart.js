import React from "react";

function Cart({ cart }) {
  return (
    <div>
      {
        cart.map((cartItem) => {
            return (
                <div>
                  <img src={cartItem.productsImg} alt="" />
                  <span>{cartItem.productsInfo}</span>
                </div>
            );
      })
    }
    </div>
  );
}

export default Cart;
