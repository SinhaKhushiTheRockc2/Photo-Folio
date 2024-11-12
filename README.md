# PhotoFolio - React
Developed a PhotoFolio project using React that allows users to create albums and add or remove images from those albums. The project uses Firebase for backend database management.

## Hosted Link
https://sinhakhushitherockc2.github.io/Photo-Folio/

## Features:
* Add Album: Click on the "Add Album" button to open a form. Fill out the form and click "Create" to add a new album to your collection.
* View Albums: Click on any album to navigate to a page where you can manage the images within that album.
* Add Images: On the album page, click the "Add Image" button to open a form. Fill out the form to add a new image to the album.
* Edit Images: Click on the edit button of any image to autofill the image form and update the image details.
* Delete Images: Click on the delete button of any image to remove it from the album.
* Search Images: Use the search bar on the album page to search for images within the album.
* Theme Toggle: Switch between light and dark themes using the theme toggle button.
* Carousel: View images in a carousel by clicking on an image. Navigate between images using the next and previous buttons.
* Persistent Data: All data is saved in Firebase, ensuring that your albums and images are persisted across sessions.

## Tools Used:
* React: For building the user interface.
* Firebase: For backend database management.
* React Context API: For state management across the application.
* React Toastify: For displaying toast notifications.
* CSS Modules: For styling components.

```bash
PhotoFolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── AlbumList/
│   │   │   ├── AlbumList.js
│   │   │   ├── AlbumList.module.css
│   │   │   └── ...
│   │   ├── ImageList/
│   │   │   ├── ImageList.js
│   │   │   ├── ImageList.module.css
│   │   │   └── ...
│   │   ├── Carousel/
│   │   │   ├── Carousel.js
│   │   │   ├── Carousel.module.css
│   │   │   └── ...
│   │   ├── Dropdown/
│   │   │   ├── Dropdown.js
│   │   │   ├── Dropdown.module.css
│   │   │   └── ...
│   │   └── ...
│   ├── contexts/
│   │   ├── PhotoContext.js
│   │   └── ...
│   ├── firebase/
│   │   ├── firebaseInit.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Installation:
Follow these steps to get the project up and running on your local system:

1. Clone the repository to your local machine:
```bash
  https://github.com/SinhaKhushiTheRockc2/
```
2. Navigate to the root directory of the project:

3. Install all the dependencies:
```bash
    npm install
```
4. Start the development server
```bash 
    npm Start
```
5. Open your web browser and go to http://localhost:3000 to see the application in action.
