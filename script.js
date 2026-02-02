/* GALLERY SECTION */
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");
    const closeBtn = document.querySelector(".close");
    const galleryImages = document.querySelectorAll(".gallery-item img");

    // Open popup when clicking an image
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
        });
    });

    // Close popup when clicking the (x)
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close popup when clicking outside the image
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
	
document.addEventListener("DOMContentLoaded", function () {
  


	
