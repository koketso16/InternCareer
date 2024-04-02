// script.js

// Define an array of image URLs
const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
];

let currentIndex = 0; // Initialize the current image index

// Function to display the current image
function displayCurrentImage() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${imageUrls[currentIndex]}" alt="Slideshow Image">`;
}

// Function to advance to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    displayCurrentImage();
}

// Function to go back to the previous image
function previousImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    displayCurrentImage();
}

// Add event listeners for next and previous buttons
document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('previous-button').addEventListener('click', previousImage);

// Initial display of the first image
displayCurrentImage();
