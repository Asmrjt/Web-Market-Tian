


// navBar
window.onscroll = function() {
    const navBar = document.getElementById('navBar');
    if (window.scrollY > 50) {
        // Mengubah navbar menjadi lebih transparan saat scroll lebih dari 50px
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    } else {
        // Mengembalikan ke opasitas penuh saat di atas halaman
        navBar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
};


// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 120 // Offset (in px) from the original trigger point
    });
});
