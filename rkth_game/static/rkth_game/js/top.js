document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.querySelector('.startBtn');
    const selectMenu = document.querySelector('.select');
    const title = document.querySelector('h1');

    startBtn.addEventListener('click', function () {
        startBtn.style.display = 'none';
        title.style.display = 'none';
        selectMenu.style.display = 'block';
    });
});
