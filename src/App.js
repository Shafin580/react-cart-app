import React from "react";
import { useState } from "react";
import Header from "./components/frontend/Header/Header";
import Products from "./components/frontend/Products/Products";
import Signup from "./components/frontend/Signup/Signup";
import Cart from "./components/frontend/Cart/Cart";
import data from "./components/backend/data/data";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClear = () => {
    setCartItems([]);
  }
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container bg-secondary">
                <h2 className="text-warning">Products</h2>
                <div className="row">
                  {data.map((product) => {
                    return (
                      <div className="col-md-4 mb-3">
                        <Products
                          key={product.id}
                          name={product.name}
                          price={product.price}
                          image={product.image}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart items={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
