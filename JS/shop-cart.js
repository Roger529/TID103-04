document.addEventListener('DOMContentLoaded', () => {
    const decrementButtons = document.querySelectorAll('.decrement');
    const incrementButtons = document.querySelectorAll('.increment');
    const quantityInputs = document.querySelectorAll('.quantity');
    const subtotalElement = document.querySelector('.right-total p:nth-child(1)');
    const shippingCost = 60; // 固定運費
    const totalElement = document.querySelector('.bottom-total p:nth-child(2)');

    // 初始化購物車金額
    updateCartTotal();

    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantityInputs[index].value);
            if (quantity > 1) {
                quantity--;
                quantityInputs[index].value = quantity;
                updateCartTotal();
            } else if (quantity === 1) {
                // 當數量減少至 0 時刪除商品
                const productElement = quantityInputs[index].closest('.product');
                productElement.remove();
                updateCartTotal();
                checkIfCartIsEmpty();
            }
        });
    });

    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantityInputs[index].value);
            quantity++;
            quantityInputs[index].value = quantity;
            updateCartTotal();
        });
    });

    function updateCartTotal() {
        let subtotal = 0;

        // 更新計算所有存在的商品數量和價格
        const quantityInputs = document.querySelectorAll('.quantity'); // 更新所有數量輸入框的選取器
        quantityInputs.forEach((input) => {
            const quantity = parseInt(input.value);
            const priceElement = input.closest('.product').querySelector('.price');
            const price = parseInt(priceElement.textContent.replace('$', ''));
            subtotal += quantity * price;
        });

        subtotalElement.textContent = `$${subtotal}`;
        totalElement.textContent = `$${subtotal + shippingCost}`;
    }

    function checkIfCartIsEmpty() {
        // 檢查購物車中是否還有商品
        const products = document.querySelectorAll('.product');
        if (products.length === 0) {
            alert('購物車已清空');
        }
    }
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