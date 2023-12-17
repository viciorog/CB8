import "./index.css";
import { useState } from "react";
import Gallery from "../gallery/Gallery";

const GalleryList = ({ galleryListObj }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImg = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex + 1) % galleryListObj.list.length
    );
  };

  const prevImg = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? galleryListObj.list.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-list">
      {/* {galleryListObj.list.map((image) => (
        <Gallery galleryObj={image} key={image.id} />
      ))} */}
      <button onClick={prevImg}>⇦</button>
      <Gallery
        galleryObj={galleryListObj.list[currentImage]}
        key={galleryListObj.list[currentImage].id}
      />
      <button onClick={nextImg}>⇨</button>
    </div>
  );
};

export default GalleryList;
