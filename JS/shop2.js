document.addEventListener('DOMContentLoaded', () => {
    const brandFilter = document.getElementById('brand-filter');
    const categoryFilter = document.getElementById('category-filter');
    const productList = document.getElementById('product-list');
    const products = productList.querySelectorAll('.product-item');

    function filterProducts() {
        const selectedBrand = brandFilter.value;
        const selectedCategory = categoryFilter.value;

        products.forEach(product => {
            const productBrand = product.getAttribute('data-brand');
            const productCategory = product.getAttribute('data-category');

            if ((selectedBrand === 'all' || productBrand === selectedBrand) &&
                (selectedCategory === 'all' || productCategory === selectedCategory)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    brandFilter.addEventListener('change', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
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