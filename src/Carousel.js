import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);
  let rightHide = cardIdx === 2 ? 'Carousel-hidden fas fa-chevron-circle-right fa-2x' : 'fas fa-chevron-circle-right fa-2x';
  let leftHide = cardIdx === 0 ? 'Carousel-hidden fas fa-chevron-circle-left fa-2x' : 'fas fa-chevron-circle-left fa-2x';
  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <i
          className={leftHide}
          onClick={goBackward}
          data-testid="left-arrow"
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={rightHide}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
