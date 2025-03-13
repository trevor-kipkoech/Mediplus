let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    let newTransformValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + newTransformValue + ")";
}
