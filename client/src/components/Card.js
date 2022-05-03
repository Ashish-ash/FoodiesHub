import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/foodAction";
export default function Card({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [Variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addtoCart = () => {
    dispatch(addToCart(food, quantity, Variant));
  };
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow} className="img-container">
        <h1>{food.name}</h1>
        <img src={food.image} className="main-img" alt="" />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variant</p>
          <select
            value={Variant}
            onChange={(e) => setVariant(e.target.value)}
            className="form-control"
          >
            {food.variants.map((variants) => {
              return <option value={variants}>{variants}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price: {food.prices[0][Variant] * quantity}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtoCart}>
            {" "}
            Add to cart
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ width: "100%" }}>
            <img
              className="img-fluid"
              src={food.image}
              alt="food-img"
              style={{
                height: "400px",
                borderRadius: "10px",
                display: "block",
                margin: "auto",
              }}
            />
            <p>{food.description}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}