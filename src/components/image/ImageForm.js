// Importing css
import { useContextValues } from "../../photoContext";
import imageStyle from "../album/Album.module.css";

// Image Form
export default function ImageForm() {
  // Fetching the context values
  const {
    toggleImageFormVisibility,
    imageTitle,
    setImageTitle,
    imageUrl,
    setImageUrl,
    addImage,
    imageId
  } = useContextValues();

  // function that clears the input fields
  const clearInputFields = () => {
    setImageTitle("");
    setImageUrl("");
  };

  // function that handles image form submission
  const handleImageFormSubmission = (event) => {
    event.preventDefault();
    if (imageTitle && imageUrl) {
      addImage(imageTitle, imageUrl,imageId);
      clearInputFields();
    } else {
      alert("Please fill in both fields");
    }
  };
  console.log(imageTitle);
  console.log(imageUrl);

  return (
    <>
      {/* Image Form Container */}
      <form className={imageStyle.form_container} onSubmit={handleImageFormSubmission}>
        <h1>Add Image To</h1>
        {/* Textfield for image name */}
        <input
          type="text"
          required
          placeholder="Title"
          value={imageTitle}
          onChange={(e) => setImageTitle(e.target.value)}
        />
        {/* Textfield for image url */}
        <input
          type="url"
          required
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {/* Create button */}
        <button
          className={imageStyle.create_btn}
          type="submit"
        >
          Create
        </button>
        {/* Clear button */}
        <button className={imageStyle.clear_btn} onClick={clearInputFields}>
          Clear
        </button>
      </form>
      {/* Cancel button */}
      <button
        className={imageStyle.cancel_btn}
        onClick={toggleImageFormVisibility}
      >
        Cancel
      </button>
    </>
  );
}
