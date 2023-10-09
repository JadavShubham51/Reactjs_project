import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            quasi a odio autem repellendus est nulla ut voluptatem illo
            perferendis consequuntur cumque dignissimos laudantium amet dolore
            doloribus
          </div>
        </div>
        <div className="col">
          <div className="title">
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">
                Kayaloream rd, punnamado, Kattankilangera , alappuzha, kerala,
                686868
              </div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: 03242 272 4723</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email :- shubhamjadav@gamil.com</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Hadphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Home Theatre</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                E-ELECTRONIC 2023 CREATED BY ME, PERMIUM E_COMERS SOLUTIONS
            </div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
