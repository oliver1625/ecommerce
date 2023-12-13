import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "../css/Product.css";
import { getAllCart, postNewCartItem } from "../redux/action";

function Product(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const allCarts = useSelector((state) => state.carts);
  const postCarts = useSelector((state) => state.postCart);
  //   console.log(postCarts, "postCarts");

  const [modal, setModal] = useState(false);
  const [postData, setPostData] = useState({});
    console.log(postData, "postData");

  const handleSubmit = (item) => {
    console.log(data.id);

    setPostData((prevData) => ({
      userId: 5,
      date: "2029-02-03",
      products: [
        {
          productId: item.id,
          quantity: 1,
        },
        ...prevData.products,
      ],
    }));
    dispatch(postNewCartItem(postData));
    // setModal(!modal);
  };
  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="product-card">
        <div className="card-header">
          <p>{data.name}</p>
        </div>
        <div className="image">
          <img src={data.image} alt="" />
        </div>
        <div className="price">{data.price}</div>
        <div className="blink_me">Left in stock : {data.stock}</div>
        <div className="overlay">
          <Button
            className="add-cart"
            color="danger"
            onClick={() => {
              handleSubmit(data);
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
        <ModalBody>{/* {allCarts.map((item) => item.name)} */}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Product;
