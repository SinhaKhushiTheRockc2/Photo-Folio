// Importing CSS
import { useContextValues } from "../../photoContext"
import AlbumForm from "../album/AlbumForm";
import navStyle from "./Navbar.module.css"

export default function NavBar(){
    // Fetching values from the context
    const {toggleTheme,setCurrentView,currentView}=useContextValues();
    console.log(currentView);

    // navigate back to album list
    const navigateToAlbumList=()=>{
        setCurrentView('albumList');
    }

    return(
        <>
        {/* Navigation Bar */}
            <div className={navStyle.navbar}>
                {/*Icon */}
                <div className={navStyle.navIcon_container} onClick={navigateToAlbumList}>
                    <img src="https://play-lh.googleusercontent.com/FUWsXiCVl9xt1bxfdtZk7QgMQpbui_uxv7qONujjFMrf-B-aU0N4gPJ9qY5hoBsoTuo=w600-h300-pc0xffffff-pd" alt="Logo" className={navStyle.navIcon}/>
                    <h1>PhotoFolio</h1>
                </div>
                {/* Theme Icon */}
                <div className={navStyle.themeIcon_container} onClick={toggleTheme}>
                    <h1>Change Theme</h1>
                    <img src="https://cdn-icons-png.flaticon.com/128/6460/6460167.png" alt="Theme Icon" className={navStyle.nav_themeIcon}/>
                </div>
            </div>
        </>
    )
}