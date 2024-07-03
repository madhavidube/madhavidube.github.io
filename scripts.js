// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show the certificate
function showCertificate(pdfUrl) {
    // Show the modal
    document.getElementById('pdfModal').style.display = "block";

    // Set the iframe source to the PDF URL
    document.getElementById('pdfFrame').src = pdfUrl;

    // Set the download link URL
    document.getElementById('downloadLink').href = pdfUrl;
}

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('pdfModal').style.display = "none";
    document.getElementById('pdfFrame').src = "";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == document.getElementById('pdfModal')) {
        document.getElementById('pdfModal').style.display = "none";
        document.getElementById('pdfFrame').src = "";
    }
// Add this to your scripts.js file
// Add this to your scripts.js file

document.addEventListener('DOMContentLoaded', function () {
    const movingTexts = document.querySelectorAll('.moving-text');
    movingTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('start-animation');
        }, index * 5000); // Adjust the delay as needed (5 seconds between each)
    });
});



}
