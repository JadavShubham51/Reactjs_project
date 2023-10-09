import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

//componets
//all componets in browserRouter as childern me work karege
const AppContext = ({ children }) => {
  const [categories, setcategories] = useState();
  const [products, setproducts] = useState();

  // cart mate

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  useEffect(() => {

    let count = 0;
    cartItems.map(item => count += item.attributes.quantity)
    setCartCount(count)

    let subtotal = 0;
    cartItems.map(item => subtotal += item.attributes.price * item.attributes.quantity)
    setCartSubTotal(subtotal)
  }, [cartItems]);

  const handleaddtocart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(p=>p.id === product.id)
    if(index !== -1){
      items[index].attributes.quantity += quantity // product he 
    }
    else{
      product.attributes.quantity = quantity 
      items = [...items,product];
    }
    setCartItems(items);
  };

  const handleremoveFromcart = (product) => {
    let items = [...cartItems];
    items = items.filter(p=> p.id !== product.id)
    setCartItems(items)
  };

  const handlecartProductQuntity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex(p=>p.id === product.id)
    if(type === 'inc'){
      items[index].attributes.quantity += 1
    }
    else if(type === 'dec'){
      if(items[index].attributes.quantity === 1)return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items)
  };

  return (
    <Context.Provider
      value={{
        categories,
        setcategories,
        products,
        setproducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleaddtocart,
        handleremoveFromcart,
        handlecartProductQuntity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
