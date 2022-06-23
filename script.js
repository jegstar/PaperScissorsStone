function removeBackground() {
    const btns = document.querySelectorAll('.icon');
    btns.forEach(e => e.classList.remove("clicked"));
}

const btns = document.querySelectorAll('.icon');

btns.forEach(function (e) {
    e.addEventListener('click', function (e) {
        removeBackground();
        e.target.classList.add("clicked");
    });
});
