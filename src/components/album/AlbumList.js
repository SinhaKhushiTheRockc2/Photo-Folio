// Importing CSS
import albumStyle from "./Album.module.css";
import { Bars } from "react-loader-spinner";
import { useContextValues } from "../../photoContext";
import AlbumForm from "./AlbumForm";

// Album List
export default function AlbumList() {
  // Fetching the context values
  const {
    loading,
    albums,
    showAlbumForm,
    toggleAlbumFormVisibility,
    setSelectedAlbum,
    selectedAlbum,
    setCurrentView,
    currentView
  } = useContextValues();
  
  console.log('Albums:', albums);
  console.log('Show Album Form:', showAlbumForm);
  console.log('Selected Album:', selectedAlbum);
  console.log('Current View:', currentView);

  // Function to call the ImageList when a particular album is clicked
  const callImageList = (album) => {
    console.log('Album clicked:', album);
    setSelectedAlbum(album);
    setCurrentView('imageList');
  };

  return (
    <>
      <h1 className={albumStyle.h_primary}>Your Albums</h1>
      {/* Button that opens up a form to add the albums */}
      <button
        className={
          showAlbumForm ? albumStyle.setDisplay : albumStyle.addAlbum_btn
        }
        onClick={toggleAlbumFormVisibility}
      >
        Add Album
      </button>
      {showAlbumForm ? <AlbumForm /> : undefined}
      {/* Displays loading spinner */}
      {loading ? (
        <div className={albumStyle.loadingState}>
          <Bars
            height="100"
            width="100"
            radius="10"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <>
          {/* Album container to display all the albums in the list */}
          <div className={albumStyle.parentAlbumContainer}>
            {/* Album container */}
            {albums.map((album) => (
              <div
                className={albumStyle.album_container}
                key={album.id}
                onClick={() => callImageList(album)}
              >
                <img
                  src="https://img.freepik.com/free-vector/photo-album-cartoon-illustration-with-human-hand-holding-pencil-writing-explanation-photograph-scrapbook-page_1284-28262.jpg"
                  alt="album"
                />
                {/* Album Title */}
                <span className={albumStyle.albumTitle}>
                  {album.albumTitle}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}


