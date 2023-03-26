import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { img, price, name, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="btn-cart">Add to card</button>;
    </div>
  );
};

export default Product;
