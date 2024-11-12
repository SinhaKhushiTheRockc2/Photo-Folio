// Importing CSS
import { useState } from "react";
import { useContextValues } from "../../photoContext";
import imageStyle from "./Image.module.css";
import ImageForm from "./ImageForm";

// Image List
export default function ImageList({ album }) {
  // Fetching context values
  const { showImageForm, toggleImageFormVisibility,setCurrentView ,setSelectedAlbum,deleteImage,setSelectedImage,setImageTitle,setImageUrl,setImageId,setCurrentImageIndex,setShowCarousel} = useContextValues();
  console.log(showImageForm);
  console.log(album);

  const [searchQuery, setSearchQuery] = useState("");
  // Function that navigates us back to the album list
  const navigateToAlbumList = () => {
    setSelectedAlbum(null);
    setCurrentView('albumList');
  };

  // Function that handles image editing
  const handleEditImage=(image)=>{
    setSelectedImage(image); // Set the selected image for editing
    setImageTitle(image.imageTitle);
    setImageUrl(image.imageUrl);
    setImageId(image.id);
    toggleImageFormVisibility(); // Show the image form for editing
  }

  // Open carousel
  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setShowCarousel(true);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPhotos = album.photos.filter(photo =>
    photo.imageTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className={imageStyle.top_container}>
        {/* Back button to go back to the previous page */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/709/709624.png"
          alt="back-button"
          className={imageStyle.back_btn} onClick={navigateToAlbumList}
        />
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={handleSearch}
          className={imageStyle.searchBar}
        />
        {/* Button to add new image */}
        <button
          className={
            showImageForm ? imageStyle.setVisibility : imageStyle.addImage_btn
          }
          onClick={toggleImageFormVisibility}
        >
          Add Image
        </button>
      </div>
      <h1 className={imageStyle.headPrimary}>{album.photos.length===0?"No images found":"Your Images"}</h1>
      {showImageForm ? <ImageForm /> : undefined}
      {/* Parent image container to display the list of images in an album */}
      <div className={imageStyle.parentImageContainer}>
        {filteredPhotos.map((photo,index) => (
          <div className={imageStyle.mainImage_container} key={photo.id}>
            {/* Delete Button */}
            <img
              src="https://cdn-icons-png.freepik.com/512/3807/3807871.png"
              className={imageStyle.deleteBtn}
              alt="delete button" onClick={()=>deleteImage(photo.id)}
            />
            {/* Edit Button */}
            <img
              src="https://cdn-icons-png.freepik.com/512/5996/5996831.png"
              className={imageStyle.editBtn}
              alt="edit button" onClick={() => handleEditImage(photo)}
            />
            <div className={imageStyle.image_container} onClick={()=>openCarousel(index)}>
              {/* Image */}
              <img
                src={photo.imageUrl}
                alt={photo.imageTitle}
              />
              {/* Image Title */}
              <span className={imageStyle.imageTitle}>{photo.imageTitle}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

