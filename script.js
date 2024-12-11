
function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function updateH1FromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h2 = document.querySelector('h2');
    if (utmTerm) {
        h2.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

document.addEventListener('DOMContentLoaded', function() {
    showMessage("Скрипт загружен!");
    logCurrentTime();
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility('.header-content');
    updateH1FromUrl();
});
