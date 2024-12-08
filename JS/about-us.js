document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // 可選：點擊其他地方時自動關閉選單
    document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });
});
