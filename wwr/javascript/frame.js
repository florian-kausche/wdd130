document.addEventListener("DOMContentLoaded", function() {
    const frameColorInput = document.getElementById('frame-color');
    const imageContainer = document.querySelector('.image-container');

    frameColorInput.addEventListener('input', function(event) {
        imageContainer.style.borderColor = event.target.value;
    });
});
