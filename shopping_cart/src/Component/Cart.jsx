import React, { useEffect, useState } from "react";
import { CartState } from "../Context/Context";
import { ListGroup,Button, Row, Col,Form,Image } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { Cart },
    dispatch,
  } = CartState();

  const [total,setTotal]= useState();

  useEffect(()=>{
    setTotal(Cart.reduce((acc,curr)=>acc+ Number(curr.price)*curr.qty, 0));
  },[Cart])

  return <div className="home">
    <div className="productcontainer">
      <ListGroup>
        {
          Cart.map(prod =>(
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings}/>
                </Col>
                <Col md={2}>
                  {/* //qty find */}
                  <Form.Select as="select" value={prod.qty}
                    onChange={(e)=>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload:{
                        id:prod.id,
                        qty:e.target.value,
                      },
                    })}
                  >
                    {
                      [...Array(prod.inStock).keys()].map((x)=>(
                        <option key={x+1}>{x + 1}</option>
                      ))
                    }
                  </Form.Select>
                </Col>
                <Col>
                <Button
                type="button"
                variant="light"
                onClick={()=>
                      dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod,
                      })}>
                      <AiFillDelete fontSize="20px" />
                </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
    <div className="filters summary">
        <span className="title">
          Subtotal ({Cart.length}) items
        </span>
        <span style={{fontWeight:700,fontSize:20}}>Total: ₹ {total}</span>
        <Button type="button" disabled={Cart.length === 0 }>Proceed to Checkout</Button>
    </div>
  </div>;
};

export default Cart;
