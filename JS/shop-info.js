
// 小圖片切換主圖片
    const smallImages = document.querySelectorAll(".small-image img");
    const mainImage = document.querySelector(".main-image img");

    smallImages.forEach(img => {
        img.addEventListener("click", function() {
            mainImage.src = this.dataset.image;
        });
    });

    const specButtons = document.querySelectorAll('.specification button');
specButtons.forEach(button => {
    button.addEventListener('click', () => {
        specButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 加入購物車按鈕
    const addToCartButton = document.getElementById("add-to-cart-btn");

    addToCartButton.addEventListener("click", function() {
        alert("商品已加入購物車！");
    });
});

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





