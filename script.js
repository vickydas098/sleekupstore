let cart = [];
const cartCount = document.getElementById("cart-count");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

// Add to Cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        cart.push({ name, price });

        updateCart();
    });
});

// Update Cart
function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Falling Flowers Effect
setInterval(() => {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    document.getElementById("flower-container").appendChild(flower);
    setTimeout(() => flower.remove(), 5000);
}, 500);
