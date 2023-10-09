import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

import Cart from "../Cart/Cart";
import Search from "./Search/Search";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // Its use for show cart or not
  const [showCart, setshowCart] = useState(false);
  //search button working show or not use
  const [showsearch, setshowsearch] = useState(false);

  const {cartCount} = useContext(Context);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log((offset));
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ELECTRONIC_STORE
          </div>
          <div className="right">
            <TbSearch onClick={() => setshowsearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setshowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setshowCart} />}
      {showsearch && <Search setshowsearch={setshowsearch} />}
    </>
  );
};

export default Header;
