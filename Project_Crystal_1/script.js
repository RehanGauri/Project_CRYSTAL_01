// JavaScript to handle slide change
let currentSlide = 0; // Index of the current slide
const slides = document.querySelectorAll('.slide'); // Select all slide elements

// Function to change the slide
function changeSlide(direction) {
    // Hide the current slide
    slides[currentSlide].classList.add('hidden');
    
    // Update the current slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Show the new slide
    slides[currentSlide].classList.remove('hidden');

    // Apply the transform for smooth sliding effect
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Initialize by showing the first slide
slides[currentSlide].classList.remove('hidden');


// Function to handle button click and redirect
function redirectToAnotherPage() {
    // Redirect to underbuy.html
    window.location.href = 'underbuy.html';
}

// Event listener to trigger the function on button click
document.getElementById('buyButton').addEventListener('click', redirectToAnotherPage);

//for address
document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    // Create a Blob with the data
    const data = `Name: ${name}, Address: ${address}\n`;
    const blob = new Blob([data], { type: 'text/plain' });

    // Create a link element to download the data
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'user_data.txt';
    document.body.appendChild(a);
    a.click();

    // Remove the link element after downloading
    document.body.removeChild(a);

    alert('Form Submitted!');
});


