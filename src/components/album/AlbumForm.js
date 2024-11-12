// // Importing CSS
// import { useContextValues } from "../../photoContext";
// import albumStyle from "./Album.module.css";

// // Album Form Component
// export default function AlbumForm(){
//     // Fetching the context values
//     const {toggleAlbumFormVisibility,albumTitle,setAlbumTitle,addAlbum}=useContextValues();
//     console.log(albumTitle);
//     return(
//         <>
//         {/* Album form container */}
//         <div className={albumStyle.formParent_container}>
//             <div className={albumStyle.form_container}>
//                 <h1>Create an album</h1>
//                 {/* Textfield to enter album name */}
//                 <input type="text" required placeholder="Album Name" onChange={(e)=>setAlbumTitle(e.target.value)} value={albumTitle}/>
//                 {/* Create button */}
//                 <button className={albumStyle.create_btn} onClick={()=>addAlbum(albumTitle)}>Create</button>
//                 {/* Clear button */}
//                 <button className={albumStyle.clear_btn} onClick={()=>setAlbumTitle("")}>Clear</button>
//             </div>
//             {/* Cancel Button */}
//             <button className={albumStyle.cancel_btn} onClick={toggleAlbumFormVisibility}>Cancel</button>
//             </div>
//         </>
//     )
// }


// Importing CSS
import { useContextValues } from "../../photoContext";
import albumStyle from "./Album.module.css";

// Album Form Component
export default function AlbumForm(){
    // Fetching the context values
    const { toggleAlbumFormVisibility, albumTitle, setAlbumTitle, addAlbum } = useContextValues();
    console.log(albumTitle);

    // Function to handle album creation
    const handleCreateAlbum = (event) => {
        event.preventDefault();
        if (albumTitle.trim() !== "") {
            addAlbum(albumTitle);
            setAlbumTitle(""); // Clear the input field after adding the album
        } 
    };

    return (
        <>
        {/* Album form container */}
        <div className={albumStyle.formParent_container}>
            <form className={albumStyle.form_container} onSubmit={handleCreateAlbum}>
                <h1>Create an album</h1>
                {/* Textfield to enter album name */}
                <input 
                    type="text" 
                    required 
                    placeholder="Album Name" 
                    onChange={(e) => setAlbumTitle(e.target.value)} 
                    value={albumTitle}
                />
                {/* Create button */}
                <button className={albumStyle.create_btn} type="submit">Create</button>
                {/* Clear button */}
                <button className={albumStyle.clear_btn} onClick={() => setAlbumTitle("")}>Clear</button>
            </form>
            {/* Cancel Button */}
            <button className={albumStyle.cancel_btn} onClick={toggleAlbumFormVisibility}>Cancel</button>
        </div>
        </>
    );
}
