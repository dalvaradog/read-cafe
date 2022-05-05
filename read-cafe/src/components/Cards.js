import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC coffees</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image1.jpg"
              text="Explore the delicious taste deep inside a glorious cup of espresso"
              label="Espresso"
              path="/services"
            />
            <CardItem
              src="images/image2.jpg"
              text="We brew your coffee to your liking. Take our survey to see what we recommend!"
              label="Brewing"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image6.jpg"
              text="Let's create art together. Enjoy your delicious coffee with some amazing latte art"
              label="Latte Art"
              path="/services"
            />
            <CardItem
              src="images/image4.jpg"
              text="Our artists are quite talented, check all of the amazing designs they have created"
              label="Latte Art"
              path="/services"
            />
            <CardItem
              src="images/image5.jpg"
              text="We brew your coffee according to what you like. Take our survey to see what we recommend!"
              label="Brewing"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
