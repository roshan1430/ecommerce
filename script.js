function addToCart(button) {
    let product = button.parentElement;
    let name = product.getAttribute("data-name");
    let price = product.getAttribute("data-price");
    let image = product.getAttribute("data-image");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    cartItemsContainer.innerHTML = "";
    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <p>${item.name} - $${item.price}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += parseFloat(item.price);
    });

    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

function goToCheckout() {
    window.location.href = "checkout.html";
}

function loadCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let checkoutContainer = document.getElementById("checkout-items");
    let totalPrice = 0;

    checkoutContainer.innerHTML = "";
    cart.forEach(item => {
        let checkoutItem = document.createElement("div");
        checkoutItem.classList.add("checkout-item");
        checkoutItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <p>${item.name} - $${item.price}</p>
        `;
        checkoutContainer.appendChild(checkoutItem);
        totalPrice += parseFloat(item.price);
    });

    document.getElementById("checkout-total-price").innerText = totalPrice.toFixed(2);
}

if (document.getElementById("cart-items")) {
    window.onload = loadCart;
}
if (document.getElementById("checkout-items")) {
    window.onload = loadCheckout;
}
