// Add print functionality
document.querySelector(".btn-primary").addEventListener("click", function () {
    window.print();
});

// Simulate download functionality
document.querySelector(".btn-secondary").addEventListener("click", function (e) {
    e.preventDefault();
    alert('HTML content ready! Use your browser\'s "Save Page As" feature to download this guide.');
});
