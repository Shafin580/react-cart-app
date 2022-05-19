import React from "react";
import "./products.css";

const Products = (props) => {
  return (
    <div>
      <div className="card card-c">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.price}$
          </p>
          <button className="btn btn-primary" onClick={() => props.handleAddProduct(props.product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
