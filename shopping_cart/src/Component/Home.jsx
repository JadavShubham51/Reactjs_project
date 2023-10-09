import React from "react";
import { CartState } from "../Context/Context";
import SingleProducts from "./SingleProducts";
import "./styles.css"
import Fliters from "./Fliters";

const Home = () => {
  const {
    state: { products },
    productState:{byStock,byFastDelivery,sort,byRating,searchQuery}
  } = CartState();
  
  const transfromProduct =()=>{
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=>
        sort==="lowToHigh"?a.price-b.price:b.price-a.price
      )
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod)=>prod.inStock);
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod)=>prod.FastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter(
        (prod)=>prod.ratings >= byRating
      )
    }
    if(searchQuery){
      sortedProducts=sortedProducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts
  }

  return <div className="home">
    <Fliters/>
    <div className="productcontainer">
      {
        transfromProduct().map((prod)=>{
          return <SingleProducts prod={prod} key={prod.id} />
        })
      }

    </div>
  </div>;
};

export default Home;
