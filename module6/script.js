document.addEventListener("DOMContentLoaded", function() {
    const cart = [];
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    function updateCart() {
        cartItemsElement.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(li);
            total += item.price;
        });
        totalElement.textContent = total.toFixed(2);
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const productElement = this.parentElement;
            const productId = productElement.getAttribute("data-id");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = parseFloat(productElement.querySelector("p").textContent.replace("$", ""));
            cart.push({ id: productId, name: productName, price: productPrice });
            updateCart();
        });
    });

    document.getElementById("checkout").addEventListener("click", function() {
        if (cart.length > 0) {
            alert("Items placed successfully!");
            cart.length = 0;
            updateCart();
        } else {
            alert("Your cart is empty!");
        }
    });

    document.getElementById("subscribe-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        if (validateEmail(email)) {
            alert("Thank you for subscribing!");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
