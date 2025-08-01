const images = [
  "shingojira.jpg",
  "Shadow.jpg",
  "Miles_Venom.jpg",
  "Pachyrhinosaurus.jpg"
];

let currentIndex = 0;

const photo = document.getElementById("photoSwitcher");

photo.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  photo.src = images[currentIndex];
});
