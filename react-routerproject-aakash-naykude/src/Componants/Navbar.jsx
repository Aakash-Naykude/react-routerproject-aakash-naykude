import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const Div = styled.div`
    height: 100px;
    margin-top: -15px;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    display: flex;
    div {
      display: flex;
      margin-left: 20%;
    }
    .width {
      margin-top: 10%;
      margin-left: 20px;
    }
    ion-icon {
      margin-top: 100%;
      margin-left: 15px;
    }
  `;
  const Image = styled.img`
    src: "https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052";
    alt: "Image";
    padding: 22px;
  `;
  return (
    <Div>
      <Link to={"/"}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052"
          alt="img"
        />
      </Link>

      <div>
        <p className="width">Tanner Goods</p>
        <p className="width">Mazama Wares</p>

        <p className="width">
          <Link to={"/contact"}>Contact Us</Link>
        </p>
        <p className="width">
          <Link to={"/about"}>About Us</Link>
        </p>
        <p className="width">
          <Link to={"/faq"}>FAQ</Link>
        </p>
      </div>
      <div>
        <Link className="icons" to={"/"}>
          <ion-icon size="large" name="person-outline"></ion-icon>
        </Link>
        <Link className="icons" to={"/"}>
          <ion-icon size="large" name="search-outline"></ion-icon>
        </Link>
        <Link className="icons" to={"/cart"}>
          <ion-icon size="large" name="bag-outline"></ion-icon>
        </Link>
      </div>
    </Div>
  );
}

export default Navbar;
