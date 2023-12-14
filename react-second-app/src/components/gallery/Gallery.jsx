import "./index.css";

const Gallery = ({ galleryObj }) => {
  return (
    <div className="gallery">
      <img src={galleryObj.img} alt={galleryObj.title} />
    </div>
  );
};

export default Gallery;
