import React from "react";
import "./cart.css";
const Cart = (props) => {
  const totalPrice = props.items.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
        {props.items.length >= 1 && (
          <button className="btn btn-danger" onClick={props.handleCartClear}>Clear Cart</button>
        )}
      </div>

      {props.items.length === 0 && (
        <div className="cart-items-empty">No items are added in the cart</div>
      )}

      <div>
        {props.items.map((item) => {
          return (
            <div key={item.id} className="cart-items-list">
              <img
                src={item.image}
                alt={item.name}
                className="cart-items-image"
              />
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-item-function">
                <button className="cart-items-add btn btn-success" onClick={() => props.handleAddProduct(props.item)}>+</button>
                <button className="cart-items-remove btn btn-danger" onClick={() => props.handleRemoveProduct(props.item)}>-</button>
              </div>
              <div className="car-items-price">
                {item.quantity} * {item.price}$
              </div>
            </div>
          );
        })}
        <div className="cart-items-total-price-name">
          Total price
          <div className="cart-items-total-price">{totalPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
