import "./index.css";
import Gallery from "../gallery/Gallery";

const GalleryList = ({ galleryListObj }) => {
  return (
    <div className="gallery-list">
      {galleryListObj.list.map((image) => (
        <Gallery galleryObj={image} key={image.id} />
      ))}
    </div>
  );
};

export default GalleryList;
