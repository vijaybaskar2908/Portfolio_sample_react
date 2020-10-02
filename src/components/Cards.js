import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my EPIC Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Cryptocurrency listing and realtime graphs"
              label="Blockchain"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Erc-20 token with own decentralised exchange"
              label="Blockchain Exchange"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="UNISWAP AND SUSHISWAP Fork projects"
              label="Ethereum Defi"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Facebook clone with Server sidde rendering"
              label="MERN stack"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Amazon, Youtube and Netflix clone"
              label="MERN stack"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
