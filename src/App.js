// Import statements
import { useContextValues } from "./photoContext";
import AlbumList from "./components/album/AlbumList";
import NavBar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import ImageList from "./components/image/ImageList";
import Carousel from "./components/image/Carousel";

function App() {
  const{theme,currentView,selectedAlbum,showCarousel}=useContextValues();
  console.log(theme);
  return (
    <div  className={theme}>
        <NavBar />
        <ToastContainer/>
        {currentView==='albumList'&&<AlbumList />}
        {currentView==='imageList' && selectedAlbum && <ImageList album={selectedAlbum}/>}
        {showCarousel?<Carousel/>:undefined}
      </div>
  );
}

export default App;
