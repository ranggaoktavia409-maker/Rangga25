// =====================================
// AMBIL ELEMENT
// =====================================

const photoCards = document.querySelectorAll(".photo-card");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxTitle = document.getElementById("lightboxTitle");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const closeButton =
    document.getElementById("closeButton");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");


// =====================================
// DATA FOTO
// =====================================

let currentIndex = 0;

const photos = [];


// Ambil semua data foto
photoCards.forEach((card, index) => {

    const image = card.querySelector("img");

    photos.push({
        image: image.src,

        title: card.dataset.title,

        description: card.dataset.description
    });


    // Klik foto
    card.addEventListener("click", () => {

        currentIndex = index;

        openLightbox();

    });

});


// =====================================
// BUKA LIGHTBOX
// =====================================

function openLightbox() {

    const photo = photos[currentIndex];

    lightboxImage.src = photo.image;

    lightboxTitle.textContent = photo.title;

    lightboxDescription.textContent =
        photo.description;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


// =====================================
// TUTUP LIGHTBOX
// =====================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";
}


// =====================================
// FOTO BERIKUTNYA
// =====================================

function nextPhoto() {

    currentIndex++;

    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    openLightbox();
}


// =====================================
// FOTO SEBELUMNYA
// =====================================

function previousPhoto() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    }

    openLightbox();
}


// =====================================
// EVENT BUTTON
// =====================================

closeButton.addEventListener(
    "click",
    closeLightbox
);

nextButton.addEventListener(
    "click",
    nextPhoto
);

prevButton.addEventListener(
    "click",
    previousPhoto
);


// =====================================
// KLIK AREA GELAP
// =====================================

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// =====================================
// KEYBOARD
// =====================================

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        previousPhoto();
    }

});


// =====================================
// SWIPE UNTUK HP
// =====================================

let touchStartX = 0;

let touchEndX = 0;


lightbox.addEventListener("touchstart", (event) => {

    touchStartX =
        event.changedTouches[0].screenX;

});


lightbox.addEventListener("touchend", (event) => {

    touchEndX =
        event.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    // Swipe kiri
    if (difference > 50) {
        nextPhoto();
    }


    // Swipe kanan
    if (difference < -50) {
        previousPhoto();
    }

}
