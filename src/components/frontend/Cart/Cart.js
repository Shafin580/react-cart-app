import React from "react";
import "./cart.css";
const Cart = (props) => {
    const totalPrice = props.item.reduce(
        (price, item) => price + item.quantity * item.price, 0
    )
  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
          {props.item.length >= 1 &&(
              <button className="btn btn-warning">Clear Cart</button>
          )}
      </div>

      {props.length === 0 && (
        <div className="cart-items-empty">No items are added in the cart</div>
      )}

      <div>
        {props.map((item) => {
          return (
            <div key={item.id} className="cart-items-list">
              <img
                src={item.image}
                alt={item.name}
                className="cart-items-image"
              />
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-item-function">
                  <button className="cart-items-add btn btn-success">+</button>
                  <button className="cart-items-remove btn btn-danger">-</button>
              </div>
              <div className="car-items-price">
                  {item.quantity} * {item.price}$
              </div>
              <div className="cart-items-total-price-name">
                Total price
                <div className="cart-items-total-price">{totalPrice}$</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
