document.addEventListener('DOMContentLoaded', (event) => {
    // Select all elements with the class 'uniq'
    const elements = document.querySelectorAll('.gallery-item__image-container');

    // Add an 'onclick' event listener to each element
    elements.forEach(element => {
        element.addEventListener('click', () => {
            // Toggle the 'clicked' class on the element
            element.classList.toggle('show-full-image');
        });
    });
});
