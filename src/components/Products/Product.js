import React from "react";
import { useState } from "react";
import "./Product.css";

function Product() {

  
  const [Products, setproducts] = useState([
    {
      productsImg:"https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/phone.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "IPHONE X",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "$196.00",
      priceStrike: "$230.99",
    },
    {
        productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/laptop__1_.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "LAPTOP LINOVO",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "$126.00",
      priceStrike: "$230.99",
    },
    {
        productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/camera.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "CAMERA CANON",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "$106.00",
      priceStrike: "$230.99",
    },
    {
        productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/headphones.png",
      productsTitle:"ELECTRONICS ITEM",
      productsInfo: "HEADPHONES BOAT",
      subproductInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "$139.00",
      priceStrike: "$230.99",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/iron__1_.png",
        productsTitle:"ELECTRONICS ITEM",
      productsInfo: "IRON",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        productsPrice: "$150.00",
        priceStrike: "$230.99",
      },
    {
      productsImg:
      "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/washing-machines.png",
        productsTitle:"ELECTRONICS ITEM",
      productsInfo: "WASHING MACHINE",
      subproductInfo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
      productsPrice: "$166.00",
      priceStrike: "$230.99",
    },
  ]);

  
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
            <button id="addtocart">Add to Cart</button>
          </div>
          );
        })}
        </div>
    </div>
  );
}

export default Product;
