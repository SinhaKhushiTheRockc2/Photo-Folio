// Importing css
import { useContextValues } from "../../photoContext";
import imageStyle from "./Image.module.css";

// Carousel component
export default function Carousel() {
  // Fetching context values
  const {
    selectedAlbum,
    currentImageIndex,
    setCurrentImageIndex,
    setShowCarousel,
  } = useContextValues();

  //   Function to navigate to the previous image
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedAlbum.photos.length - 1 : prevIndex - 1
    );
  };

  //   Function to navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedAlbum.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   Function to close the carousel window
  const closeCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <>
    {/* Carousel container */}
      <div className={imageStyle.carouselContainer}>
        {/* Close button */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/190/190406.png"
          alt="close button"
          className={imageStyle.closeBtn}
          onClick={closeCarousel}
        />
        {/* Previous button */}
        <img
          src="https://cdn-icons-png.freepik.com/512/25/25705.png"
          alt="previous button"
          className={imageStyle.previousBtn}
          onClick={previousImage}
        />
        {/* Image */}
        <img
          src={selectedAlbum.photos[currentImageIndex].imageUrl}
          alt={selectedAlbum.photos[currentImageIndex].imageTitle}
          className={imageStyle.carouselImage}
        />
        {/* Next button */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25318.png"
          alt="next button"
          className={imageStyle.nextBtn}
          onClick={nextImage}
        />
      </div>
    </>
  );
}
