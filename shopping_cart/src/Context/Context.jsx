import React, { createContext, useContext, useReducer } from "react";
// import faker from "faker"
import {faker} from "@faker-js/faker"
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99); // every time change data

const Context = ({ children }) => {

    const products = [...Array(50)].map(() => ({

        id : faker.datatype.uuid(),//database
        name : faker.commerce.productName(),//name
        price : faker.commerce.price(),//price
        image : faker.image.image(),//imgae
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]), //stock hoy ke ni
        FastDelivery : faker.datatype.boolean(),// fasst divisry
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]), //rating
    }));
    // console.log(products); 
     
    const [state,dispatch] = useReducer(cartReducer,{
      products:products,
      Cart:[]
    })

    const [productState, ProductDispatch] = useReducer(productReducer,{
      byStock:false,
      byFastDelivery:false,
      byRating:0,
      searchQuery:"",
    });

  return <Cart.Provider value={{state, dispatch, productState, ProductDispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = ()=>{
  return useContext(Cart);
}
