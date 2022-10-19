import React from "react";
import { useState } from "react";
import "./Product.css";

function Product({Products}) {

  return (
    <div className="prdct">
    <h2 className="prdct_h2">Products</h2>
    <div className="prdct_flex">
      {Products.map((prdct,prdctIndex) => {
        return (
          <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
              <img src={prdct.productsImg} alt="" />
            </div>
            <div className="product-details">
              <span className="product-catagory">{prdct.productsTitle}</span>
              <h4><a href="">{prdct.productsInfo}</a></h4>
              <p>{prdct.subproductInfo}</p>
              <div className="product-bottom-details">
                <div className="product-price">
                  <small>{prdct.priceStrike}</small>{prdct.productsPrice}
                </div>
                <div className="product-links">
                  <a href="">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
            <button id="addtocart"   onClick={() => addToCart(prdct)}>Add to Cart</button>
          </div>
          );
        })}
        </div>
    </div>
  );
}

export default Product;
