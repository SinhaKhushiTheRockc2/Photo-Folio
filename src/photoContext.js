// Importing necessary modules
import {
    collection,
    onSnapshot,
    doc,
    updateDoc,
    arrayUnion,
    addDoc,
    arrayRemove,
  } from "firebase/firestore";
  import { createContext, useContext, useEffect, useState } from "react";
  import { db } from "./firebaseInit";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  const photoContext = createContext();
  
  // Function that allows easy access of context values
  function useContextValues() {
    const value = useContext(photoContext);
    return value;
  }
  
  // Custom Context Function
  function CustomContextProvider({ children }) {
    // -------------------States--------------
    // Defining state for theme
    const [theme, setTheme] = useState("light");
    // Defining state for loading state
    const [loading, setLoading] = useState(true);
    // Defining state for albums
    const [albums, setAlbums] = useState([]);
    // Defining state for toggling the album form
    const [showAlbumForm, setShowAlbumForm] = useState(false);
    // Defining state to store album name
    const [albumTitle, setAlbumTitle] = useState("");
    //   State to store the imageTitle and ImageUrl and ImageId
    const [imageTitle, setImageTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageId, setImageId] = useState("");
    // State to manage selected albums
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    // State to toggle the image form visibility
    const [showImageForm, setShowImageForm] = useState(false);
    // State to set the current view
    const [currentView, setCurrentView] = useState("albumList");
    // State to manage selected image
    const [selectedImage, setSelectedImage] = useState(null);
    // State to manage carousel
    const [showCarousel, setShowCarousel] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // On initial render fetch all the albums from the database
    useEffect(() => {
      const fetchData = async () => {
        onSnapshot(collection(db, "albums"), (snapshot) => {
          const albums = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // Setting the albums
          setAlbums(albums);
          // Set the loading state as false after all the documents get called
          setLoading(false);
        });
      };
  
      fetchData();
    }, [albums]);
  
    // function that toggles the theme between light and dark
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
  
    // function that toggles the album form visibility
    const toggleAlbumFormVisibility = () => {
      setShowAlbumForm(!showAlbumForm);
    };
  
    //   function that toggles the image form visibility
    const toggleImageFormVisibility = () => {
      setShowImageForm(!showImageForm);
    };
  
    // Function that adds a new album to the album list
    const addAlbum = async (albumTitle) => {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "albums"), {
        albumTitle: albumTitle,
        photos: [],
      });
      showToast("Album created successfully 😃!!!", "success");
      console.log("Document written with ID: ", docRef.id);
    };
  
    // Function that adds or updates an image in an already existing album
    const addImage = async (imageTitle, imageUrl, imageId) => {
      if (!selectedAlbum) {
        showToast("No album selected 🪹", "error");
        return;
      }
  
      try {
        // Check if the image already exists in the album
        const existingImageIndex = selectedAlbum.photos.findIndex(
          (photo) => photo.id === imageId
        );
        setImageId("");
        if (existingImageIndex !== -1) {
          // Image exists, update it
          const updatedPhotos = [...selectedAlbum.photos];
          updatedPhotos[existingImageIndex].imageTitle = imageTitle;
          updatedPhotos[existingImageIndex].imageUrl = imageUrl;
          const albumRef = doc(db, "albums", selectedAlbum.id);
  
          await updateDoc(albumRef, {
            photos: updatedPhotos,
          });
  
          setSelectedAlbum((prevAlbum) => ({
            ...prevAlbum,
            photos: updatedPhotos,
          }));
  
          showToast("Image updated successfully 😊!!!", "success");
          console.log("Image updated in album: ", selectedAlbum.id);
        } else {
          // Image doesn't exist, add it
          const newImage = {
            id: doc(collection(db, "albums")).id,
            imageTitle: imageTitle,
            imageUrl: imageUrl,
          };
  
          const albumRef = doc(db, "albums", selectedAlbum.id);
  
          await updateDoc(albumRef, {
            photos: arrayUnion(newImage),
          });
  
          setSelectedAlbum((prevAlbum) => ({
            ...prevAlbum,
            photos: [...prevAlbum.photos, newImage],
          }));
  
          showToast("Image added successfully 😃!!!", "success");
          console.log("Image added to album: ", selectedAlbum.id);
        }
      } catch (error) {
        showToast("Error adding or updating image 😟", "error");
        console.error("Error adding or updating image: ", error);
      }
    };
  
    // Function that allows image deletion
    const deleteImage = async (imageId) => {
      if (!selectedAlbum) {
        showToast("No album selected 🪹", "error");
        return;
      }
  
      try {
        const albumRef = doc(db, "albums", selectedAlbum.id);
        const imageToDelete = selectedAlbum.photos.find(
          (photo) => photo.id === imageId
        );
  
        await updateDoc(albumRef, {
          photos: arrayRemove(imageToDelete),
        });
  
        // Update the local state
        setSelectedAlbum((prevAlbum) => ({
          ...prevAlbum,
          photos: prevAlbum.photos.filter((photo) => photo.id !== imageId),
        }));
  
        showToast("Image deleted successfully 🗑️", "success");
        console.log("Image deleted from album: ", selectedAlbum.id);
      } catch (error) {
        showToast("Error deleting image 😟", "error");
        console.error("Error deleting image: ", error);
      }
    };
  
    // Helper function to display toast notifications
    const showToast = (message, type) => {
      toast[type](message, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    };
    return (
      <>
        <photoContext.Provider
          value={{
            theme,
            toggleTheme,
            loading,
            albums,
            showAlbumForm,
            toggleAlbumFormVisibility,
            albumTitle,
            setAlbumTitle,
            addAlbum,
            selectedAlbum,
            setSelectedAlbum,
            toggleImageFormVisibility,
            showImageForm,
            imageTitle,
            setImageTitle,
            imageUrl,
            setImageUrl,
            addImage,
            currentView,
            setCurrentView,
            deleteImage,
            selectedImage,
            setSelectedImage,
            imageId,
            setImageId,
            showCarousel,
            setShowCarousel,
            currentImageIndex,
            setCurrentImageIndex,
          }}
        >
          {children}
        </photoContext.Provider>
      </>
    );
  }
  
  // Named export statement
  export { useContextValues };
  
  // Default export statement
  export default CustomContextProvider;
  