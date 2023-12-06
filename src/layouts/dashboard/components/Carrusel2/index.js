import React from "react";
import ImageGallery from "react-image-gallery";
import "./styles.css";

const images = [
  {
    original: "https://picsum.photos/id/1024/1000/600/",
    thumbnail: "https://picsum.photos/id/1024/250/150/",
  },
];

function Carrusel2() {
  return (
    <div className="app">
      <div className="my-component-container">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Carrusel2;
