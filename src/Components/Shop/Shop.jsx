import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Product/Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // Step 1: get id of the addedProduct
    for (const id in storedCart) {
      // Step 2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      console.log(addedProduct);
      if (addedProduct) {
        // Step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // Step 4: add the addedProduct to yhe saved the cart
        savedCart.push(addedProduct);
      }
      console.log(addedProduct);
    }
    // Step 5: Set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
